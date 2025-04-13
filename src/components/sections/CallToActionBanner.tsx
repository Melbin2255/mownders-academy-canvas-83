
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ctaContent } from '@/utils/siteContent';
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, Calendar } from 'lucide-react';

const CallToActionBanner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
        <svg className="absolute bottom-0 right-0 text-indigo-600 opacity-10 w-80 h-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.4 63.5C24.8 82.8 -15.9 121.7 10.8 145.8C37.4 169.9 73.5 138.5 110.9 123.2C148.2 107.9 186.8 108.7 199.9 87.5C213 66.3 200.6 23.2 165.9 7.8C131.2 -7.6 74.2 4.6 46.4 63.5Z" fill="currentColor"/>
        </svg>
      </div>

      <div ref={ref} className="container max-w-6xl mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Rocket className="h-16 w-16 text-amber-400 mx-auto mb-6" />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {ctaContent.heading}
          </motion.h2>
          
          <motion.p
            className="text-xl text-indigo-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {ctaContent.description}
          </motion.p>
        </div>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all flex items-center gap-2 rounded-full"
            onClick={() => {
              document.querySelector(ctaContent.buttonLink)?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <Calendar className="w-5 h-5" />
            {ctaContent.buttonText}
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto transition-all flex items-center gap-2 rounded-full"
            onClick={() => {
              document.querySelector('#services')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Explore Our Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-indigo-200">
            Join hundreds of students who have already transformed their academic journey
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
