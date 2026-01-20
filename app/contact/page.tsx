"use client";

import React from 'react';
import Contact from '../../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-slate-900">
      {/* Reusing the existing robust Contact section */}
      <Contact />
    </div>
  );
}