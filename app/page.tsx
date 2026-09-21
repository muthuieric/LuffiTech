import React from 'react';
import Hero from '../components/sections/Hero';
import Expertise from '@/components/sections/Expertise';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import FAQ from '../components/sections/FAQ';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollReveal direction="up" delay={50} distance={30}>
        <Expertise />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={50} distance={30}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={50} distance={30}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={50} distance={30}>
        <CTA />
      </ScrollReveal>
    </>
  );
}
