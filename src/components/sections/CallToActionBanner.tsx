
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ctaContent } from '@/utils/siteContent';
import { Button } from "@/components/ui/button";

const CallToActionBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
      <div ref={ref} className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {ctaContent.heading}
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              {ctaContent.description}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                document.querySelector(ctaContent.buttonLink)?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              {ctaContent.buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
