
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { whyChooseUsContent } from '@/utils/siteContent';
import { PuzzlePieceIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

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
        <span className="text-4xl md:text-5xl font-bold text-indigo-600">
          {inView ? numericPart : 0}
          <span>+</span>
        </span>
      );
    }
    
    // For percentage values
    if (value.includes('%')) {
      const numericPart = parseInt(value.replace('%', ''));
      return (
        <span className="text-4xl md:text-5xl font-bold text-indigo-600">
          {inView ? numericPart : 0}
          <span>%</span>
        </span>
      );
    }
    
    // Default case (just the value)
    return (
      <span className="text-4xl md:text-5xl font-bold text-indigo-600">
        {value}
      </span>
    );
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {whyChooseUsContent.heading}
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
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                >
                  {animatedCounter(stat.value)}
                </motion.div>
                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              <div className="mb-4 p-3 bg-indigo-50 inline-block rounded-lg">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
