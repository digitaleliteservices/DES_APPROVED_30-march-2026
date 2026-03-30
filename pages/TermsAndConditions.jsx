import React from 'react';
import { DES_LOGO } from '../constants';

const TermsAndConditions = () => {
  return (
    <section className="bg-zinc-950 text-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <img src={DES_LOGO} alt="Digital Elite Service" className="w-14 mb-6" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-zinc-400 text-sm">
            Digital Elite Service • www.digitaleliteservices.in
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">

          <p>
            Welcome to Digital Elite Service. These Terms and Conditions outline the
            rules and regulations for the use of our website and services. By accessing
            this website, you agree to accept these terms in full.
          </p>

          <Section title="1. Definitions">
            <ul className="list-disc pl-6 space-y-2">
              <li>“Company”, “We”, “Our”, or “Us” refers to Digital Elite Service.</li>
              <li>“User”, “Client”, or “You” refers to any individual or entity using our services.</li>
              <li>“Services” include SEO, web development, digital marketing, paid ads, and consulting.</li>
            </ul>
          </Section>

          <Section title="2. Use of Website">
            <p>You must be at least 18 years old to use our services.</p>
            <p>You agree to use the website only for lawful purposes.</p>
          </Section>

          <Section title="3. Intellectual Property Rights">
            <p>
              All content, branding, graphics, text, and software are the property of
              Digital Elite Service. Unauthorized use is prohibited.
            </p>
          </Section>

          <Section title="4. User Obligations">
            <p>You agree to provide accurate information and maintain account confidentiality.</p>
          </Section>

          <Section title="5. Service Terms">
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliverables and pricing are defined in formal agreements.</li>
              <li>Late or non-payment may result in service suspension.</li>
              <li>No guaranteed rankings or results.</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>Both parties agree to keep all confidential information private.</p>
          </Section>

          <Section title="7. Third-Party Tools">
            <p>
              We may use third-party tools (Google Ads, Meta, etc.) and are not responsible
              for their policies.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <ul className="list-disc pl-6 space-y-2">
              <li>No liability for indirect or consequential damages.</li>
              <li>No responsibility for data loss or business interruption.</li>
            </ul>
          </Section>

          <Section title="9. Termination">
            <p>We reserve the right to terminate access if terms are violated.</p>
          </Section>

          <Section title="10. Indemnification">
            <p>You agree to indemnify Digital Elite Service from claims arising from misuse.</p>
          </Section>

          <Section title="11. Modifications">
            <p>Terms may be updated without prior notice.</p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These terms are governed by the laws of India, with jurisdiction in
              Bengaluru, Karnataka.
            </p>
          </Section>

          <Section title="13. Privacy Policy">
            <p>Your use of our services is also governed by our Privacy Policy.</p>
          </Section>

          <Section title="14. Refund & Cancellation">
            <p>Payments are non-refundable unless stated otherwise.</p>
          </Section>

          <Section title="15. Force Majeure">
            <p>We are not liable for delays beyond reasonable control.</p>
          </Section>

          <Section title="16. Communication">
            <p>You consent to receive service-related communications.</p>
          </Section>

          <Section title="17. Non-Solicitation">
            <p>You agree not to solicit our staff during and 12 months after engagement.</p>
          </Section>

          <Section title="18. Dispute Resolution">
            <p>
              Disputes will be resolved through negotiation, mediation, or arbitration
              under Indian law.
            </p>
          </Section>

          <Section title="19. Severability">
            <p>If any provision is invalid, remaining terms remain effective.</p>
          </Section>

          <Section title="20. Entire Agreement">
            <p>This document constitutes the entire agreement.</p>
          </Section>

          <Section title="Contact Us">
            <p>📧 admin@digitaleliteservices.in</p>
            <p>📍 35A, Kowdi, Hebbal Kempapura, Bangalore – 560024</p>
            <p>📞 6366930178</p>
          </Section>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
    {children}
  </div>
);

export default TermsAndConditions;
