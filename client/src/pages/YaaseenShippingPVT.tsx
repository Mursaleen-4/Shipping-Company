import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ship, 
  Globe, 
  Truck,
  Container,
  Anchor,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';
// import { pageBackgrounds } from '../assets/videos';

const YaaseenShippingPVT: React.FC = () => {
  // Animation variants are defined inline where used

  const companyOverview = {
    title: "Yaaseen Shipping Lines (PVT) Ltd",
    tagline: "Specialized Cargo Solutions & Global Logistics",
    description: "As a distinguished member of the Baksh Group, Yaaseen Shipping Lines (PVT) Ltd specializes in providing comprehensive shipping and logistics solutions with a focus on project cargo, heavy-lift operations, and specialized freight services. Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.",
    foundingYear: "2010",
    countries: "30+",
    clients: "1000+",
    projects: "5000+"
  };

  const ourExpertise = [
    {
      icon: <Anchor className="w-8 h-8 text-blue-600" />,
      title: "Project Cargo",
      description: "End-to-end solutions for oversized and heavy-lift cargo with specialized equipment and expertise."
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: "Bulk Shipping",
      description: "Efficient handling and transportation of bulk commodities across global trade routes."
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: "Inland Transport",
      description: "Comprehensive land transportation services ensuring seamless cargo movement."
    },
    {
      icon: <Container className="w-8 h-8 text-blue-600" />,
      title: "Container Logistics",
      description: "Flexible container solutions including FCL, LCL, and specialized container services."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Industry Experience",
      description: "Decades of combined experience in handling complex logistics challenges."
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and cargo monitoring."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Custom Solutions",
      description: "Tailored logistics solutions to meet specific client requirements."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Network",
      description: "Extensive network of partners and agents worldwide."
    }
  ];

  const stats = [
    { number: "15+", label: "Years in Business" },
    { number: "5000+", label: "Projects Completed" },
    { number: "30+", label: "Countries Served" },
    { number: "1000+", label: "Satisfied Clients" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        {/* <div className="absolute inset-0">
          <img
            src={pageBackgrounds.yaaseenAbout || '/images/yaaseen-shipping-bg.jpg'}
            alt="Yaaseen Shipping Lines (PVT) Ltd"
            className="w-full h-full object-cover opacity-40"
          />
        </div> */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Yaaseen Shipping Lines (PVT) Ltd
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized Cargo Solutions & Global Logistics
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Overview</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {companyOverview.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{companyOverview.foundingYear}+</div>
              <h3 className="text-lg font-semibold text-gray-800">Years of Excellence</h3>
              <p className="text-gray-600">Since our founding</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{companyOverview.countries}</div>
              <h3 className="text-lg font-semibold text-gray-800">Countries Served</h3>
              <p className="text-gray-600">Global presence</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{companyOverview.clients}+</div>
              <h3 className="text-lg font-semibold text-gray-800">Satisfied Clients</h3>
              <p className="text-gray-600">And counting</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{companyOverview.projects}+</div>
              <h3 className="text-lg font-semibold text-gray-800">Projects Completed</h3>
              <p className="text-gray-600">Successfully delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourExpertise.map((expertise, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{expertise.title}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional service and building lasting relationships with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-1.5 bg-blue-100 rounded-md mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Ship With Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can support your shipping and logistics needs with our specialized services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default YaaseenShippingPVT;