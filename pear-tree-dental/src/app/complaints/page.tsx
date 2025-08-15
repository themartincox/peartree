import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Users,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "Complaints Policy | Pear Tree Dental Centre",
  description: "Our comprehensive complaints policy and procedure. We take all complaints seriously and aim to resolve them promptly and fairly.",
  keywords: [
    "complaints policy",
    "dental complaints procedure",
    "patient feedback",
    "dental practice complaints",
    "NHS complaints",
    "private dental complaints"
  ]
};

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pear-background to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4 border-pear-primary text-pear-primary">
            <FileText className="w-4 h-4 mr-2" />
            Complaints Policy
          </Badge>

          <h1 className="heading-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pear-primary mb-6">
            Complaints Policy &
            <span className="block text-dental-green">Procedure</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take all complaints seriously and are committed to resolving them
            efficiently, effectively and politely while protecting your confidentiality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pear-primary rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-pear-primary">Our Commitment</h2>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our top priority and aim is to have satisfied patients, ensuring we meet your expectations
                  of care is what we strive for. We go the extra mile to resolve any complaints as efficiently,
                  effectively and politely as possible. Here at Pear Tree Dental we take complaints very seriously,
                  we investigate them in a full and fair way and take great care to protect your confidentiality
                  during the process.
                </p>

                <p>
                  If you are not entirely satisfied with any aspect of our care or service please let us know
                  as soon as possible to allow us to address your concerns promptly. This can be done verbally,
                  followed by in writing or just in writing, ask a staff member or get in touch using our contact details.
                </p>

                <p className="font-semibold text-pear-primary">
                  We can reassure you that we will never discriminate against patients who have made a complaint.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-dental-green rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-pear-primary">Our Process</h2>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Please address all complaints to <strong>Kirsten Pownall</strong> our onsite practice manager.
                  If we cannot resolve your complaint immediately it will be acknowledged in writing within
                  <strong> 3 working days</strong> and we aim to provide a full response within <strong>10 working days</strong>.
                </p>

                <p>
                  If the practice manager Kirsten Pownall is unavailable, we will take brief details about
                  the complaint and let you know when you can talk to a suitable team member as soon as possible.
                </p>

                <p>
                  Should the complaint need to be investigated, this may involve the person who treated you,
                  members of the team or others. In some cases the investigation may take longer than 10 working days,
                  in which case you will be informed about the reason for the delay, the progress of the investigation
                  and the proposed date it will be completed.
                </p>

                <p>
                  We regularly analyse patient complaints to learn from them and to improve our services.
                  That's why we always welcome your feedback, comments, suggestions and complaints.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pear-gold rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-pear-primary">Contact Us</h2>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed mb-6">
                <p>
                  To make a written complaint to The Pear Tree Dental Centre you may contact the Practice manager
                  who is head of complaints by sending an email or by post. Alternatively, you can contact the
                  practice by phone and leave a message with our reception team.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-pear-primary">Email</p>
                    <a
                      href="mailto:hello@peartree.dental"
                      className="text-sm text-gray-600 hover:text-pear-primary transition-colors"
                    >
                      hello@peartree.dental
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-pear-primary">Phone</p>
                    <a
                      href="tel:01159312935"
                      className="text-sm text-gray-600 hover:text-pear-primary transition-colors"
                    >
                      0115 931 2935
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pear-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-pear-primary">Post</p>
                    <p className="text-sm text-gray-600">
                      22 Nottingham Road<br />
                      Burton Joyce<br />
                      NG14 5AL
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* External Contacts */}
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-soft-blue rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-pear-primary">External Complaint Services</h2>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed mb-6">
                <p>
                  If you are dissatisfied with our response to a complaint you can take it further,
                  please see the contacts below.
                </p>
              </div>

              <div className="space-y-6">

                {/* NHS Complaints */}
                <div className="border-l-4 border-dental-green pl-4">
                  <h3 className="font-semibold text-pear-primary mb-2">NHS Treatment Complaints</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    If you have a comment or complaint about NHS treatment that cannot be resolved
                    by the Practice Manager, you can contact NHS England:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> <a href="mailto:england.contactus@nhs.net" className="text-pear-primary hover:underline">england.contactus@nhs.net</a></p>
                    <p><strong>Phone:</strong> <a href="tel:03003112233" className="text-pear-primary hover:underline">0300 311 2233</a></p>
                  </div>
                </div>

                {/* NHS Ombudsman */}
                <div className="border-l-4 border-pear-gold pl-4">
                  <h3 className="font-semibold text-pear-primary mb-2">Parliamentary Health Ombudsman</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    If you are still unhappy about your NHS complaint, you can contact the Parliamentary Health Ombudsman:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Phone:</strong> <a href="tel:03450154033" className="text-pear-primary hover:underline">0345 015 4033</a></p>
                    <p><strong>Website:</strong> <a href="https://www.ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-pear-primary hover:underline">www.ombudsman.org.uk</a></p>
                  </div>
                </div>

                {/* Private Treatment */}
                <div className="border-l-4 border-soft-pink pl-4">
                  <h3 className="font-semibold text-pear-primary mb-2">Private Dental Treatment</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    For private dental treatment you can contact the GDC private dental complaints service:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Phone:</strong> <a href="tel:08456120540" className="text-pear-primary hover:underline">0845 612 0540</a></p>
                    <p><strong>Website:</strong> <a href="https://www.dentalcomplaints.org.uk" target="_blank" rel="noopener noreferrer" className="text-pear-primary hover:underline">www.dentalcomplaints.org.uk</a></p>
                  </div>
                </div>

                {/* CQC */}
                <div className="border-l-4 border-soft-lavender pl-4">
                  <h3 className="font-semibold text-pear-primary mb-2">Care Quality Commission</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    You can contact the Care Quality Commission:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Phone:</strong> <a href="tel:03000616161" className="text-pear-primary hover:underline">03000 61 6161</a></p>
                    <p><strong>Website:</strong> <a href="https://www.CQC.org.uk" target="_blank" rel="noopener noreferrer" className="text-pear-primary hover:underline">www.CQC.org.uk</a></p>
                  </div>
                </div>

                {/* GDC */}
                <div className="border-l-4 border-pear-primary pl-4">
                  <h3 className="font-semibold text-pear-primary mb-2">General Dental Council</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    The General Dental Council is responsible for regulating all dental professionals,
                    you can contact them:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><strong>Email:</strong> <a href="mailto:information@GDC-org.uk" className="text-pear-primary hover:underline">information@GDC-org.uk</a></p>
                    <p><strong>Phone:</strong> <a href="tel:08452224141" className="text-pear-primary hover:underline">0845 222 4141</a></p>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
