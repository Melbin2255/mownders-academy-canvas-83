
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-50 to-accent-50 pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-200 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
        <svg className="absolute top-1/4 right-1/4 text-primary-300 opacity-20 w-32 h-32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.4 63.5C24.8 82.8 -15.9 121.7 10.8 145.8C37.4 169.9 73.5 138.5 110.9 123.2C148.2 107.9 186.8 108.7 199.9 87.5C213 66.3 200.6 23.2 165.9 7.8C131.2 -7.6 74.2 4.6 46.4 63.5Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Unlock Your Future at <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">Mownder's Academy</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed"
            >
              Personalized guidance to help you navigate college admissions and build the career of your dreams. Expert counseling that puts your goals first.
            </motion.p>

            <motion.div 
              variants={item}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a 
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all"
              >
                Book a Free Consultation
              </a>
              
              <a 
                href="#services"
                className="bg-transparent border border-gray-300 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/50 transition-all"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div 
              variants={item}
              className="mt-10 flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="text-indigo-600">500+</span> successful admissions in 2024
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Student group" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Floating badge/card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-indigo-100 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">98% Success Rate</div>
                  <div className="text-sm text-gray-600">College Admissions</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
