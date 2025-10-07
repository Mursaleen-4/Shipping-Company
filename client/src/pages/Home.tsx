import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Users, Award, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import Testimonials from '../components/Testimonials';
import SocialMedia from '../components/SocialMedia';
// import { pageBackgrounds } from '../assets/videos';
const Home: React.FC = () => {
  const stats = [
    {
      icon: Ship,
      value: '70+',
      label: 'Years of Excellence',
      description: 'Serving the maritime industry since 1951'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Satisfied Clients',
      description: 'Trusted by leading companies worldwide'
    },
    {
      icon: Award,
      value: '4',
      label: 'Major Cities',
      description: 'Offices across Pakistan for better service'
    },
    {
      icon: TrendingUp,
      value: '24/7',
      label: 'Customer Support',
      description: 'Round-the-clock assistance and monitoring'
    }
  ];

  const quickServices = [
    {
      id: '1',
      title: 'Liner Shipping',
      description: 'Regular scheduled services with OOCL partnership',
      color: 'from-blue-500 to-blue-600',
      link: '/services/1'
    },
    {
      id: '2',
      title: 'Freight Forwarding',
      description: 'Complete logistics solutions and documentation',
      color: 'from-green-500 to-green-600',
      link: '/services/2'
    },
    {
      id: '3',
      title: 'Container Services',
      description: 'FCL/LCL services with empty container depots',
      color: 'from-purple-500 to-purple-600',
      link: '/services/3'
    },
    {
      id: '4',
      title: 'Ship Husbandry',
      description: 'Vessel handling and port coordination services',
      color: 'from-orange-500 to-orange-600',
      link: '/services/4'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Company Stats */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted Maritime Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven decades of excellence in maritime services, connecting Pakistan to global trade routes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quick Service Access
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast access to our most popular shipping and logistics services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Link to={service.link} className="group block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                    Learn More →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Contact CTA - Clean Split Layout */}
            <section className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                {/* Left side - Light blue background with content */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center p-12 lg:p-16 xl:p-20">
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-8">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                        Get in Touch
                      </span>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Let's work <span className="text-blue-600">together</span> on your next project
                      </h2>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        We're here to help you navigate the complexities of global shipping and logistics. 
                        Our team of experts is ready to provide personalized solutions for your business needs.
                      </p>
                    </div>
                    
                    <div className="space-y-6 mb-10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-100 p-3 rounded-full">
                            <Phone className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                          <p className="text-blue-600 hover:text-blue-700">+92 21 3241 4848</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-100 p-3 rounded-full">
                            <Mail className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                          <p className="text-blue-600 hover:text-blue-700">info@yslpk.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-100 p-3 rounded-full">
                            <MapPin className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                          <p className="text-gray-700">
                            10th Floor, Sheikh Sultan Trust Bldg,<br />
                            Beaumont Road, Karachi, Pakistan
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div 
                        whileHover={{ y: -3, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto"
                      >
                        <Link 
                          to="/contact" 
                          className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <span>Get Started</span>
                          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </motion.div>
                      <motion.div 
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto"
                      >
                        <Link 
                          to="/about" 
                          className="w-full flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-100 hover:border-blue-200 text-blue-600 hover:text-blue-700 font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <span>Learn More</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Image only */}
                <div className="relative min-h-[400px] lg:min-h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/images/group.jpg)' }}
                  />
                </div>
              </div>
            </section>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Social Media */}
      <SocialMedia />
      

    </div>
  );
};

export default Home;
