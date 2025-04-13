
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyChooseUsContent } from '@/utils/siteContent';
import { PuzzlePieceIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface WhyChooseUsSectionProps {
  id: string;
}

const WhyChooseUsSection = ({ id }: WhyChooseUsSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap: Record<string, JSX.Element> = {
    PuzzlePiece: <PuzzlePieceIcon className="w-7 h-7 text-indigo-600" />,
    Clock: <ClockIcon className="w-7 h-7 text-indigo-600" />,
    UserGroup: <UserGroupIcon className="w-7 h-7 text-indigo-600" />
  };

  // For number animation
  const animatedCounter = (value: string) => {
    // If the value has a plus sign, we'll animate up to the numeric part
    if (value.includes('+')) {
      const numericPart = parseInt(value.replace('+', ''));
      return (
        <motion.span 
          className="text-4xl md:text-5xl font-bold text-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
          >
            {inView ? numericPart : 0}
          </motion.span>
          <span>+</span>
        </motion.span>
      );
    }
    
    // For percentage values
    if (value.includes('%')) {
      const numericPart = parseInt(value.replace('%', ''));
      return (
        <motion.span 
          className="text-4xl md:text-5xl font-bold text-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
          >
            {inView ? numericPart : 0}
          </motion.span>
          <span>%</span>
        </motion.span>
      );
    }
    
    // Default case (just the value)
    return (
      <motion.span 
        className="text-4xl md:text-5xl font-bold text-indigo-600"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {value}
      </motion.span>
    );
  };

  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Our Achievements
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10 mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              {whyChooseUsContent.heading}
              <div className="absolute -z-10 w-full h-3 bg-amber-200 opacity-40 bottom-2 left-0"></div>
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {whyChooseUsContent.subheading}
          </motion.p>
        </div>
        
        <div ref={ref} className="mb-20">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {whyChooseUsContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  className="mb-2"
                >
                  {animatedCounter(stat.value)}
                </motion.div>
                <p className="text-gray-600 font-medium group-hover:text-indigo-700 transition-colors duration-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {whyChooseUsContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-full -ml-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6 p-4 bg-indigo-50 rounded-xl inline-block relative z-10 transform group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
                {iconMap[feature.icon]}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 relative z-10">
                {feature.description}
              </p>
              
              <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                <a href="#contact" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
