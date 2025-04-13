
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonialsData } from '@/utils/siteContent';
import { useEffect, useState } from 'react';

interface TestimonialsSectionProps {
  id: string;
}

const TestimonialsSection = ({ id }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonialsData.testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id={id} className="py-16 md:py-24 bg-indigo-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {testimonialsData.heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {testimonialsData.subheading}
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Testimonial Carousel */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute w-full h-full bg-white rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-500 flex flex-col md:flex-row items-center gap-8`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : (activeIndex > index ? -100 : 100),
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-indigo-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-150788629${index + 1}3-59f25cf2c6cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="text-4xl text-indigo-300 mb-4">"</div>
                  <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-indigo-600">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
