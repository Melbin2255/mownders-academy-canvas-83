
import React from 'react';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/sections/BenefitsSection';
import OfferingsSection from '@/components/sections/OfferingsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesDetailSection from '@/components/sections/ServicesDetailSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import CallToActionBanner from '@/components/sections/CallToActionBanner';
import Footer from '@/components/Footer';
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
        <Hero />
        <BenefitsSection id="benefits" />
        <OfferingsSection id="offerings" />
        <WhyChooseUsSection id="why-us" />
        <AboutSection id="about" />
        <ServicesDetailSection id="services" />
        <FAQSection id="faq" />
        <CallToActionBanner />
        <ContactSection id="contact" />
        <Footer />
      </div>
    </>
  );
};

export default Index;
