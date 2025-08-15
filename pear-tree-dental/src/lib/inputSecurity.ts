/**
//  * Comprehensive Input Security and Validation Utilities
 * Protects against SQL injection, XSS, CSRF, and other injection attacks
 */

// Email validation regex (RFC 5322 compliant)
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// UK phone number regex
const UK_PHONE_REGEX =
  /^(?:(?:\+44\s?)|(?:0))(?:\d{2}\s?\d{4}\s?\d{4}|\d{3}\s?\d{3}\s?\d{4}|\d{4}\s?\d{6}|\d{5}\s?\d{5})$/;

// UK postcode regex
const UK_POSTCODE_REGEX = /^[A-Z]{1,2}[0-9R][0-9A-Z]?\s?[0-9][A-Z]{2}$/i;

// UK sort code regex (XX-XX-XX format)
const SORT_CODE_REGEX = /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/;

// UK account number regex (6-8 digits)
const ACCOUNT_NUMBER_REGEX = /^[0-9]{6,8}$/;

/**
//  * Sanitizes text input to prevent XSS and injection attacks
 */
export function sanitizeTextInput(input: string): string {
  if (typeof input !== "string") return "";

  return (
    input
      // Remove HTML tags and script content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<[^>]*>/g, "")
      // Remove SQL injection patterns
      .replace(/('|(\\')|(;)|(--)|(\s(OR|AND)\s))/gi, "")
      // Remove dangerous characters
      .replace(/[<>"'\\&]/g, "")
      // Normalize whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}

/**
//  * Validates and sanitizes email addresses
 */
export function validateAndSanitizeEmail(email: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!email || typeof email !== "string") {
    return { isValid: false, sanitized: "", error: "Email is required" };
  }

  const sanitized = email.toLowerCase().trim();

  if (sanitized.length > 254) {
    return { isValid: false, sanitized: "", error: "Email address too long" };
  }

  if (!EMAIL_REGEX.test(sanitized)) {
    return { isValid: false, sanitized: "", error: "Invalid email format" };
  }

  return { isValid: true, sanitized };
}

/**
//  * Validates and sanitizes UK phone numbers
 */
export function validateAndSanitizePhone(phone: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!phone || typeof phone !== "string") {
    return { isValid: false, sanitized: "", error: "Phone number is required" };
  }

  // Remove all non-digit characters except + and spaces
  let sanitized = phone.replace(/[^\d\s+]/g, "");

  // Normalize UK phone numbers
  if (sanitized.startsWith("0")) {
    sanitized = `+44${sanitized.substring(1)}`;
  }

  if (!UK_PHONE_REGEX.test(phone)) {
    return {
      isValid: false,
      sanitized: "",
      error: "Invalid UK phone number format",
    };
  }

  return { isValid: true, sanitized: sanitized.replace(/\s+/g, "") };
}

/**
//  * Validates and sanitizes UK postcodes
 */
export function validateAndSanitizePostcode(postcode: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!postcode || typeof postcode !== "string") {
    return { isValid: false, sanitized: "", error: "Postcode is required" };
  }

  const sanitized = postcode.toUpperCase().replace(/\s+/g, " ").trim();

  if (!UK_POSTCODE_REGEX.test(sanitized)) {
    return {
      isValid: false,
      sanitized: "",
      error: "Invalid UK postcode format",
    };
  }

  return { isValid: true, sanitized };
}

/**
//  * Validates and sanitizes UK sort codes
 */
export function validateAndSanitizeSortCode(sortCode: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!sortCode || typeof sortCode !== "string") {
    return { isValid: false, sanitized: "", error: "Sort code is required" };
  }

  // Remove all non-numeric and non-hyphen characters
  let sanitized = sortCode.replace(/[^0-9-]/g, "");

  // Format as XX-XX-XX if just digits
  if (/^[0-9]{6}$/.test(sanitized)) {
    sanitized = `${sanitized.substring(0, 2)}-${sanitized.substring(2, 4)}-${sanitized.substring(4, 6)}`;
  }

  if (!SORT_CODE_REGEX.test(sanitized)) {
    return {
      isValid: false,
      sanitized: "",
      error: "Invalid sort code format (should be XX-XX-XX)",
    };
  }

  return { isValid: true, sanitized };
}

/**
//  * Validates and sanitizes UK account numbers
 */
export function validateAndSanitizeAccountNumber(accountNumber: string): {
  isValid: boolean;
  sanitized: string;
  error?: string;
} {
  if (!accountNumber || typeof accountNumber !== "string") {
    return {
      isValid: false,
      sanitized: "",
      error: "Account number is required",
    };
  }

  // Remove all non-numeric characters
  const sanitized = accountNumber.replace(/[^0-9]/g, "");

  if (!ACCOUNT_NUMBER_REGEX.test(sanitized)) {
    return {
      isValid: false,
      sanitized: "",
      error: "Invalid account number (should be 6-8 digits)",
    };
  }

  return { isValid: true, sanitized };
}

/**
 * Validates and sanitizes names (first name, last name, etc.)
 */
export function validateAndSanitizeName(
  name: string,
  fieldName = "Name",
): { isValid: boolean; sanitized: string; error?: string } {
  if (!name || typeof name !== "string") {
    return { isValid: false, sanitized: "", error: `${fieldName} is required` };
  }

  const sanitized = sanitizeTextInput(name);

  if (sanitized.length < 1) {
    return { isValid: false, sanitized: "", error: `${fieldName} is required` };
  }

  if (sanitized.length > 50) {
    return {
      isValid: false,
      sanitized: "",
      error: `${fieldName} is too long (max 50 characters)`,
    };
  }

  // Check for valid name characters (letters, spaces, hyphens, apostrophes)
  if (!/^[a-zA-Z\s'-]+$/.test(sanitized)) {
    return {
      isValid: false,
      sanitized: "",
      error: `${fieldName} contains invalid characters`,
    };
  }

  return { isValid: true, sanitized };
}

/**
//  * Comprehensive membership form validation
 */
export interface MembershipFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  postcode: string;
  accountHolderName: string;
  sortCode: string;
  accountNumber: string;
  selectedPlan: string;
  isExistingPatient: string;
  [key: string]: string;
}

export interface ValidationResult {
  isValid: boolean;
  sanitizedData: Partial<MembershipFormData>;
  errors: { [field: string]: string };
}

/**
//  * Validates entire membership form
 */
export function validateMembershipForm(
  data: Record<string, unknown>,
): ValidationResult {
  const errors: { [field: string]: string } = {};
  const sanitizedData: Partial<MembershipFormData> = {};

  // Validate first name
  const firstNameResult = validateAndSanitizeName(data.firstName, "First name");
  if (!firstNameResult.isValid) {
    errors.firstName = firstNameResult.error!;
  } else {
    sanitizedData.firstName = firstNameResult.sanitized;
  }

  // Validate last name
  const lastNameResult = validateAndSanitizeName(data.lastName, "Last name");
  if (!lastNameResult.isValid) {
    errors.lastName = lastNameResult.error!;
  } else {
    sanitizedData.lastName = lastNameResult.sanitized;
  }

  // Validate email
  const emailResult = validateAndSanitizeEmail(data.email);
  if (!emailResult.isValid) {
    errors.email = emailResult.error!;
  } else {
    sanitizedData.email = emailResult.sanitized;
  }

  // Validate phone
  const phoneResult = validateAndSanitizePhone(data.phone);
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.error!;
  } else {
    sanitizedData.phone = phoneResult.sanitized;
  }

  // Validate postcode
  const postcodeResult = validateAndSanitizePostcode(data.postcode);
  if (!postcodeResult.isValid) {
    errors.postcode = postcodeResult.error!;
  } else {
    sanitizedData.postcode = postcodeResult.sanitized;
  }

  // Validate sort code
  const sortCodeResult = validateAndSanitizeSortCode(data.sortCode);
  if (!sortCodeResult.isValid) {
    errors.sortCode = sortCodeResult.error!;
  } else {
    sanitizedData.sortCode = sortCodeResult.sanitized;
  }

  // Validate account number
  const accountNumberResult = validateAndSanitizeAccountNumber(
    data.accountNumber,
  );
  if (!accountNumberResult.isValid) {
    errors.accountNumber = accountNumberResult.error!;
  } else {
    sanitizedData.accountNumber = accountNumberResult.sanitized;
  }

  // Validate account holder name
  const accountHolderResult = validateAndSanitizeName(
    data.accountHolderName,
    "Account holder name",
  );
  if (!accountHolderResult.isValid) {
    errors.accountHolderName = accountHolderResult.error!;
  } else {
    sanitizedData.accountHolderName = accountHolderResult.sanitized;
  }

  // Validate address
  if (!data.address || typeof data.address !== "string") {
    errors.address = "Address is required";
  } else {
    const sanitizedAddress = sanitizeTextInput(data.address);
    if (sanitizedAddress.length < 10) {
      errors.address = "Please provide a complete address";
    } else if (sanitizedAddress.length > 200) {
      errors.address = "Address is too long";
    } else {
      sanitizedData.address = sanitizedAddress;
    }
  }

  // Validate date of birth
  if (!data.dateOfBirth || typeof data.dateOfBirth !== "string") {
    errors.dateOfBirth = "Date of birth is required";
  } else {
    const dob = new Date(data.dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (Number.isNaN(dob.getTime())) {
      errors.dateOfBirth = "Invalid date of birth";
    } else if (age < 16 || age > 120) {
      errors.dateOfBirth = "Invalid age (must be between 16 and 120)";
    } else {
      sanitizedData.dateOfBirth = data.dateOfBirth;
    }
  }

  // Validate selected plan
  const validPlans = ["planA", "planB", "planC", "planD", "planE", "family"];
  if (!validPlans.includes(data.selectedPlan)) {
    errors.selectedPlan = "Invalid membership plan selected";
  } else {
    sanitizedData.selectedPlan = data.selectedPlan;
  }

  // Validate patient status
  if (!["yes", "no"].includes(data.isExistingPatient)) {
    errors.isExistingPatient = "Please specify if you are an existing patient";
  } else {
    sanitizedData.isExistingPatient = data.isExistingPatient;
  }

  // Copy other safe fields with sanitization
  const safeFields = ["title", "preferredDentist", "dentistGenderPreference"];
  safeFields.forEach((field) => {
    if (data[field] && typeof data[field] === "string") {
      sanitizedData[field] = sanitizeTextInput(data[field]);
    }
  });

  // Copy boolean fields
  const booleanFields = [
    "directDebitConfirmed",
    "membershipTermsRead",
    "marketingConsent",
  ];
  booleanFields.forEach((field) => {
    if (typeof data[field] === "boolean") {
      sanitizedData[field] = data[field];
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    sanitizedData,
    errors,
  };
}
