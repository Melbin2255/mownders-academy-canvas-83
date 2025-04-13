
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { offeringsContent } from '@/utils/siteContent';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface OfferingsSectionProps {
  id: string;
}

const OfferingsSection = ({ id }: OfferingsSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={id} className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {offeringsContent.heading}
          </motion.h2>
        </div>
        
        <div ref={ref} className="space-y-20">
          {offeringsContent.offerings.map((offering, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex-1">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={offering.image} 
                    alt={offering.imageAlt}
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-16196011790${index + 1}5-a7e97fd4c0f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
                    }}
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {offering.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {offering.description}
                </p>
                
                <ul className="mt-6 space-y-2">
                  {offering.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                    >
                      <CheckCircleIcon className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  className="mt-6 text-indigo-600 font-semibold flex items-center gap-1 hover:text-indigo-800 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  onClick={() => {
                    document.querySelector('#services')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
