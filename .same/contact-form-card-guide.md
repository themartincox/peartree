# ContactFormCard Component Usage Guide

## Overview

The `ContactFormCard` is a flexible, reusable contact form component that can be customized for different pages and purposes. It includes standard fields (name, email, phone, message) and up to 5 optional custom fields that only appear when configured.

## Core Features

✅ **Standard Fields**: First Name, Last Name, Email, Phone, Message (always included)
✅ **5 Custom Fields**: Only show when provided in props
✅ **Flexible Field Types**: text, email, tel, textarea, select dropdowns
✅ **Form Validation**: Built-in required field validation
✅ **Customizable**: Title, description, submit text, and styling
✅ **Consistent Design**: Matches the existing contact page styling

## Basic Usage

```tsx
import ContactFormCard from "@/components/ContactFormCard";

// Simple form with just core fields
<ContactFormCard />
```

## Custom Field Configuration

Each custom field can be configured with these properties:

```tsx
interface CustomField {
  id: string;           // Unique field ID
  name: string;         // Form field name
  label: string;        // Display label
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required?: boolean;   // Whether field is required
  placeholder?: string; // Placeholder text
  options?: { value: string; label: string; }[]; // For select fields
  rows?: number;        // For textarea fields (default: 3)
}
```

## Example Configurations

### 1. General Contact Form (like current contact page)

```tsx
<ContactFormCard
  title="Get In Touch"
  description="Send us a message and we'll get back to you within 24 hours."
  customField1={{
    id: "enquiryType",
    name: "enquiryType",
    label: "Enquiry Type",
    type: "select",
    required: true,
    options: [
      { value: "appointment", label: "Book an Appointment" },
      { value: "emergency", label: "Dental Emergency" },
      { value: "membership", label: "Membership Enquiry" },
      { value: "treatment", label: "Treatment Information" },
      { value: "complaint", label: "Complaint or Feedback" },
      { value: "other", label: "Other" }
    ]
  }}
  customField2={{
    id: "preferredTime",
    name: "preferredTime",
    label: "Preferred Appointment Time",
    type: "select",
    options: [
      { value: "morning", label: "Morning (8AM - 12PM)" },
      { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
      { value: "evening", label: "Evening (5PM - 6PM)" },
      { value: "saturday", label: "Saturday" }
    ]
  }}
/>
```

### 2. Service Page Form (e.g., Teeth Whitening)

```tsx
<ContactFormCard
  title="Book Your Whitening Consultation"
  description="Ready to brighten your smile? Get in touch to discuss our whitening options."
  submitText="Request Whitening Consultation"
  customField1={{
    id: "whiteningType",
    name: "whiteningType",
    label: "Whitening Treatment Interest",
    type: "select",
    required: true,
    options: [
      { value: "boutique", label: "Boutique Whitening" },
      { value: "enlighten", label: "Enlighten Whitening" },
      { value: "consultation", label: "Not sure - need consultation" }
    ]
  }}
  customField2={{
    id: "currentShade",
    name: "currentShade",
    label: "How would you describe your current tooth color?",
    type: "select",
    options: [
      { value: "yellow", label: "Yellowish" },
      { value: "gray", label: "Grayish" },
      { value: "brown", label: "Brown stains" },
      { value: "white", label: "Already quite white" }
    ]
  }}
  customField3={{
    id: "previousWhitening",
    name: "previousWhitening",
    label: "Previous Whitening Experience",
    type: "textarea",
    placeholder: "Have you had professional whitening before? Any sensitivity issues?",
    rows: 3
  }}
/>
```

### 3. Membership Page Form

```tsx
<ContactFormCard
  title="Join Our Membership Plan"
  description="Interested in our dental membership? Let us help you choose the right plan."
  submitText="Request Membership Information"
  customField1={{
    id: "membershipPlan",
    name: "membershipPlan",
    label: "Membership Plan Interest",
    type: "select",
    required: true,
    options: [
      { value: "adult", label: "Adult Plan" },
      { value: "child", label: "Child Plan" },
      { value: "family", label: "Family Plan" },
      { value: "unsure", label: "Not sure - need guidance" }
    ]
  }}
  customField2={{
    id: "familySize",
    name: "familySize",
    label: "Family Size",
    type: "select",
    options: [
      { value: "1", label: "Just me" },
      { value: "2", label: "2 people" },
      { value: "3", label: "3 people" },
      { value: "4", label: "4 people" },
      { value: "5plus", label: "5+ people" }
    ]
  }}
  customField3={{
    id: "currentDentist",
    name: "currentDentist",
    label: "Do you currently have a dentist?",
    type: "select",
    options: [
      { value: "no", label: "No, looking for a new dentist" },
      { value: "yes-nhs", label: "Yes, NHS dentist" },
      { value: "yes-private", label: "Yes, private dentist" },
      { value: "lapsed", label: "Haven't been in a while" }
    ]
  }}
/>
```

### 4. Emergency Dental Form

```tsx
<ContactFormCard
  title="Emergency Dental Care"
  description="Need urgent dental care? Fill out this form and we'll contact you immediately."
  submitText="Request Emergency Care"
  showMarketingConsent={false}
  customField1={{
    id: "urgencyLevel",
    name: "urgencyLevel",
    label: "Urgency Level",
    type: "select",
    required: true,
    options: [
      { value: "severe", label: "Severe pain - need immediate help" },
      { value: "moderate", label: "Moderate pain - within 24 hours" },
      { value: "mild", label: "Mild discomfort - within a few days" }
    ]
  }}
  customField2={{
    id: "symptoms",
    name: "symptoms",
    label: "Symptoms",
    type: "textarea",
    required: true,
    placeholder: "Please describe your symptoms, when they started, and what triggers the pain...",
    rows: 4
  }}
  customField3={{
    id: "medication",
    name: "medication",
    label: "Current Medication/Allergies",
    type: "textarea",
    placeholder: "List any medications you're taking or allergies we should know about...",
    rows: 2
  }}
/>
```

### 5. Simple Contact Form (minimal fields)

```tsx
<ContactFormCard
  title="Quick Question?"
  description="Send us a quick message and we'll get right back to you."
  submitText="Send Quick Message"
  // No custom fields - just core fields will show
/>
```

## Implementation Steps

### 1. Import the Component
```tsx
import ContactFormCard from "@/components/ContactFormCard";
```

### 2. Add to Any Page
The component can be dropped into any page layout. Example in a service page:

```tsx
// In your service page
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      <ContactFormCard
        title="Book Your Consultation"
        customField1={...}
        customField2={...}
      />
    </div>
  </div>
</section>
```

### 3. Styling Options
```tsx
// Custom styling
<ContactFormCard
  className="border-2 border-pear-primary bg-pear-primary/5"
  title="Special Offer Consultation"
/>
```

## Form Submission

The component supports different submission methods:

### 1. Default (form action)
```tsx
<ContactFormCard
  formAction="/api/contact"
  // Form will submit to your API endpoint
/>
```

### 2. Custom Handler
```tsx
<ContactFormCard
  onSubmit={(formData) => {
    // Handle form submission
    console.log('Form data:', formData);
    // Send to API, show success message, etc.
  }}
/>
```

## Benefits

✅ **Consistent Design**: Same professional look across all pages
✅ **Easy to Deploy**: Drop into any page with a single component
✅ **Flexible Configuration**: Adapt to any use case with custom fields
✅ **No Duplication**: One component, multiple uses
✅ **Conditional Fields**: Only show fields when needed
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Form Validation**: Built-in validation and error handling

## Field Types Available

1. **text**: Regular text input
2. **email**: Email input with validation
3. **tel**: Phone number input
4. **textarea**: Multi-line text area
5. **select**: Dropdown with options

The component handles all the styling, validation, and responsive design automatically!
