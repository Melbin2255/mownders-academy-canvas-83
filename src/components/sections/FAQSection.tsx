
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { faqData } from '@/utils/siteContent';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQSectionProps {
  id: string;
}

const FAQSection = ({ id }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {faqData.heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.subheading}
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {faqData.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
            >
              <button
                className={`flex justify-between items-center w-full p-5 text-left ${
                  activeIndex === index ? 'bg-indigo-50' : 'bg-white'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={`text-lg font-semibold ${
                  activeIndex === index ? 'text-indigo-700' : 'text-gray-900'
                }`}>
                  {faq.question}
                </h3>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
