import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ship, 
  Globe, 
  Users, 
  Award, 
  Target, 
  Building2,
  Truck,
  Container
} from 'lucide-react';
// import { pageBackgrounds } from '../assets/videos';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for the highest standards in all our operations, ensuring quality service delivery."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our dealings."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We embrace technology and innovative solutions to enhance our shipping and logistics services."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Reliability",
      description: "We are committed to delivering consistent, dependable services that our clients can trust."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "50+", label: "Global Destinations" },
    { number: "99%", label: "On-Time Delivery" }
  ];

  const services = [
    {
      icon: <Ship className="w-6 h-6 text-blue-600" />,
      title: "Ocean Freight",
      description: "Comprehensive ocean freight solutions connecting major global ports with reliable and efficient service."
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Land Transport",
      description: "Efficient land transportation services ensuring seamless cargo movement across regions."
    },
    {
      icon: <Container className="w-6 h-6 text-blue-600" />,
      title: "Container Services",
      description: "Full container load and less than container load services tailored to your specific needs."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-600" />,
      title: "Project Cargo",
      description: "Specialized handling of oversized and project cargo with dedicated expertise and equipment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8cGF0aCBkPSJNNTAgMjVjMC0xMC0xMC0xNS0yMC0xNS0xMSAwLTIwIDUtMjAgMTVzMTAgMTUgMjAgMTUgMjAtNSAyMC0xNVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+')]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="text-center py-16 sm:py-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block bg-blue-600/10 border border-blue-100 backdrop-blur-sm px-5 py-2 rounded-full mb-6"
            >
              <span className="text-blue-700 font-medium tracking-wider text-sm">ABOUT OUR COMPANY</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Yaaseen Shipping</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Leading maritime services provider with a commitment to excellence in global shipping and logistics. 
              We connect businesses worldwide through innovative solutions and unwavering reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story & Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to revolutionize global shipping and logistics, Yaaseen Shipping Lines 
                has grown from a regional player to a trusted international maritime services provider. Our 
                journey is built on the foundation of excellence, innovation, and unwavering commitment to our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in creating sustainable value through integrated supply chain solutions that drive 
                competitive advantages for businesses worldwide. Our comprehensive network and specialized 
                expertise enable us to deliver simplified, cost-effective logistics solutions.
              </p>
              {/* <div className="flex items-center text-blue-600 font-semibold group">
                <span className="mr-2">Learn more about our journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div> */}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-blue-200 mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-blue-100">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/85 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and define our commitment to excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maritime and logistics solutions designed to meet your business needs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* { Mission & Vision }
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-200 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg">
                To provide innovative, reliable, and cost-effective maritime and logistics solutions that 
                connect businesses globally while maintaining the highest standards of service excellence 
                and environmental responsibility.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-gray-300 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become the leading global maritime services provider, recognized for our innovation, 
                sustainability, and commitment to delivering exceptional value to our clients and partners 
                worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* { Call to Action }
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their shipping and logistics needs. 
              Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
              <motion.button 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;