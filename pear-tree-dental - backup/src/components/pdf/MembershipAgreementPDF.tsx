import type React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottom: 2,
    borderBottomColor: '#09394d',
    paddingBottom: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#09394d',
  },
  subtitle: {
    fontSize: 10,
    color: '#09394d',
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09394d',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#09394d',
    marginBottom: 8,
    borderBottom: 1,
    borderBottomColor: '#48cc6c',
    paddingBottom: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    width: '40%',
  },
  value: {
    fontSize: 10,
    color: '#666666',
    width: '60%',
  },
  planCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 15,
    border: 1,
    borderColor: '#48cc6c',
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09394d',
    marginBottom: 5,
  },
  planPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#48cc6c',
    marginBottom: 8,
  },
  featureList: {
    marginLeft: 10,
  },
  feature: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 2,
  },
  bankDetails: {
    backgroundColor: '#e8f5e8',
    padding: 12,
    marginBottom: 15,
    border: 1,
    borderColor: '#48cc6c',
  },
  signature: {
    marginTop: 20,
    borderTop: 1,
    borderTopColor: '#cccccc',
    paddingTop: 15,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  signatureBox: {
    width: '45%',
    borderBottom: 1,
    borderBottomColor: '#333333',
    paddingBottom: 2,
  },
  signatureName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#09394d',
    marginBottom: 15,
  },
  signatureDate: {
    fontSize: 10,
    color: '#666666',
  },
  terms: {
    fontSize: 8,
    color: '#666666',
    marginTop: 20,
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#999999',
    borderTop: 1,
    borderTopColor: '#eeeeee',
    paddingTop: 10,
  },
  familyMember: {
    backgroundColor: '#f1f5f9',
    padding: 8,
    marginBottom: 5,
    border: 1,
    borderColor: '#e2e8f0',
  },
  familyMemberName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  familyMemberDetails: {
    fontSize: 9,
    color: '#666666',
  },
});

interface FormData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  city: string;
  postcode: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelationship: string;
  familyMembers: Array<{
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    relationship: string;
    plan: string;
  }>;
  isExistingPatient: boolean;
  preferredDentist: string;
  genderPreference: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  sortCode: string;
  startDate: string;
  patientSignature: string;
  signatureDate: string;
  termsAccepted: boolean;
  ddGuaranteeAccepted: boolean;
  consentGiven: boolean;
  marketingConsent: boolean;
}

interface PlanData {
  name: string;
  price: string;
  features: string[];
}

interface MembershipAgreementPDFProps {
  formData: FormData;
  selectedPlan: PlanData;
  applicationId: string;
}

const MembershipAgreementPDF: React.FC<MembershipAgreementPDFProps> = ({
  formData,
  selectedPlan,
  applicationId,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  const maskAccountNumber = (accountNumber: string) => {
    if (accountNumber.length <= 4) return accountNumber;
    return `****${accountNumber.slice(-4)}`;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>PEAR TREE</Text>
            <Text style={styles.subtitle}>DENTAL</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: '#666666' }}>Application ID: {applicationId}</Text>
            <Text style={{ fontSize: 10, color: '#666666' }}>Date: {formatDate(new Date().toISOString())}</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>DENTAL MEMBERSHIP AGREEMENT</Text>

        {/* Patient Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PATIENT DETAILS</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{formData.title} {formData.firstName} {formData.lastName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{formData.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{formData.phone}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.value}>{formatDate(formData.dateOfBirth)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{formData.address}, {formData.city}, {formData.postcode}</Text>
          </View>
          {formData.emergencyContactName && (
            <>
              <View style={styles.row}>
                <Text style={styles.label}>Emergency Contact:</Text>
                <Text style={styles.value}>{formData.emergencyContactName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Emergency Phone:</Text>
                <Text style={styles.value}>{formData.emergencyContactPhone}</Text>
              </View>
            </>
          )}
          <View style={styles.row}>
            <Text style={styles.label}>Existing Patient:</Text>
            <Text style={styles.value}>{formData.isExistingPatient ? 'Yes' : 'No'}</Text>
          </View>
          {formData.isExistingPatient && formData.preferredDentist && (
            <View style={styles.row}>
              <Text style={styles.label}>Preferred Dentist:</Text>
              <Text style={styles.value}>{formData.preferredDentist}</Text>
            </View>
          )}
          {!formData.isExistingPatient && formData.genderPreference && (
            <View style={styles.row}>
              <Text style={styles.label}>Dentist Preference:</Text>
              <Text style={styles.value}>{formData.genderPreference === 'no-preference' ? 'No preference' : `${formData.genderPreference} dentist`}</Text>
            </View>
          )}
        </View>

        {/* Family Members */}
        {formData.familyMembers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>FAMILY MEMBERS</Text>
            {formData.familyMembers.map((member, index) => (
              <View key={index} style={styles.familyMember}>
                <Text style={styles.familyMemberName}>
                  {member.title} {member.firstName} {member.lastName}
                </Text>
                <Text style={styles.familyMemberDetails}>
                  DOB: {formatDate(member.dateOfBirth)} | Relationship: {member.relationship} | Plan: {member.plan}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Selected Plan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECTED MEMBERSHIP PLAN</Text>
          <View style={styles.planCard}>
            <Text style={styles.planTitle}>{selectedPlan.name}</Text>
            <Text style={styles.planPrice}>{selectedPlan.price} per month</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 5 }}>Plan Benefits:</Text>
            <View style={styles.featureList}>
              {selectedPlan.features.map((feature, index) => (
                <Text key={index} style={styles.feature}>• {feature}</Text>
              ))}
              <Text style={styles.feature}>• Worldwide dental accident & emergency cover</Text>
              <Text style={styles.feature}>• 20% discount on all additional treatments</Text>
            </View>
          </View>
        </View>

        {/* Payment Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DIRECT DEBIT DETAILS</Text>
          <View style={styles.bankDetails}>
            <View style={styles.row}>
              <Text style={styles.label}>Account Holder:</Text>
              <Text style={styles.value}>{formData.accountHolderName}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Bank Name:</Text>
              <Text style={styles.value}>{formData.bankName}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Sort Code:</Text>
              <Text style={styles.value}>{formData.sortCode}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Account Number:</Text>
              <Text style={styles.value}>{maskAccountNumber(formData.accountNumber)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Start Date:</Text>
              <Text style={styles.value}>{formatDate(formData.startDate)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Monthly Payment:</Text>
              <Text style={styles.value}>{selectedPlan.price}</Text>
            </View>
          </View>
        </View>

        {/* Signature */}
        <View style={styles.signature}>
          <Text style={styles.sectionTitle}>PATIENT DECLARATION & SIGNATURE</Text>
          <View style={styles.signatureRow}>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureName}>Patient Signature:</Text>
              <Text style={{ fontSize: 12, marginTop: 10 }}>{formData.patientSignature}</Text>
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureName}>Date:</Text>
              <Text style={{ fontSize: 12, marginTop: 10 }}>{formatDate(formData.signatureDate)}</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            Pear Tree Dental Practice | 1 Pinfold Lane, Burton Joyce, NG14 5DP | Tel: 0115 931 2525
          </Text>
          <Text>
            Email: hello@peartree.dental | www.peartree.dental
          </Text>
        </View>
      </Page>

      {/* Second page for Terms and Conditions */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>PEAR TREE</Text>
            <Text style={styles.subtitle}>DENTAL</Text>
          </View>
          <View>
            <Text style={{ fontSize: 10, color: '#666666' }}>Application ID: {applicationId}</Text>
          </View>
        </View>

        <Text style={styles.title}>TERMS & CONDITIONS</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. MEMBERSHIP TERMS</Text>
          <Text style={styles.terms}>
            This Dental Care Plan is provided by Pear Tree Dental Practice. Your membership begins on the start date specified above and continues monthly until cancelled by either party with one month's written notice.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. PAYMENT TERMS</Text>
          <Text style={styles.terms}>
            Monthly payments are collected by Direct Debit on the same date each month. The first payment will be taken on the start date specified. If payment fails, we reserve the right to suspend membership benefits until payment is received.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. WHAT'S INCLUDED</Text>
          <Text style={styles.terms}>
            Your plan includes the treatments specified above. All treatments are subject to clinical assessment and must be carried out at Pear Tree Dental Practice. Emergency cover is provided worldwide through our insurance partner.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. WHAT'S NOT INCLUDED</Text>
          <Text style={styles.terms}>
            The plan does not cover: laboratory fees, prescriptions, specialist referrals, OPG x-rays/CT scans, orthodontics, or implants. These treatments are available at a 20% discount to plan members.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>5. CANCELLATION</Text>
          <Text style={styles.terms}>
            Either party may cancel this agreement with one month's written notice. On cancellation, any treatments received in excess of payments made must be paid for at our standard private rates, less any plan payments already made.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. DATA PROTECTION</Text>
          <Text style={styles.terms}>
            We process your personal data in accordance with GDPR and our Privacy Policy. Your data is used solely for providing dental care and managing your membership. Marketing communications are optional and can be opted out of at any time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>7. DIRECT DEBIT GUARANTEE</Text>
          <Text style={styles.terms}>
            This Guarantee is offered by all banks and building societies that accept instructions to pay Direct Debits. If there are any changes to the amount, date or frequency of your Direct Debit, we will notify you 10 working days in advance. If an error is made in the payment of your Direct Debit, by us or your bank or building society, you are entitled to a full and immediate refund of the amount paid from your bank or building society.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DECLARATIONS</Text>
          <Text style={styles.terms}>
            ✓ I have read and understood the Terms & Conditions{'\n'}
            ✓ I understand my rights under the Direct Debit Guarantee{'\n'}
            ✓ I consent to Pear Tree Dental processing my personal data for dental care and membership management{'\n'}
            {formData.marketingConsent ? '✓ I consent to receiving marketing communications' : '✗ I do not consent to marketing communications'}
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            Pear Tree Dental Practice | 1 Pinfold Lane, Burton Joyce, NG14 5DP | Tel: 0115 931 2525
          </Text>
          <Text>
            This document was generated electronically on {formatDate(new Date().toISOString())}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MembershipAgreementPDF;
