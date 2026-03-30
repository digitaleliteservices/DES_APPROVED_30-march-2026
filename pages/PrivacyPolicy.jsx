import React from 'react';
import { DES_LOGO } from '../constants';

const PrivacyPolicy = () => {
  return (
    <section className="bg-zinc-950 text-white pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <img src={DES_LOGO} alt="Digital Elite Service" className="w-14 mb-6" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm">
            Digital Elite Service • www.digitaleliteservices.in
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-300 text-sm leading-relaxed">

          <p>
            At Digital Elite Service, your privacy is one of our top priorities.
            This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you visit or interact with our website.
          </p>

          <Section title="1. Information We Collect">
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct information: name, email, phone number, company details</li>
              <li>Account and contact information</li>
              <li>Communication data (emails, inquiries, chats)</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and maintain our website and services</li>
              <li>Personalize user experience</li>
              <li>Improve performance and features</li>
              <li>Marketing, communication, and customer support</li>
              <li>Fraud prevention and security</li>
            </ul>
          </Section>

          <Section title="3. Log Files">
            <p>
              We collect IP address, browser type, ISP, timestamps, and referring
              pages for analytics and administrative purposes only.
            </p>
          </Section>

          <Section title="4. Cookies and Tracking Technologies">
            <p>
              We use cookies and web beacons to enhance user experience. You may
              disable cookies via browser settings, but some features may not
              function properly.
            </p>
          </Section>

          <Section title="5. Advertising Partners">
            <p>
              Third-party advertisers may use cookies or similar technologies.
              Digital Elite Service does not control third-party data collection.
            </p>
          </Section>

          <Section title="6. Third-Party Privacy Policies">
            <p>
              Our Privacy Policy does not apply to other advertisers or websites.
              Please review their respective privacy policies.
            </p>
          </Section>

          <Section title="7. Your Privacy Rights">
            <p className="mb-2 font-semibold text-white">CCPA Rights:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Request access to collected data</li>
              <li>Request deletion of personal data</li>
              <li>Opt out of data sale</li>
            </ul>

            <p className="mb-2 font-semibold text-white">GDPR Rights:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access and correction</li>
              <li>Data portability</li>
              <li>Restriction or objection to processing</li>
            </ul>
          </Section>

          <Section title="8. Children’s Information">
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect data from children.
            </p>
          </Section>

          <Section title="9. Data Retention">
            <p>
              We retain personal information only as long as necessary to fulfill
              legal and business requirements.
            </p>
          </Section>

          <Section title="10. Data Security">
            <p>
              We implement technical and organizational safeguards, including
              encryption and secure servers. However, no system is 100% secure.
            </p>
          </Section>

          <Section title="11. Sharing of Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers (hosting, analytics)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </Section>

          <Section title="12. International Data Transfers">
            <p>
              Data may be processed outside India. By using our services, you
              consent to such transfers.
            </p>
          </Section>

          <Section title="13. Policy Updates">
            <p>
              This Privacy Policy may be updated periodically. Changes will be
              posted on this page.
            </p>
          </Section>

          <Section title="14. Consent">
            <p>
              By using our website, you consent to this Privacy Policy.
            </p>
          </Section>

          <Section title="15. Payment Information">
            <p>
              Payments are processed securely by third-party gateways. We do not
              store sensitive payment data.
            </p>
          </Section>

          <Section title="16. Analytics">
            <p>
              We use analytics tools such as Google Analytics for performance and
              improvement purposes.
            </p>
          </Section>

          <Section title="17. Email & Communication Preferences">
            <p>
              You may opt out of marketing communications at any time.
            </p>
          </Section>

          <Section title="18. External Links">
            <p>
              We are not responsible for third-party websites linked on our site.
            </p>
          </Section>

          <Section title="19. Do Not Track">
            <p>
              Our website currently does not respond to Do Not Track signals.
            </p>
          </Section>

          <Section title="20. Governing Law">
            <p>
              This Privacy Policy is governed by the laws of India with jurisdiction
              in Bengaluru, Karnataka.
            </p>
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

export default PrivacyPolicy;
