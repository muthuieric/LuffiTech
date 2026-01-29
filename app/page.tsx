"use client";

import React from 'react';
import Hero from '../components/sections/Hero';
import Expertise from '@/components/sections/Expertise';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';
// import Brands from '@/components/sections/Brands';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Brands /> */}
      <Expertise    />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}