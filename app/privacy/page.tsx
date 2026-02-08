import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Luffi Tech',
  description: 'How Luffi Tech collects and protects your data in compliance with the Data Protection Act of Kenya, 2019.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-purple-600">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p><strong>Effective Date:</strong> February 6, 2026</p>
        
        <p>Luffi Tech is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit <strong>www.luffitech.com</strong> or use our services, in compliance with the <strong>Data Protection Act of Kenya, 2019</strong>.</p>

        <h3 className="text-2xl font-bold mt-8">1. Information We Collect</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Data:</strong> Name, Email address, Phone number (for M-Pesa transactions).</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and operating system.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8">2. How We Use Your Data</h3>
        <p>We use your data to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Process M-Pesa payments via the Daraja API.</li>
          <li>Respond to your project inquiries or Academy applications.</li>
          <li>Send transactional emails (receipts, booking confirmations).</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8">3. M-Pesa & Payment Security</h3>
        <p>We do not store your M-Pesa PIN. All payment transactions are processed securely through Safaricom's Daraja API. We only retain transaction reference codes for accounting purposes.</p>

        <h3 className="text-2xl font-bold mt-8">4. Data Sharing</h3>
        <p>We do not sell your personal data.</p>
             {/* We may share data with:</p> */}
        {/* <ul className="list-disc pl-5 space-y-2">
          <li><strong>Service Providers:</strong> Google (Analytics), Vercel (Hosting).</li>
          <li><strong>Legal Authorities:</strong> If required by Kenyan law.</li>
        </ul> */}

        <h3 className="text-2xl font-bold mt-8">5. Your Rights</h3>
        <p>Under the Data Protection Act, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <strong>contact.luffitech@gmail.com</strong>.</p>
      </div>
    </main>
  );
}