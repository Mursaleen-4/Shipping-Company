import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Container, Target, Clock, Shield, Truck } from 'lucide-react';

const UOSL: React.FC = () => {
  const stats = [
    { value: '24/7', label: 'Operations', icon: Clock },
    { value: '10+', label: 'Years Experience', icon: Container },
    { value: '50+', label: 'Dedicated Staff', icon: Shield },
    { value: '100%', label: 'Customer Satisfaction', icon: Target }
  ];

  const facilities = [
    '24/7 CCTV surveillance',
    'Gated and fenced premises',
    'Round-the-clock security personnel',
    'Separate entry/exit gates',
    'Standby power generators',
    'Advanced firefighting systems'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-28 pb-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-16">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6"
            >
              <p className="text-primary-200 font-medium">SINCE 2013</p>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto px-4"
            >
              Pioneering Excellence in Container Logistics
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4"
            >
              Your trusted partner for comprehensive container management and logistics solutions across Pakistan
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4 sm:px-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure Storage</h3>
                <p className="text-primary-200">State-of-the-art facilities with 24/7 surveillance and advanced security systems to ensure your cargo is always protected.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Nationwide Network</h3>
                <p className="text-primary-200">Extensive logistics network connecting major ports and industrial hubs across Pakistan for seamless operations.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Container className="w-6 h-6 text-primary-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Container Solutions</h3>
                <p className="text-primary-200">Comprehensive container management services including storage, maintenance, and tracking for all your shipping needs.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-100 rounded-full opacity-20"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary-100 rounded-full opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608889825205-eeb953fcb6e8?q=80&w=1500')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-800/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-left">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-lg text-white leading-relaxed">To provide exceptional container management and logistics services with efficiency, reliability, and innovation.</p>
                    <div className="mt-6 flex space-x-4">
                      <div className="w-12 h-1 bg-yellow-400"></div>
                      <div className="w-8 h-1 bg-yellow-400"></div>
                      <div className="w-4 h-1 bg-yellow-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About UOSL</h2>
              <p className="text-gray-600 mb-6">
                UOSL Shipping & Logistics (Pvt) Ltd is a part of the Baksh Group of Companies, specializing in comprehensive container management solutions. 
                With state-of-the-art facilities in Karachi and Lahore, we provide end-to-end logistics services to meet all your container handling needs.
              </p>
              <p className="text-gray-600 mb-8">
                Our facilities are equipped with modern technology and staffed by experienced professionals to ensure efficient and secure container storage, 
                handling, and transportation services around the clock.
              </p>
              
              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">{facility}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1800')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-primary-200 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied clients who trust UOSL for their container management and logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+922135688057"
              className="bg-white text-primary-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Us Now
            </a>
            <a
              href="mailto:info@u-osl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default UOSL;
