import { motion } from 'framer-motion';
import { benefitsContent } from '@/utils/siteContent';
import { useInView } from 'react-intersection-observer';
import { 
  AcademicCapIcon, 
  UserCircleIcon, 
  ChartBarIcon, 
  ClipboardIcon 
} from '@heroicons/react/24/outline';

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
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {benefitsContent.heading}
          </motion.h2>
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
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
