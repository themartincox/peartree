"use client";

import { useState } from "react";
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
  Calendar,
  Phone,
  Mail,
  User,
  CreditCard,
  Lock,
  Users,
  Baby,
  UserPlus,
  Sparkles,
  Star,
  Zap,
  Heart
} from "lucide-react";

export default function MembershipSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("planB");
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

    // Medical Information
    medicalConditions: "",
    currentMedications: "",
    allergies: "",
    previousDentist: "",
    lastCheckup: "",

    // Payment Details
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    billingPostcode: "",

    // Preferences
    preferredAppointmentTime: "",
    communicationPreference: "email",
    marketingConsent: false,
    termsAccepted: false,

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

  const currentPlan = plans[selectedPlan as keyof typeof plans];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    // Here you would normally submit to your backend
    console.log("Submitting membership signup:", formData);
    alert("Membership signup successful! Welcome to Pear Tree Dental.");
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
                Step {currentStep} of 5
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
              {[1, 2, 3, 4, 5].map((step) => (
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
                    {step === 3 && "Medical"}
                    {step === 4 && "Payment"}
                    {step === 5 && "Confirm"}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200">
              <div
                className="h-full bg-dental-green transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
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

            {/* Step 3: Medical Information */}
            {currentStep === 3 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Medical Information</CardTitle>
                  <p className="text-gray-600">Help us provide you with the best care</p>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="medicalConditions">Do you have any medical conditions?</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                        placeholder="Please list any medical conditions, or write 'None'"
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="currentMedications">Are you currently taking any medications?</Label>
                      <Textarea
                        id="currentMedications"
                        value={formData.currentMedications}
                        onChange={(e) => handleInputChange("currentMedications", e.target.value)}
                        placeholder="Please list any medications, or write 'None'"
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="allergies">Do you have any allergies?</Label>
                      <Textarea
                        id="allergies"
                        value={formData.allergies}
                        onChange={(e) => handleInputChange("allergies", e.target.value)}
                        placeholder="Please list any allergies, or write 'None'"
                        className="mt-1"
                        rows={2}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="previousDentist">Previous Dentist</Label>
                        <Input
                          id="previousDentist"
                          value={formData.previousDentist}
                          onChange={(e) => handleInputChange("previousDentist", e.target.value)}
                          placeholder="Name and location (if applicable)"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastCheckup">Last Dental Checkup</Label>
                        <Input
                          id="lastCheckup"
                          type="date"
                          value={formData.lastCheckup}
                          onChange={(e) => handleInputChange("lastCheckup", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="preferredAppointmentTime">Preferred Appointment Times</Label>
                      <select
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={formData.preferredAppointmentTime}
                        onChange={(e) => handleInputChange("preferredAppointmentTime", e.target.value)}
                      >
                        <option value="">Select preference</option>
                        <option value="morning">Morning (9am-12pm)</option>
                        <option value="afternoon">Afternoon (12pm-5pm)</option>
                        <option value="evening">Evening (5pm-8pm)</option>
                        <option value="weekend">Weekend</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
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

            {/* Step 4: Payment Details */}
            {currentStep === 4 && (
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-pear-primary mb-4">Payment Details</CardTitle>
                  <p className="text-gray-600">Secure payment information</p>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardholderName">Cardholder Name *</Label>
                      <Input
                        id="cardholderName"
                        value={formData.cardholderName}
                        onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                        placeholder="Name as it appears on card"
                        className="mt-1"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        value={formData.expiryDate}
                        onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                        placeholder="MM/YY"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                        placeholder="123"
                        className="mt-1"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="billingAddress">Billing Address</Label>
                      <Input
                        id="billingAddress"
                        value={formData.billingAddress}
                        onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                        placeholder="Same as contact address"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-dental-green/5 border border-dental-green/20 rounded-lg">
                    <div className="flex items-center space-x-2 text-dental-green">
                      <Lock className="w-5 h-5" />
                      <span className="font-semibold">Secure Payment</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                      Your first payment will be taken today, and then monthly on the same date.
                    </p>
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

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
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

                      <div className="mt-6 p-4 bg-pear-background/50 rounded-lg">
                        <h4 className="font-semibold text-pear-primary">What happens next?</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Your membership starts immediately</li>
                          <li>• We'll email your membership details</li>
                          <li>• Book your first appointment online or call us</li>
                          <li>• Your monthly payment starts today</li>
                          <li>• Emergency cover is active immediately</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
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
                        I accept the <a href="/terms" className="text-dental-green hover:underline">Terms and Conditions</a> and
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
                      disabled={!formData.termsAccepted}
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
