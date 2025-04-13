
import { motion } from 'framer-motion';
import { benefitsContent } from '@/utils/siteContent';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  UserCircleIcon, 
  ChartBarIcon, 
  ClipboardIcon 
} from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';

interface BenefitsSectionProps {
  id: string;
}

const BenefitsSection = ({ id }: BenefitsSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap: Record<string, JSX.Element> = {
    UserCircle: <UserCircleIcon className="w-8 h-8 text-indigo-600" />,
    AcademicCap: <AcademicCapIcon className="w-8 h-8 text-indigo-600" />,
    ChartBar: <ChartBarIcon className="w-8 h-8 text-indigo-600" />,
    ClipboardCheck: <ClipboardIcon className="w-8 h-8 text-indigo-600" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/40 -z-10"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10 mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              {benefitsContent.heading}
              <div className="absolute -z-10 w-full h-3 bg-amber-200 opacity-40 bottom-2 left-0"></div>
            </span>
          </motion.h2>
          
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the advantages that set us apart from the competition
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {benefitsContent.benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start border border-gray-100 relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner element */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-6 p-4 bg-indigo-50 rounded-xl text-indigo-600 relative z-10 transform group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
                {iconMap[benefit.icon]}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {benefit.description}
              </p>
              
              <div className="mt-auto pt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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

export default BenefitsSection;
