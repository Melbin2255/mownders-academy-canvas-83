
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aboutContent } from '@/utils/siteContent';

interface AboutSectionProps {
  id: string;
}

const AboutSection = ({ id }: AboutSectionProps) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {aboutContent.heading}
          </motion.h2>
        </div>

        {/* Mission Section */}
        <div 
          ref={sectionRef} 
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {aboutContent.mission.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutContent.mission.description}
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              We believe in empowering students with personalized guidance, expert insights, and dedicated support throughout their educational journey. Our approach combines industry expertise with a deep understanding of each student's unique goals and aspirations.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl max-w-md">
              <img
                src={aboutContent.mission.image}
                alt={aboutContent.mission.imageAlt}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mb-10">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {aboutContent.values.title}
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {aboutContent.values.items.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
