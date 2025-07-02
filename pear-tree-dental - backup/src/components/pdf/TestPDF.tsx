import type React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  }
});

interface TestPDFProps {
  applicationId: string;
  patientName: string;
}

const TestPDF: React.FC<TestPDFProps> = ({ applicationId, patientName }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Test PDF Document</Text>
          <Text style={styles.text}>Application ID: {applicationId}</Text>
          <Text style={styles.text}>Patient Name: {patientName}</Text>
          <Text style={styles.text}>Generated on: {new Date().toLocaleDateString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TestPDF;
