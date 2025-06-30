"use client";

import { useState, useEffect } from "react";
import { generateDirectDebitGuaranteePDF, generateMembershipTermsPDF, downloadPDF } from "@/lib/generatePersonalizedPDFs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Crown,
  CheckCircle,
  Shield,
  ArrowRight,
  ArrowLeft,
  CalendarDays,
  Phone,
  Mail,
  User,
  Lock,
  Building2,
  CreditCard,
  Users,
  Baby,
  UserPlus,
  Sparkles,
  Star,
  Zap,
  Heart,
  FileText,
  Download
} from "lucide-react";

export default function MembershipSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isClinicAccess, setIsClinicAccess] = useState(false);
  const [isCheckingIp, setIsCheckingIp] = useState(true);

  const [formData, setFormData] = useState({
    // Personal Details
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    postcode: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Direct Debit Details
    accountHolderName: "",
    sortCode: "",
    accountNumber: "",
    bankName: "",
    directDebitConfirmed: false,
    ddGuaranteeRead: false,
    membershipTermsRead: false,

    // Patient Status & Preferences
    isExistingPatient: "",
    preferredDentist: "",
    dentistGenderPreference: "",
    preferredAppointmentTime: "",
    communicationPreference: "email",
    marketingConsent: false,
    termsAccepted: false,

    // Staff Tracking (for clinic access)
    staffMemberName: "",
    staffMemberId: "",

    // Family Members
    familyMembers: [] as Array<{
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      relationship: string;
      plan: string;
    }>
  });

  const plans = {
    planA: {
      name: "PLAN A",
      price: "£10.95",
      period: "/month",
      dailyCost: "Just 36p per day",
      savings: "£116",
      color: "dental-green",
      gradient: "from-dental-green to-dental-green/90",
      features: [
        "1 Dental check up a year",
        "1 Scale & Polish a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planB: {
      name: "PLAN B",
      price: "£15.95",
      period: "/month",
      dailyCost: "Just 53p per day",
      savings: "£168",
      color: "pear-primary",
      gradient: "from-pear-primary to-pear-primary/90",
      features: [
        "2 Dental check ups a year",
        "1 Scale & Polish a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: true
    },
    planC: {
      name: "PLAN C",
      price: "£19.95",
      period: "/month",
      dailyCost: "Just 66p per day",
      savings: "£177",
      color: "soft-blue",
      gradient: "from-soft-blue to-soft-blue/90",
      features: [
        "2 Dental check ups a year",
        "2 Scale & Polishes a year",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planD: {
      name: "PLAN D",
      price: "£25.95",
      period: "/month",
      dailyCost: "Just 86p per day",
      savings: "£286",
      color: "pear-gold",
      gradient: "from-pear-gold to-pear-gold/80",
      features: [
        "2 Dental check ups a year",
        "2 Scale & Polishes a year",
        "1 Free emergency appt a year",
        "50% off stain removal",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    },
    planE: {
      name: "PLAN E",
      price: "£29.95",
      period: "/month",
      dailyCost: "Just 99p per day",
      savings: "£351",
      color: "pear-gold",
      gradient: "from-pear-gold to-pear-gold/80",
      features: [
        "2 Dental check ups a year",
        "4 Scale & Polishes a year",
        "1 Free emergency appt a year",
        "50% off stain removal",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    }
  };

  const currentPlan = selectedPlan ? plans[selectedPlan as keyof typeof plans] : plans.planB;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    // Validate step 1 (Plan Selection) before proceeding
    if (currentStep === 1) {
      if (!selectedPlan) {
        alert('Please select a membership plan to continue.');
        return;
      }
    }

    // Validate step 2 (Personal Details) before proceeding
    if (currentStep === 2) {
      const step2RequiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'postcode', 'address', 'isExistingPatient'];
      const missingStep2Fields = step2RequiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingStep2Fields.length > 0) {
        alert(`Please fill in all required fields: ${missingStep2Fields.join(', ').replace('isExistingPatient', 'existing patient status')}`);
        return;
      }

      // Validate dentist preference based on patient status
      if (formData.isExistingPatient === 'no' && !formData.dentistGenderPreference) {
        alert('Please select your dentist gender preference.');
        return;
      }

      if (formData.isExistingPatient === 'yes' && !formData.preferredDentist) {
        alert('Please select your preferred dentist.');
        return;
      }
    }

    // Validate step 3 (Direct Debit) before proceeding
    if (currentStep === 3) {
      const ddRequiredFields = ['accountHolderName', 'sortCode', 'accountNumber'];
      const missingDDFields = ddRequiredFields.filter(field => !formData[field as keyof typeof formData]);

      if (missingDDFields.length > 0) {
        alert(`Please fill in all Direct Debit fields: ${missingDDFields.join(', ')}`);
        return;
      }

      if (!formData.directDebitConfirmed) {
        alert('Please confirm your Direct Debit authorization to proceed.');
        return;
      }
    }

    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'postcode', 'address', 'accountHolderName', 'sortCode', 'accountNumber'];
      const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

      // Validate direct debit confirmation
      if (!formData.directDebitConfirmed) {
        alert('Please confirm your Direct Debit authorization to proceed.');
        return;
      }

      // Validate document acknowledgments
      if (!formData.ddGuaranteeRead) {
        alert('Please read and acknowledge the Direct Debit Guarantee to proceed.');
        return;
      }

      if (!formData.membershipTermsRead) {
        alert('Please read and agree to the Membership Terms and Conditions to proceed.');
        return;
      }

      // Check staff member name if clinic access
      if (isClinicAccess && !formData.staffMemberName.trim()) {
        alert('Please enter the staff member name for clinic signups.');
        return;
      }

      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        return;
      }

      // Validate terms acceptance
      if (!formData.termsAccepted) {
        alert('Please accept the Website Terms and Conditions and Privacy Policy to proceed.');
        return;
      }

      console.log("Submitting membership signup:", formData);

      const response = await fetch('/api/membership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan,
          isClinicSignup: isClinicAccess
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to success page with details
        const params = new URLSearchParams({
          applicationId: result.applicationId,
          plan: currentPlan.name,
          name: `${formData.firstName} ${formData.lastName}`,
          ...(formData.staffMemberName && { staff: formData.staffMemberName })
        });

        window.location.href = `/membership/signup/success?${params.toString()}`;
      } else {
        alert(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        relationship: "",
        plan: "planA"
      }]
    }));
  };

  // Check if user is accessing from clinic IP
  useEffect(() => {
    const checkClinicAccess = async () => {
      try {
        setIsCheckingIp(true);
        const response = await fetch('/api/ip-check');
        const data = await response.json();
        setIsClinicAccess(data.isClinicIp);
        console.log('Clinic access detected:', data.isClinicIp);
      } catch (error) {
        console.error('Error checking IP:', error);
        setIsClinicAccess(false);
      } finally {
        setIsCheckingIp(false);
      }
    };

    checkClinicAccess();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">

      {/* Header */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <div className="brand-logo text-2xl text-pear-primary">
                  PEAR<span className="ml-20px">TREE</span>
                </div>
                <div className="brand-subtitle text-sm text-pear-primary mt-4px">
                  DENTAL
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-dental-green text-white">
                <Lock className="w-4 h-4 mr-2" />
                Secure Signup
              </Badge>
              <div className="text-sm text-gray-500">
                Step {currentStep} of 4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center py-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-dental-green text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <div className="text-xs mt-2 text-center">
                    {step === 1 && "Plan"}
                    {step === 2 && "Details"}
                    {step === 3 && "Payment"}
                    {step === 4 && "Confirm"}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
              <div
                className="h-full bg-dental-green transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Plan Selection */}
            {currentStep === 1 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Choose Your Plan</CardTitle>
                  <p className="text-gray-600">Select the membership plan that's right for you</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(plans).map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedPlan(key)}
                        className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          selectedPlan === key
                            ? `border-${plan.color} bg-gradient-to-br ${plan.gradient} text-white shadow-xl`
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                        } ${plan.popular ? 'transform scale-105' : ''}`}
                      >
                        {plan.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-dental-green text-white">
                            Most Popular
                          </Badge>
                        )}

                        <div className={`text-center mb-4 ${
                          selectedPlan === key ? 'text-white' : 'text-pear-primary'
                        }`}>
                          <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                          <div className="text-3xl font-bold">{plan.price}</div>
                          <div className="text-sm opacity-80">{plan.period}</div>
                          <div className="text-xs opacity-70 mt-1">{plan.dailyCost}</div>
                        </div>

                        <div className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                selectedPlan === key ? 'text-white' : `text-${plan.color}`
                              }`} />
                              <span className={`text-sm ${
                                selectedPlan === key ? 'text-white' : 'text-gray-700'
                              }`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {selectedPlan === key && (
                          <div className="mt-4 text-center">
                            <CheckCircle className="w-6 h-6 text-white mx-auto" />
                            <div className="text-sm font-semibold mt-1">Selected</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue with {currentPlan.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Personal Details</CardTitle>
                  <p className="text-gray-600">Tell us a bit about yourself</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <select
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                      >
                        <option value="">Select Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                    </div>

                    <div></div>

                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="07xxx xxx xxx"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input
                        id="postcode"
                        value={formData.postcode}
                        onChange={(e) => handleInputChange("postcode", e.target.value)}
                        placeholder="NG14 5DP"
                        className="mt-1"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your full address"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        placeholder="Full name"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        placeholder="Phone number"
                        className="mt-1"
                      />
                    </div>

                    {/* Existing Patient Section */}
                    <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                      <div className="bg-pear-background/30 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-pear-primary mb-4">Patient Status</h3>

                        <div className="mb-6">
                          <Label className="text-base font-medium">Are you an existing patient at Pear Tree Dental? *</Label>
                          <div className="flex gap-4 mt-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="existingPatient"
                                value="yes"
                                checked={formData.isExistingPatient === 'yes'}
                                onChange={(e) => handleInputChange("isExistingPatient", e.target.value)}
                                className="text-pear-primary"
                              />
                              <span>Yes, I'm an existing patient</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="existingPatient"
                                value="no"
                                checked={formData.isExistingPatient === 'no'}
                                onChange={(e) => handleInputChange("isExistingPatient", e.target.value)}
                                className="text-pear-primary"
                              />
                              <span>No, I'm new to the practice</span>
                            </label>
                          </div>
                        </div>

                        {/* Existing Patient - Dentist Selection */}
                        {formData.isExistingPatient === 'yes' && (
                          <div>
                            <Label htmlFor="preferredDentist">Which dentist would you prefer? *</Label>
                            <select
                              id="preferredDentist"
                              className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                              value={formData.preferredDentist}
                              onChange={(e) => handleInputChange("preferredDentist", e.target.value)}
                            >
                              <option value="">Select your preferred dentist</option>
                              <option value="Dr. Smith">Dr. Smith</option>
                              <option value="Dr. Johnson">Dr. Johnson</option>
                              <option value="Dr. Brown">Dr. Brown</option>
                              <option value="Dr. Wilson">Dr. Wilson</option>
                              <option value="Dr. Davis">Dr. Davis</option>
                            </select>
                          </div>
                        )}

                        {/* New Patient - Welcome & Gender Preference */}
                        {formData.isExistingPatient === 'no' && (
                          <div className="space-y-4">
                            <div className="bg-pear-primary/10 p-4 rounded-lg border border-pear-primary/20">
                              <h4 className="font-semibold text-pear-primary mb-2">Welcome to Pear Tree Dental!</h4>
                              <p className="text-sm text-gray-700">
                                We're delighted to have you join our practice. Our experienced team is here to provide
                                you with exceptional dental care in a comfortable, friendly environment.
                              </p>
                            </div>

                            <div>
                              <Label className="text-base font-medium">Do you have a preference for your dentist? *</Label>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="male"
                                    checked={formData.dentistGenderPreference === 'male'}
                                    onChange={(e) => handleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>Male dentist</span>
                                </label>
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="female"
                                    checked={formData.dentistGenderPreference === 'female'}
                                    onChange={(e) => handleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>Female dentist</span>
                                </label>
                                <label className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                                  <input
                                    type="radio"
                                    name="dentistGenderPreference"
                                    value="no-preference"
                                    checked={formData.dentistGenderPreference === 'no-preference'}
                                    onChange={(e) => handleInputChange("dentistGenderPreference", e.target.value)}
                                    className="text-pear-primary"
                                  />
                                  <span>No preference</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Staff Member Section - Only show for clinic access */}
                    {isClinicAccess && (
                      <>
                        <div className="md:col-span-2 mt-6 pt-6 border-t border-gray-200">
                          <div className="bg-pear-primary/5 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                              <User className="w-5 h-5 text-pear-primary mr-2" />
                              <h3 className="text-lg font-semibold text-pear-primary">Staff Member Information</h3>
                              <Badge variant="secondary" className="ml-2 bg-pear-primary/10 text-pear-primary">
                                Clinic Access Detected
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">
                              Please enter the staff member details who is helping with this membership signup.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="staffMemberName">Staff Member Name *</Label>
                                <Input
                                  id="staffMemberName"
                                  value={formData.staffMemberName}
                                  onChange={(e) => handleInputChange("staffMemberName", e.target.value)}
                                  placeholder="Enter staff member's full name"
                                  className="mt-1"
                                />
                              </div>
                              <div>
                                <Label htmlFor="staffMemberId">Staff ID (Optional)</Label>
                                <Input
                                  id="staffMemberId"
                                  value={formData.staffMemberId}
                                  onChange={(e) => handleInputChange("staffMemberId", e.target.value)}
                                  placeholder="Employee ID or initials"
                                  className="mt-1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Family Members Section */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-pear-primary">Family Members</h3>
                      <Button onClick={addFamilyMember} variant="outline" size="sm">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Family Member
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Children under 18 join free when a parent has a membership plan
                    </p>

                    {formData.familyMembers.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Baby className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                        <p>No family members added yet</p>
                        <p className="text-sm">Click "Add Family Member" to include them in your plan</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {formData.familyMembers.map((member, index) => (
                          <Card key={index} className="p-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <Input
                                placeholder="First Name"
                                value={member.firstName}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].firstName = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <Input
                                placeholder="Last Name"
                                value={member.lastName}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].lastName = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <Input
                                type="date"
                                placeholder="Date of Birth"
                                value={member.dateOfBirth}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].dateOfBirth = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              />
                              <select
                                className="p-2 border border-gray-300 rounded-md"
                                value={member.relationship}
                                onChange={(e) => {
                                  const updated = [...formData.familyMembers];
                                  updated[index].relationship = e.target.value;
                                  setFormData(prev => ({ ...prev, familyMembers: updated }));
                                }}
                              >
                                <option value="">Relationship</option>
                                <option value="spouse">Spouse/Partner</option>
                                <option value="child">Child</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </Card>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Direct Debit Details */}
            {currentStep === 3 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Direct Debit Setup</CardTitle>
                  <p className="text-gray-600">Set up your monthly membership payments</p>
                </CardHeader>
                <CardContent className="p-8">

                  {/* Selected Plan Summary */}
                  <div className={`bg-gradient-to-r ${currentPlan.gradient} text-white p-6 rounded-xl mb-8`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">{currentPlan.name}</h3>
                        <p className="opacity-90">{currentPlan.dailyCost}</p>
                        <p className="text-sm opacity-80">Saves you £{currentPlan.savings} per year</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{currentPlan.price}</div>
                        <div className="opacity-90">{currentPlan.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Debit Benefits */}
                  <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-700 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">Why Direct Debit?</span>
                    </div>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Automatic monthly payments - never miss a payment</li>
                      <li>• Protected by the Direct Debit Guarantee</li>
                      <li>• Lower processing fees mean better value for you</li>
                      <li>• Cancel or change at any time with advance notice</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                      <Input
                        id="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
                        placeholder="Name as it appears on your bank account"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="sortCode">Sort Code *</Label>
                      <Input
                        id="sortCode"
                        value={formData.sortCode}
                        onChange={(e) => handleInputChange("sortCode", e.target.value)}
                        placeholder="12-34-56"
                        maxLength={8}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="accountNumber">Account Number *</Label>
                      <Input
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                        placeholder="12345678"
                        maxLength={8}
                        className="mt-1"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="bankName">Bank Name (Optional)</Label>
                      <Input
                        id="bankName"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange("bankName", e.target.value)}
                        placeholder="e.g. Lloyds, Barclays, NatWest"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Originator ID */}
                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-blue-700 mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">Originator's Identification Number</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-blue-900 tracking-wider">
                      5 7 5 1 7 1
                    </div>
                    <p className="text-sm text-blue-600 mt-2">
                      This number identifies Membership Plans Limited as the authorized Direct Debit collector.
                    </p>
                  </div>





                  {/* Confirmation Checkbox */}
                  <div className="mt-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.directDebitConfirmed}
                        onChange={(e) => handleInputChange("directDebitConfirmed", e.target.checked)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">
                        I confirm that I am the account holder and am solely able to authorise debits from this account.
                        I understand that Pear Tree Dental will collect {currentPlan.price} monthly via Direct Debit.
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={nextStep} className="bg-dental-green hover:bg-dental-green/90 text-white">
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Confirm Your Membership</CardTitle>
                  <p className="text-gray-600">Review your details and complete signup</p>
                </CardHeader>
                <CardContent className="p-8">

                  {/* Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Plan Summary */}
                    <div>
                      <h3 className="font-bold text-lg text-pear-primary mb-4">Your Plan</h3>
                      <div className={`bg-gradient-to-r ${currentPlan.gradient} text-white p-6 rounded-xl`}>
                        <h4 className="font-bold text-xl">{currentPlan.name}</h4>
                        <div className="text-2xl font-bold mt-2">{currentPlan.price}{currentPlan.period}</div>
                        <div className="opacity-90 mt-1">{currentPlan.dailyCost}</div>

                        <div className="mt-4 space-y-2">
                          {currentPlan.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-white" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {formData.familyMembers.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Family Members:</h4>
                          <div className="space-y-2">
                            {formData.familyMembers.map((member, index) => (
                              <div key={index} className="text-sm text-gray-600">
                                {member.firstName} {member.lastName} ({member.relationship})
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Personal Details Summary */}
                    <div>
                      <h3 className="font-bold text-lg text-pear-primary mb-4">Your Details</h3>
                      <div className="space-y-3 text-sm">
                        <div><strong>Name:</strong> {formData.title} {formData.firstName} {formData.lastName}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        <div><strong>Phone:</strong> {formData.phone}</div>
                        <div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
                        <div><strong>Address:</strong> {formData.address}</div>
                        <div><strong>Postcode:</strong> {formData.postcode}</div>
                      </div>

                      {/* Direct Debit Summary */}
                      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                          <Building2 className="w-4 h-4 mr-2" />
                          Direct Debit Details
                        </h4>
                        <div className="text-sm text-blue-600 space-y-1">
                          <div><strong>Account Holder:</strong> {formData.accountHolderName}</div>
                          <div><strong>Sort Code:</strong> {formData.sortCode}</div>
                          <div><strong>Account Number:</strong> ****{formData.accountNumber.slice(-4)}</div>
                          {formData.bankName && <div><strong>Bank:</strong> {formData.bankName}</div>}
                          <div className="mt-2 text-xs">
                            Monthly payment of {currentPlan.price} will be collected on the same date each month.
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-pear-background/50 rounded-lg">
                        <h4 className="font-semibold text-pear-primary">What happens next?</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Your membership starts immediately</li>
                          <li>• We'll email your membership details</li>
                          <li>• Book your first appointment online or call us</li>
                          <li>• Your first Direct Debit collection starts today</li>
                          <li>• Emergency cover is active immediately</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Key Terms Summary */}
                  <div className="mt-8">
                    <h3 className="font-bold text-lg text-pear-primary mb-4">Key Things You Need to Know</h3>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                      <p className="text-blue-800 font-medium mb-4">Before you join, here are the 5 most important things about your membership:</p>
                      <ul className="space-y-3 text-blue-700">
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                          <span><strong>Monthly payments:</strong> You'll pay {currentPlan.price} every month by Direct Debit. Payments continue until you cancel with 1 month's notice.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                          <span><strong>Book your own appointments:</strong> Your plan includes treatments, but you need to book and attend appointments yourself. We don't automatically schedule them for you.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                          <span><strong>Use it or lose it:</strong> Unused treatments don't carry over to the next year, and there are no refunds for treatments you don't use.</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                          <span><strong>Early cancellation:</strong> If you cancel within your first 12 months, you'll need to pay back any savings you received on treatments at our standard prices (the difference between what you paid and our normal fees).</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                          <span><strong>Payment problems:</strong> If your Direct Debit payment fails, all membership benefits stop immediately until payment is sorted out.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Required Documents - Personalized PDFs */}
                  <div className="mt-8">
                    <h3 className="font-bold text-lg text-pear-primary mb-4">Required Documents</h3>
                    <p className="text-gray-600 mb-6">
                      Please download and read both documents before completing your membership signup.
                      These documents contain your personalized plan details and dentist information.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Direct Debit Guarantee PDF */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <Building2 className="w-6 h-6 text-blue-600 mr-3" />
                          <div>
                            <h4 className="font-semibold text-blue-800">Direct Debit Guarantee</h4>
                            <p className="text-sm text-gray-600">Personalized with your plan details</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            const patientInfo = {
                              firstName: formData.firstName,
                              lastName: formData.lastName,
                              planName: currentPlan.name,
                              planPrice: currentPlan.price,
                              dentistName: formData.isExistingPatient === 'yes'
                                ? formData.preferredDentist
                                : (formData.dentistGenderPreference === 'no-preference'
                                  ? 'No preference'
                                  : `${formData.dentistGenderPreference?.charAt(0).toUpperCase()}${formData.dentistGenderPreference?.slice(1)} dentist`),
                              isExistingPatient: formData.isExistingPatient,
                              dentistGenderPreference: formData.dentistGenderPreference
                            };
                            const pdf = generateDirectDebitGuaranteePDF(patientInfo);
                            downloadPDF(pdf, `DD-Guarantee-${formData.firstName}-${formData.lastName}.pdf`);
                          }}
                          variant="outline"
                          className="w-full"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download DD Guarantee
                        </Button>

                        <div className="mt-4 flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="ddGuaranteeConfirmed"
                            checked={formData.ddGuaranteeRead}
                            onChange={(e) => handleInputChange("ddGuaranteeRead", e.target.checked)}
                            className="mt-1"
                          />
                          <label htmlFor="ddGuaranteeConfirmed" className="text-sm text-gray-700 cursor-pointer">
                            I have downloaded and read the Direct Debit Guarantee *
                          </label>
                        </div>
                      </div>

                      {/* Membership Terms PDF */}
                      <div className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                          <FileText className="w-6 h-6 text-pear-primary mr-3" />
                          <div>
                            <h4 className="font-semibold text-pear-primary">Terms & Conditions</h4>
                            <p className="text-sm text-gray-600">Personalized membership agreement</p>
                          </div>
                        </div>
                        <Button
                          onClick={() => {
                            const patientInfo = {
                              firstName: formData.firstName,
                              lastName: formData.lastName,
                              planName: currentPlan.name,
                              planPrice: currentPlan.price,
                              dentistName: formData.isExistingPatient === 'yes'
                                ? formData.preferredDentist
                                : (formData.dentistGenderPreference === 'no-preference'
                                  ? 'No preference'
                                  : `${formData.dentistGenderPreference?.charAt(0).toUpperCase()}${formData.dentistGenderPreference?.slice(1)} dentist`),
                              isExistingPatient: formData.isExistingPatient,
                              dentistGenderPreference: formData.dentistGenderPreference
                            };
                            const pdf = generateMembershipTermsPDF(patientInfo);
                            downloadPDF(pdf, `Terms-Conditions-${formData.firstName}-${formData.lastName}.pdf`);
                          }}
                          variant="outline"
                          className="w-full"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Terms & Conditions
                        </Button>

                        <div className="mt-4 flex items-start space-x-3">
                          <input
                            type="checkbox"
                            id="termsConfirmed"
                            checked={formData.membershipTermsRead}
                            onChange={(e) => handleInputChange("membershipTermsRead", e.target.checked)}
                            className="mt-1"
                          />
                          <label htmlFor="termsConfirmed" className="text-sm text-gray-700 cursor-pointer">
                            I have downloaded and agree to the Terms & Conditions *
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website Terms and Conditions */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I accept the <a href="/terms" className="text-dental-green hover:underline">Website Terms and Conditions</a> and
                        <a href="/privacy" className="text-dental-green hover:underline ml-1">Privacy Policy</a> *
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="marketing"
                        checked={formData.marketingConsent}
                        onChange={(e) => handleInputChange("marketingConsent", e.target.checked)}
                        className="mt-1"
                      />
                      <label htmlFor="marketing" className="text-sm text-gray-700">
                        I'd like to receive updates about dental health tips and special offers
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="communication"
                        checked={formData.communicationPreference === "email"}
                        onChange={(e) => handleInputChange("communicationPreference", e.target.checked ? "email" : "post")}
                        className="mt-1"
                      />
                      <label htmlFor="communication" className="text-sm text-gray-700">
                        I prefer to receive communications by email rather than post
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button onClick={prevStep} variant="outline">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.termsAccepted || !formData.ddGuaranteeRead || !formData.membershipTermsRead}
                      className="bg-dental-green hover:bg-dental-green/90 text-white font-semibold px-8"
                    >
                      <Crown className="w-4 h-4 mr-2" />
                      Complete Membership Signup
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-dental-green" />
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-dental-green" />
              <span>2,000+ Happy Members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-dental-green" />
              <span>Instant Activation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-dental-green" />
              <span>24/7 Support: 0115 931 2525</span>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
