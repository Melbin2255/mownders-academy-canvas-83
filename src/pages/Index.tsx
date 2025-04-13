
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import OfferingsSection from '@/components/sections/OfferingsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesDetailSection from '@/components/sections/ServicesDetailSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import { Helmet } from 'react-helmet-async';
import { seoData } from '@/utils/siteContent';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.twitterTitle} />
        <meta name="twitter:description" content={seoData.twitterDescription} />
      </Helmet>
      <div className="min-h-screen bg-white">
        <HeroSection id="hero" />
        <BenefitsSection id="benefits" />
        <OfferingsSection id="offerings" />
        <WhyChooseUsSection id="why-us" />
        <AboutSection id="about" />
        <ServicesDetailSection id="services" />
        <TestimonialsSection id="testimonials" />
        <FAQSection id="faq" />
        <CallToActionBanner />
        <ContactSection id="contact" />
      </div>
    </>
  );
};

export default Index;
