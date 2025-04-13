
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { servicesData } from '@/utils/siteContent';
import { CheckIcon } from '@heroicons/react/24/outline';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  AcademicCapIcon, 
  BriefcaseIcon,
  DocumentTextIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ServicesDetailSectionProps {
  id: string;
}

const ServicesDetailSection = ({ id }: ServicesDetailSectionProps) => {
  const [activeTab, setActiveTab] = useState(servicesData.services[0].id);
  const isMobile = useIsMobile();
  
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
    <section id={id} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/70 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent -z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10"></div>
      
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
            className="text-3xl md:text-4xl font-bold text-gray-900 relative z-10 mb-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative inline-block">
              {servicesData.heading}
              <div className="absolute -z-10 w-full h-3 bg-amber-200 opacity-40 bottom-2 left-0"></div>
            </span>
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

        <div ref={ref} className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-12 gap-10'}`}>
          {/* Mobile Accordion View */}
          {isMobile && (
            <div className="w-full">
              {servicesData.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  className="mb-4"
                >
                  <Collapsible
                    className="w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all"
                    defaultOpen={index === 0}
                  >
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-5 text-left hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <span className="p-3 rounded-xl bg-indigo-100 text-indigo-700 flex-shrink-0">
                          {iconMap[service.icon]}
                        </span>
                        <h3 className="font-semibold text-lg text-gray-900">{service.title}</h3>
                      </div>
                      <ChevronDown className="h-5 w-5 text-indigo-500 transition-transform ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-5 pt-0 bg-white">
                      <Card className="border-0 shadow-none">
                        <CardContent className="p-0 pt-4">
                          <p className="text-gray-700 mb-4">{service.description}</p>
                          <div className="bg-indigo-50 rounded-xl p-4 mb-4">
                            <h4 className="text-md font-semibold text-indigo-800 mb-3">What we offer:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 + (idx * 0.05) }}
                                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                >
                                  <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              document.querySelector('#contact')?.scrollIntoView({ 
                                behavior: 'smooth' 
                              });
                            }}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                          >
                            <span>Get started now</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </div>
          )}

          {/* Desktop Tabs Layout */}
          {!isMobile && (
            <>
              {/* Service Tabs */}
              <motion.div
                className="col-span-4"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
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
                className="col-span-8"
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
                    className="h-full"
                  >
                    <Card className="h-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                      <CardHeader className="p-8 pb-4">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="bg-indigo-600 text-white p-4 rounded-2xl shadow-md flex-shrink-0 transform rotate-3">
                            {iconMap[getActiveService()?.icon || 'AcademicCap']}
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                              {getActiveService()?.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-gray-700 leading-relaxed">
                              {getActiveService()?.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="p-8 pt-4">
                        <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                          <h4 className="text-lg font-semibold text-indigo-800 mb-4">What we offer:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {getActiveService()?.features.map((feature, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
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
                      </CardContent>
                      
                      <CardFooter className="p-8 pt-0">
                        <motion.div
                          className="w-full flex justify-center"
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
                            <ArrowRight className="h-5 w-5" />
                          </button>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
