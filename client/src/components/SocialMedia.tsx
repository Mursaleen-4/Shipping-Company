import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, ExternalLink } from 'lucide-react';

const SocialMedia: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/yaaseenshippinglines',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Follow us for daily updates and company news'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/yaaseen-shipping-lines',
      color: 'bg-blue-700 hover:bg-blue-800',
      description: 'Connect with us professionally'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 relative bg-blue-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <ExternalLink className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
            GET SOCIAL WITH US
          </h2>
          
          <p className="text-lg text-blue-700 max-w-2xl mx-auto leading-relaxed">
            Stay connected and get the latest updates on our maritime services, industry insights, 
            and company developments across all our social media platforms.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialPlatforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                className="group"
                variants={itemVariants}
                whileHover={{ y: -4, rotate: idx % 2 ? 0.5 : -0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg border border-blue-100 h-full"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${platform.color} mb-4 mx-auto shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {platform.name}
                  </h3>
                  
                  <p className="text-blue-600 text-sm leading-relaxed group-hover:text-blue-800 transition-colors">
                    {platform.description}
                  </p>
                  
                  <div className="mt-4 inline-flex items-center text-blue-700 font-semibold group-hover:text-blue-900 transition-colors">
                    <span className="mr-2">Follow Us</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
