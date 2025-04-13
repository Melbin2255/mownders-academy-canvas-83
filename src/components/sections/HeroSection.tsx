
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { heroContent } from '@/utils/siteContent';

interface HeroSectionProps {
  id: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  return (
    <section id={id} className="py-20 md:py-28 bg-gradient-to-br from-white to-purple-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroContent.heading}
              </h1>
              <p className="text-xl md:text-2xl mt-2 text-indigo-600 font-medium">
                {heroContent.subheading}
              </p>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-700 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {heroContent.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => {
                  document.querySelector(heroContent.ctaLink)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {heroContent.ctaText}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroContent.imageUrl}
                alt={heroContent.imageAlt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                }}
              />
              <div className="absolute inset-0 bg-indigo-900/10 rounded-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
