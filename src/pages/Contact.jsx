import React from 'react';
import ContactHeader from '../components/sections/contact/ContactHeader';
import ContactInfo from '../components/sections/contact/ContactInfo';
import ContactForm from '../components/sections/contact/ContactForm';

function Contact() {
  return (
    <div className="page-container px-6 md:px-20 pt-[120px] pb-20 bg-bg-darker">
      
      <ContactHeader />

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 max-w-[1000px] mx-auto">
        <ContactInfo />
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;
