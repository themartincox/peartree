"use client";
import React from "react";

import {
  Building2,
  Calendar,
  CheckCircle,
  CreditCard,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function MembershipSuccessContent() {
  const searchParams = useSearchParams();
  const [membershipDetails, setMembershipDetails] = useState<any>(null);

  useEffect(() => {
     Get membership details from URL parameters
    const applicationId = searchParams.get("applicationId");
    const planName = searchParams.get("plan");
    const memberName = searchParams.get("name");
    const staffMember = searchParams.get("staff");

    setMembershipDetails({
      applicationId,
      planName,
      memberName,
      staffMember,
    });
  }, [searchParams]);

  if (!membershipDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pear-background to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pear-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background to-white pt-20">
      {/* Success Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-pear-primary mb-2">
                Welcome to the Pear Tree Dental Membership Plan!
              </h1>
              <p className="text-xl text-gray-600">
                Your membership application has been successfully submitted
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Application Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-pear-primary" />
                    Application Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Application ID:</span>
                      <span className="text-green-700 font-mono">
                        {membershipDetails.applicationId}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">Member Name:</span>
                      <span>{membershipDetails.memberName}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-medium">Plan Selected:</span>
                      <span className="text-pear-primary font-semibold">
                        {membershipDetails.planName}
                      </span>
                    </div>

                    {membershipDetails.staffMember && (
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Assisted by:</span>
                        <span className="text-blue-600">
                          {membershipDetails.staffMember}
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <span className="font-medium">Status:</span>
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-pear-primary" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        📧
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          Confirmation Email Sent!
                        </h4>
                        <p className="text-sm text-gray-600">
                          Check your email for your membership welcome pack with
                          personalised documents, payment details, and next
                          steps
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-pear-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Direct Debit Setup</h4>
                        <p className="text-sm text-gray-600">
                          Your first payment will be collected within 2 working
                          days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-pear-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Book Your Appointment</h4>
                        <p className="text-sm text-gray-600">
                          Call us to schedule your first check-up
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold">Coverage Active</h4>
                        <p className="text-sm text-gray-600">
                          Your emergency dental cover is active immediately
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-pear-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <Phone className="w-8 h-8 text-pear-primary" />
                    <h4 className="font-semibold">Call Us</h4>
                    <p className="text-gray-600">0115 931 2935</p>
                    <p className="text-sm text-gray-500">
                      Mon-Thu: 8:45am-5pm
                      <br />
                      Fri: 8am-3:30pm
                    </p>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Mail className="w-8 h-8 text-pear-primary" />
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-gray-600">hello@peartree.dental</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Link href="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-pear-primary hover:bg-pear-primary"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>

            {/* Important Information */}
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                Important Information
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Your membership benefits are active immediately</li>
                <li>
                  • Emergency dental cover is worldwide and available 24/7
                </li>
                <li>• Please bring ID to your first appointment</li>
                <li>• Your Direct Debit guarantee protects your payments</li>
                <li>• You can cancel your membership with 30 days notice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function MembershipSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-pear-background to-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pear-primary"></div>
        </div>
      }
    >
      <MembershipSuccessContent />
    </Suspense>
  );
}
