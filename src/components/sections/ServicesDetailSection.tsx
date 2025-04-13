
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
    <section id={id} className="py-16 md:py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            Tailored Solutions
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {servicesData.heading}
            <div className="absolute -z-10 w-full h-3 bg-amber-200 opacity-40 bottom-2 left-0"></div>
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

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Service Tabs - Mobile Responsive Dropdown */}
          <motion.div
            className="lg:hidden w-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay:
             0.3 }}
          >
            <select 
              className="w-full p-3 bg-white rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {servicesData.services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Service Tabs - Desktop */}
          <motion.div
            className="hidden lg:block lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {servicesData.services.map((service, index) => (
                <motion.button
                  key={service.id}
                  className={`w-full text-left p-6 flex items-center gap-4 border-b last:border-b-0 transition-all ${
                    activeTab === service.id 
                      ? 'bg-gradient-to-r from-indigo-50 to-white text-indigo-700 border-l-4 border-l-indigo-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                  onClick={() => setActiveTab(service.id)}
                  whileHover={{ x: activeTab === service.id ? 0 : 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <span className={`p-3 rounded-xl ${
                    activeTab === service.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-600'
                  } flex-shrink-0 transition-colors`}>
                    {iconMap[service.icon]}
                  </span>
                  <div>
                    <h3 className={`text-lg font-semibold transition-colors ${activeTab === service.id ? 'text-indigo-700' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Service Content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                    <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-md flex-shrink-0 transform rotate-3">
                      {iconMap[getActiveService()?.icon || 'AcademicCap']}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {getActiveService()?.title}
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {getActiveService()?.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-indigo-800 mb-4">What we offer:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getActiveService()?.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button
                      onClick={() => {
                        document.querySelector('#contact')?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <span>Get started with {getActiveService()?.title}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
