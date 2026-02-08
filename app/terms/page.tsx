import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Luffi Tech',
};

export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-8 text-purple-600">Terms & Conditions</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <h3 className="text-2xl font-bold">1. Introduction</h3>
        <p>By accessing www.luffitech.com, you agree to be bound by these terms. These Terms obey the laws of the Republic of Kenya.</p>

        <h3 className="text-2xl font-bold mt-8">2. Payment & Refunds</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Projects:</strong> A 50% deposit is required to commence work. Deposits are non-refundable once the Design Phase is approved.</li>
          <li><strong>Academy Fees:</strong> Academy fees must be paid in advance. Refunds for Academy classes are only available if requested 48 hours before the first session.</li>
          <li><strong>M-Pesa Reversals:</strong> Accidental M-Pesa transfers will be reversed in accordance with Safaricom's reversal policies.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8">3. Intellectual Property</h3>
        <p>Upon full payment, intellectual property rights for custom software developed for clients are transferred to the client. Luffi Tech retains the right to showcase the work in our portfolio.</p>

        <h3 className="text-2xl font-bold mt-8">4. Contact Us</h3>
        <p>For any legal inquiries, please contact us at <strong>contact.luffitech@gmail.com</strong>.</p>
      </div>
    </main>
  );
}