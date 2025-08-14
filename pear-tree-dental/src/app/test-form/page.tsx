import React from "react";
import ContactFormCard from "@/components/ContactFormCard";

export default function TestFormPage() {
  return (
    <main style={{ padding: "2rem 4rem" }}>
      <h1>Form Test Page</h1>
      <p>This page contains only the form component to test it in isolation.</p>
      <hr style={{ margin: "2rem 0" }} />
      <ContactFormCard
        title="Test Form Submission"
        description="This is a test."
        showContactInfo={false} // Hides the contact info card for a simpler layout
        formType="contact"
      />
    </main>
  );
}
