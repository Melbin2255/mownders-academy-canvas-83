
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactContent } from '@/utils/siteContent';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface ContactSectionProps {
  id: string;
}

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const ContactSection = ({ id }: ContactSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success toast
    toast({
      title: "Message Sent!",
      description: contactContent.form.successMessage,
      variant: "default",
    });
    
    // Reset form
    reset();
  };

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
            {contactContent.heading}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactContent.subheading}
          </motion.p>
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">{contactContent.info.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                    <a href={`mailto:${contactContent.info.email}`} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      {contactContent.info.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                    <a href={`tel:${contactContent.info.phone}`} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      {contactContent.info.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Hours</h4>
                    <p className="text-gray-600">{contactContent.info.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder={contactContent.form.namePlaceholder}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder={contactContent.form.emailPlaceholder}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input 
                    id="phone"
                    {...register("phone")}
                    placeholder={contactContent.form.phonePlaceholder}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    rows={5}
                    placeholder={contactContent.form.messagePlaceholder}
                    className={`flex h-auto w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${
                      errors.message ? "border-red-500" : "border-input"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : contactContent.form.buttonText}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
