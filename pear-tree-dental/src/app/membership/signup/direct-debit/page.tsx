"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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
  Users,
  Baby,
  UserPlus,
  Sparkles,
  Star,
  Zap,
  Heart,
  FileText,
  Eye,
  Download,
  Banknote,
  Signature,
  UserCheck,
  X
} from "lucide-react";
import TermsAndConditionsModal from "@/components/TermsAndConditionsModal";
import DirectDebitGuaranteeModal from "@/components/DirectDebitGuaranteeModal";

export default function DirectDebitMembershipSignup() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("planB");

  // Update selected plan based on URL parameter
  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && plans[planParam as keyof typeof plans]) {
      setSelectedPlan(planParam);
    }
  }, [searchParams]);
  const [formData, setFormData] = useState({
    // Page 1: Personal Details
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    postcode: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",

    // Family Members
    familyMembers: [] as Array<{
      title: string;
      firstName: string;
      lastName: string;
      dateOfBirth: string;
      relationship: string;
      plan: string;
    }>,

    // Page 2: Plan Details
    isExistingPatient: false,
    preferredDentist: "",
    genderPreference: "",

    // Page 3: Payment Details
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    sortCode: "",
    startDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Tomorrow
    monthlyFee: "",
    termsAccepted: false,
    ddGuaranteeAccepted: false,
    patientSignature: "",
    signatureDate: "",
    consentGiven: false,
    marketingConsent: false
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
    },
    family: {
      name: "FAMILY PLAN",
      price: "£49.50",
      period: "/month",
      dailyCost: "Just £1.65 per day",
      savings: "£600+",
      color: "pear-primary",
      gradient: "from-pear-primary to-dental-green",
      features: [
        "2 Adults get Plan C benefits",
        "Children under 18 included free",
        "All family members at same address",
        "10% discount on all treatments",
        "Worldwide dental accident & emergency cover"
      ],
      popular: false
    }
  };

  const dentists = [
    "Javaad Mirza - MD, BDS (GDC: 290378)",
    "Imrana Ishaque - BDS, MFDS (GDC: 252578)",
    "Janet Kerr - BDS LDS RCS - (GDC: 60861)"
  ];

  const currentPlan = plans[selectedPlan as keyof typeof plans];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      // Scroll to top to show step header
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top to show step header
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<{
    applicationId: string;
    patientName: string;
    plan: string;
  } | null>(null);

  // Modal states
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isDirectDebitModalOpen, setIsDirectDebitModalOpen] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/membership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedPlan,
          ...formData
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmitSuccess({
        applicationId: result.applicationId,
        patientName: result.patientName,
        plan: result.plan
      });

    } catch (error) {
      console.error('Error submitting membership application:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addFamilyMember = () => {
    setFormData(prev => ({
      ...prev,
      familyMembers: [...prev.familyMembers, {
        title: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        relationship: "",
        plan: "planA"
      }]
    }));
  };

  const removeFamilyMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter((_, i) => i !== index)
    }));
  };

  const updateFamilyMember = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background/30 to-white">



      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex justify-between">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center py-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep
                      ? 'bg-dental-green text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  <div className="text-xs mt-2 text-center">
                    {step === 1 && "Personal Details"}
                    {step === 2 && "Plan Details"}
                    {step === 3 && "Payment Setup"}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
              <div
                className="h-full bg-dental-green transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Personal Details</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-dental-green text-white">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Signup
                    </Badge>
                    <div className="text-sm text-gray-500">
                      Step {currentStep} of 3
                    </div>
                  </div>
                  <p className="text-gray-600">Tell us about yourself and any family members you'd like to include</p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Main Patient Details */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Main Patient Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
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

                      <div>
                        <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                        <Input
                          id="address"
                          type="text"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          className="mt-1"
                          placeholder="House number and street name"

                        />
                      </div>

                      <div>
                        <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                        <Input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="postcode">Postcode <span className="text-red-500">*</span></Label>
                        <Input
                          id="postcode"
                          type="text"
                          value={formData.postcode}
                          onChange={(e) => handleInputChange("postcode", e.target.value)}
                          className="mt-1"

                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency Contact (Optional)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="emergencyContactName">Contact Name</Label>
                        <Input
                          id="emergencyContactName"
                          type="text"
                          value={formData.emergencyContactName}
                          onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="emergencyContactPhone">Contact Phone</Label>
                        <Input
                          id="emergencyContactPhone"
                          type="tel"
                          value={formData.emergencyContactPhone}
                          onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="emergencyContactRelationship">Relationship</Label>
                        <select
                          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          value={formData.emergencyContactRelationship}
                          onChange={(e) => handleInputChange("emergencyContactRelationship", e.target.value)}
                        >
                          <option value="">Select Relationship</option>
                          <option value="spouse">Spouse</option>
                          <option value="partner">Partner</option>
                          <option value="parent">Parent</option>
                          <option value="child">Child</option>
                          <option value="sibling">Sibling</option>
                          <option value="friend">Friend</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Family Members */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-pear-primary flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Family Members (Optional)
                      </h3>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addFamilyMember}
                        className="text-pear-primary border-pear-primary hover:bg-pear-primary hover:text-white"
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Add Family Member
                      </Button>
                    </div>

                    {formData.familyMembers.map((member, index) => (
                      <div key={index} className="border rounded-lg p-6 mb-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium text-gray-900">Family Member {index + 1}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFamilyMember(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            Remove
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div>
                            <Label>Title</Label>
                            <select
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                              value={member.title}
                              onChange={(e) => updateFamilyMember(index, "title", e.target.value)}
                            >
                              <option value="">Select Title</option>
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Miss">Miss</option>
                              <option value="Ms">Ms</option>
                              <option value="Master">Master</option>
                            </select>
                          </div>

                          <div>
                            <Label>First Name</Label>
                            <Input
                              type="text"
                              value={member.firstName}
                              onChange={(e) => updateFamilyMember(index, "firstName", e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label>Last Name</Label>
                            <Input
                              type="text"
                              value={member.lastName}
                              onChange={(e) => updateFamilyMember(index, "lastName", e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label>Date of Birth</Label>
                            <Input
                              type="date"
                              value={member.dateOfBirth}
                              onChange={(e) => updateFamilyMember(index, "dateOfBirth", e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label>Relationship</Label>
                            <select
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                              value={member.relationship}
                              onChange={(e) => updateFamilyMember(index, "relationship", e.target.value)}
                            >
                              <option value="">Select Relationship</option>
                              <option value="spouse">Spouse</option>
                              <option value="partner">Partner</option>
                              <option value="child">Child</option>
                              <option value="parent">Parent</option>
                              <option value="sibling">Sibling</option>
                            </select>
                          </div>

                          <div>
                            <Label>Plan</Label>
                            <select
                              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                              value={member.plan}
                              onChange={(e) => updateFamilyMember(index, "plan", e.target.value)}
                            >
                              {Object.entries(plans).map(([key, plan]) => (
                                <option key={key} value={key}>{plan.name} - {plan.price}/month</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <div></div>
                    <Button
                      onClick={nextStep}
                      className="bg-dental-green hover:bg-dental-green/90 text-white"
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                    >
                      Continue to Plan Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Plan Details */}
            {currentStep === 2 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Plan Details</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-dental-green text-white">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Signup
                    </Badge>
                    <div className="text-sm text-gray-500">
                      Step {currentStep} of 3
                    </div>
                  </div>
                  <p className="text-gray-600">Confirm your plan selection and preferences</p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Current Plan Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <Crown className="w-5 h-5 mr-2" />
                      Your Selected Plan
                    </h3>

                    <div className={`p-6 rounded-xl bg-gradient-to-br ${currentPlan.gradient} text-white`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold">{currentPlan.name}</h4>
                          <div className="text-2xl font-bold mt-2">{currentPlan.price}<span className="text-sm">/month</span></div>
                          <div className="text-sm opacity-90">{currentPlan.dailyCost}</div>
                        </div>
                        <div className="text-right">
                          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            Save {currentPlan.savings} annually
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 gap-2">
                        {currentPlan.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="text-pear-primary border-pear-primary"
                      >
                        Change Plan
                      </Button>
                    </div>
                  </div>

                  {/* Existing Patient Check */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <UserCheck className="w-5 h-5 mr-2" />
                      Patient Information
                    </h3>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="mb-4">
                        <Label className="text-base font-medium">Are you an existing patient at Pear Tree Dental?</Label>
                        <div className="mt-2 space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="existingPatient"
                              value="true"
                              checked={formData.isExistingPatient === true}
                              onChange={() => handleInputChange("isExistingPatient", true)}
                              className="form-radio text-pear-primary"
                            />
                            <span className="ml-2">Yes, I'm an existing patient</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="existingPatient"
                              value="false"
                              checked={formData.isExistingPatient === false}
                              onChange={() => handleInputChange("isExistingPatient", false)}
                              className="form-radio text-pear-primary"
                            />
                            <span className="ml-2">No, I'm a new patient</span>
                          </label>
                        </div>
                      </div>

                      {formData.isExistingPatient && (
                        <div className="bg-dental-green/10 p-4 rounded-md">
                          <p className="text-sm text-dental-green font-medium">
                            ✓ Great! As an existing patient, we already have your medical history on file.
                          </p>
                        </div>
                      )}

                      {formData.isExistingPatient === false && (
                        <div className="bg-pear-primary/10 p-4 rounded-md">
                          <p className="text-sm text-pear-primary font-medium">
                            ℹ️ As a new patient, we'll schedule an initial consultation to create your treatment plan.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dentist/Gender Preference */}
                  {formData.isExistingPatient ? (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-pear-primary mb-4">Select Your Dentist</h3>

                      <div className="grid grid-cols-1 gap-4">
                        {dentists.map((dentist) => (
                          <label key={dentist} className="relative">
                            <input
                              type="radio"
                              name="preferredDentist"
                              value={dentist}
                              checked={formData.preferredDentist === dentist}
                              onChange={() => handleInputChange("preferredDentist", dentist)}
                              className="sr-only"
                            />
                            <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              formData.preferredDentist === dentist
                                ? 'border-pear-primary bg-pear-primary/5'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{dentist}</span>
                                {formData.preferredDentist === dentist && (
                                  <CheckCircle className="w-5 h-5 text-pear-primary" />
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-pear-primary mb-4">Dentist Preference</h3>
                      <p className="text-gray-600 mb-4">Would you prefer a male or female dentist?</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="relative">
                          <input
                            type="radio"
                            name="genderPreference"
                            value="male"
                            checked={formData.genderPreference === "male"}
                            onChange={() => handleInputChange("genderPreference", "male")}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.genderPreference === "male"
                              ? 'border-pear-primary bg-pear-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Male Dentist</span>
                              {formData.genderPreference === "male" && (
                                <CheckCircle className="w-5 h-5 text-pear-primary" />
                              )}
                            </div>
                          </div>
                        </label>

                        <label className="relative">
                          <input
                            type="radio"
                            name="genderPreference"
                            value="female"
                            checked={formData.genderPreference === "female"}
                            onChange={() => handleInputChange("genderPreference", "female")}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.genderPreference === "female"
                              ? 'border-pear-primary bg-pear-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Female Dentist</span>
                              {formData.genderPreference === "female" && (
                                <CheckCircle className="w-5 h-5 text-pear-primary" />
                              )}
                            </div>
                          </div>
                        </label>

                        <label className="relative md:col-span-2">
                          <input
                            type="radio"
                            name="genderPreference"
                            value="no-preference"
                            checked={formData.genderPreference === "no-preference"}
                            onChange={() => handleInputChange("genderPreference", "no-preference")}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.genderPreference === "no-preference"
                              ? 'border-pear-primary bg-pear-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">No Preference</span>
                              {formData.genderPreference === "no-preference" && (
                                <CheckCircle className="w-5 h-5 text-pear-primary" />
                              )}
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Personal Details
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-dental-green hover:bg-dental-green/90 text-white"
                      disabled={formData.isExistingPatient ? !formData.preferredDentist : !formData.genderPreference}
                    >
                      Continue to Payment Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Payment Details */}
            {currentStep === 3 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Payment Setup</CardTitle>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-dental-green text-white">
                      <Lock className="w-4 h-4 mr-2" />
                      Secure Signup
                    </Badge>
                    <div className="text-sm text-gray-500">
                      Step {currentStep} of 3
                    </div>
                  </div>
                  <p className="text-gray-600">Set up your direct debit and review terms</p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Terms & Conditions */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Terms & Conditions
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Terms & Conditions</span>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setIsTermsModalOpen(true)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setIsTermsModalOpen(true)}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Membership terms and practice policies</p>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">Direct Debit Guarantee</span>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setIsDirectDebitModalOpen(true)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setIsDirectDebitModalOpen(true)}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Your rights under the Direct Debit Guarantee</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                          className="mt-1 form-checkbox text-pear-primary"
                        />
                        <span className="text-sm">
                          I have read and accept the Terms & Conditions <span className="text-red-500">*</span>
                        </span>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.ddGuaranteeAccepted}
                          onChange={(e) => handleInputChange("ddGuaranteeAccepted", e.target.checked)}
                          className="mt-1 form-checkbox text-pear-primary"
                        />
                        <span className="text-sm">
                          I understand my rights under the Direct Debit Guarantee <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Bank Account Details */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <Banknote className="w-5 h-5 mr-2" />
                      Bank Account Details
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="accountHolderName">Account Holder Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="accountHolderName"
                          type="text"
                          value={formData.accountHolderName}
                          onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
                          className="mt-1"
                          placeholder="Name on bank account"

                        />
                      </div>

                      <div>
                        <Label htmlFor="bankName">Bank Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="bankName"
                          type="text"
                          value={formData.bankName}
                          onChange={(e) => handleInputChange("bankName", e.target.value)}
                          className="mt-1"

                        />
                      </div>

                      <div>
                        <Label htmlFor="sortCode">Sort Code <span className="text-red-500">*</span></Label>
                        <Input
                          id="sortCode"
                          type="text"
                          value={formData.sortCode}
                          onChange={(e) => handleInputChange("sortCode", e.target.value)}
                          className="mt-1"
                          placeholder="12-34-56"
                          pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}"

                        />
                      </div>

                      <div>
                        <Label htmlFor="accountNumber">Account Number <span className="text-red-500">*</span></Label>
                        <Input
                          id="accountNumber"
                          type="text"
                          value={formData.accountNumber}
                          onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                          className="mt-1"
                          placeholder="12345678"
                          pattern="[0-9]{8}"

                        />
                      </div>

                      <div>
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                          className="mt-1"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Your membership will start tomorrow. You can change this if you prefer a later start date.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Monthly Payment:</strong> {currentPlan.price} will be collected on the {new Date().getDate()}th of each month
                      </p>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4 flex items-center">
                      <Signature className="w-5 h-5 mr-2" />
                      Signature & Declaration
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="patientSignature">Patient Signature <span className="text-red-500">*</span></Label>
                        <Input
                          id="patientSignature"
                          type="text"
                          value={formData.patientSignature}
                          onChange={(e) => handleInputChange("patientSignature", e.target.value)}
                          className="mt-1"
                          placeholder="Type your full name as signature"

                        />
                      </div>

                      <div>
                        <Label htmlFor="signatureDate">Date <span className="text-red-500">*</span></Label>
                        <Input
                          id="signatureDate"
                          type="date"
                          value={formData.signatureDate}
                          onChange={(e) => handleInputChange("signatureDate", e.target.value)}
                          className="mt-1"
                          defaultValue={new Date().toISOString().split('T')[0]}

                        />
                      </div>
                    </div>
                  </div>

                  {/* Consent & Marketing */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-pear-primary mb-4">Declaration & Consent</h3>

                    <div className="space-y-4">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.consentGiven}
                          onChange={(e) => handleInputChange("consentGiven", e.target.checked)}
                          className="mt-1 form-checkbox text-pear-primary"
                        />
                        <span className="text-sm">
                          I declare that the information I have provided is true and complete. I consent to Pear Tree Dental processing my personal data for the purposes of providing dental care and managing my membership. <span className="text-red-500">*</span>
                        </span>
                      </label>

                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={formData.marketingConsent}
                          onChange={(e) => handleInputChange("marketingConsent", e.target.checked)}
                          className="mt-1 form-checkbox text-pear-primary"
                        />
                        <span className="text-sm">
                          I would like to receive marketing communications about dental health tips, practice updates, and special offers (optional)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Success Message */}
                  {submitSuccess && (
                    <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                        <h3 className="text-lg font-semibold text-green-800">Application Submitted Successfully!</h3>
                      </div>
                      <div className="space-y-2 text-green-700">
                        <p><strong>Application ID:</strong> {submitSuccess.applicationId}</p>
                        <p><strong>Patient:</strong> {submitSuccess.patientName}</p>
                        <p><strong>Plan:</strong> {submitSuccess.plan}</p>
                      </div>
                      <div className="mt-4 p-4 bg-green-100 rounded-md">
                        <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• You'll receive a confirmation email with your membership agreement</li>
                          <li>• Our team will process your direct debit setup within 2 business days</li>
                          <li>• Your membership benefits are active from your start date</li>
                          <li>• You can book appointments by calling 0115 931 2525</li>
                          <li>• Your worldwide emergency cover is active immediately</li>
                        </ul>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        <Button
                          onClick={() => window.location.href = '/'}
                          className="bg-dental-green hover:bg-dental-green/90 text-white"
                        >
                          Return to Homepage
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center mb-4">
                        <X className="w-6 h-6 text-red-600 mr-3" />
                        <h3 className="text-lg font-semibold text-red-800">Application Failed</h3>
                      </div>
                      <p className="text-red-700 mb-4">{submitError}</p>
                      <div className="flex space-x-4">
                        <Button
                          onClick={() => {
                            setSubmitError(null);
                            setSubmitSuccess(null);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Try Again
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Support
                        </Button>
                      </div>
                    </div>
                  )}

                  {!submitSuccess && (
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Plan Details
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className="bg-dental-green hover:bg-dental-green/90 text-white"
                        disabled={isSubmitting || !formData.termsAccepted || !formData.ddGuaranteeAccepted || !formData.accountHolderName || !formData.sortCode || !formData.accountNumber || !formData.patientSignature || !formData.consentGiven}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <CheckCircle className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </section>

      {/* Terms & Conditions Modal */}
      <TermsAndConditionsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        selectedPlan={selectedPlan}
        planPrice={currentPlan.price}
      />

      {/* Direct Debit Guarantee Modal */}
      <DirectDebitGuaranteeModal
        isOpen={isDirectDebitModalOpen}
        onClose={() => setIsDirectDebitModalOpen(false)}
      />

    </div>
  );
}
