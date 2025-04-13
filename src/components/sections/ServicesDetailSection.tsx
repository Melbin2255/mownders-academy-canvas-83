
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '@/utils/siteContent';
import { CheckIcon } from '@heroicons/react/24/outline';
import { 
  AcademicCapIcon, 
  BriefcaseIcon,
  DocumentTextIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

interface ServicesDetailSectionProps {
  id: string;
}

const ServicesDetailSection = ({ id }: ServicesDetailSectionProps) => {
  const [activeTab, setActiveTab] = useState(servicesData.services[0].id);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap: Record<string, JSX.Element> = {
    AcademicCap: <AcademicCapIcon className="w-6 h-6" />,
    Briefcase: <BriefcaseIcon className="w-6 h-6" />,
    DocumentCheck: <DocumentTextIcon className="w-6 h-6" />,
    BookOpen: <BookOpenIcon className="w-6 h-6" />
  };

  const getActiveService = () => {
    return servicesData.services.find(service => service.id === activeTab);
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
            {servicesData.heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {servicesData.description}
          </motion.p>
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row gap-10">
          {/* Service Tabs */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {servicesData.services.map((service, index) => (
                <button
                  key={service.id}
                  className={`w-full text-left p-4 md:p-5 flex items-center gap-4 border-b last:border-b-0 transition-colors ${
                    activeTab === service.id 
                      ? 'bg-indigo-50 text-indigo-700 border-l-4 border-l-indigo-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <span className="p-2 rounded-lg bg-indigo-100 text-indigo-700 flex-shrink-0">
                    {iconMap[service.icon]}
                  </span>
                  <div>
                    <h3 className={`text-lg font-semibold ${activeTab === service.id ? 'text-indigo-700' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Service Content */}
          <motion.div
            className="w-full lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="p-3 rounded-lg bg-indigo-100 text-indigo-700">
                    {iconMap[getActiveService()?.icon || 'AcademicCap']}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {getActiveService()?.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {getActiveService()?.description}
                </p>

                <h4 className="text-lg font-semibold text-gray-900 mb-4">What we offer:</h4>
                <ul className="space-y-3">
                  {getActiveService()?.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                    >
                      <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
