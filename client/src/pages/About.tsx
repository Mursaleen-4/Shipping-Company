import React, { useState } from 'react';
import { motion  } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  Ship, Truck, ArrowRight,Anchor, Briefcase, Globe, Users, Target, BarChart2, Clock, Shield, Award } from 'lucide-react';


const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  const companies = [
    // {
    //   id: 'baksh-group',
    //   name: "Baksh Group",
    //   shortDescription: "The parent company providing strategic direction and investment across all group businesses.",
    //   description: "Baksh Group is a diversified conglomerate with a strong presence in the maritime, logistics, and investment sectors. As the parent company, we provide strategic direction, financial strength, and operational support to all our subsidiaries.",
    //   icon: <Building2 className="w-8 h-8 text-blue-600" />,
    //   link: "/baksh-group",
    //   year: 2005,
    //   employees: "1000+",
    //   locations: ["Karachi", "Lahore", "Islamabad", "Dubai"],
    //   values: [
    //     { icon: <Target className="w-5 h-5" />, title: "Innovation", description: "Pioneering new solutions" },
    //     { icon: <Shield className="w-5 h-5" />, title: "Integrity", description: "Ethical business practices" },
    //     { icon: <BarChart2 className="w-5 h-5" />, title: "Growth", description: "Sustainable expansion" }
    //   ],
    //   stats: [
    //     { value: "18+", label: "Years Experience" },
    //     { value: "5+", label: "Countries" },
    //     { value: "50+", label: "Vessels" },
    //     { value: "1M+", label: "TEUs Handled" }
    //   ]
    // },
    {
      id: 'baksh-investment',
      name: "Baksh Investment Limited",
      shortDescription: "Strategic investment and financial services company driving growth in the maritime sector.",
      description: "Baksh Investment Limited is the financial backbone of our group, specializing in maritime investments, portfolio management, and strategic financial services. We identify and nurture high-potential opportunities in the shipping and logistics sectors.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      link: "/baksh-investment",
      year: 2008,
      employees: "200+",
      locations: ["Karachi", "Dubai"],
      values: [
        { icon: <BarChart2 className="w-5 h-5" />, title: "Excellence", description: "Superior performance" },
        { icon: <Users className="w-5 h-5" />, title: "Client Focus", description: "Tailored solutions" },
        { icon: <Award className="w-5 h-5" />, title: "Integrity", description: "Trust and transparency" }
      ],
      stats: [
        { value: "$500M+", label: "Assets Under Management" },
        { value: "50+", label: "Investment Projects" },
        { value: "15+", label: "Years Experience" },
        { value: "98%", label: "Client Retention" }
      ]
    },
    {
      id: 'yaaseen-shipping',
      name: "Yaaseen Shipping Lines",
      shortDescription: "Leading maritime services provider with global reach and excellence in shipping solutions.",
      description: "Yaaseen Shipping Lines is a premier maritime services company offering comprehensive shipping solutions worldwide. With a modern fleet and extensive network, we provide reliable and efficient sea transportation services across international waters.",
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      link: "/yaaseen-about",
      year: 2012,
      employees: "500+",
      locations: ["Karachi", "Dubai", "Singapore", "Istanbul"],
      values: [
        { icon: <Globe className="w-5 h-5" />, title: "Global Reach", description: "Worldwide network" },
        { icon: <Clock className="w-5 h-5" />, title: "Reliability", description: "On-time delivery" },
        { icon: <Shield className="w-5 h-5" />, title: "Safety", description: "Highest standards" }
      ],
      stats: [
        { value: "50+", label: "Vessels" },
        { value: "100+", label: "Global Ports" },
        { value: "1M+", label: "TEUs Annually" },
        { value: "99.8%", label: "On-time Delivery" }
      ]
    },
    {
      id: 'yaaseen-pvt',
      name: "Yaaseen Shipping (PVT) Ltd",
      shortDescription: "Specialized cargo solutions and vessel operations with a focus on efficiency and reliability.",
      description: "Yaaseen Shipping (PVT) Ltd specializes in providing comprehensive shipping and logistics solutions tailored to meet the specific needs of our clients. Our expertise includes container shipping, bulk cargo, and specialized transport services.",
      icon: <Anchor className="w-8 h-8 text-blue-600" />,
      link: "/yaaseen-shipping-pvt",
      year: 2015,
      employees: "300+",
      locations: ["Karachi", "Lahore", "Istanbul"],
      values: [
        { icon: <Users className="w-5 h-5" />, title: "Customer First", description: "Client satisfaction" },
        { icon: <Clock className="w-5 h-5" />, title: "Efficiency", description: "Optimal solutions" },
        { icon: <Shield className="w-5 h-5" />, title: "Reliability", description: "Consistent service" }
      ],
      stats: [
        { value: "30+", label: "Vessels" },
        { value: "50+", label: "Global Routes" },
        { value: "500K+", label: "TEUs Handled" },
        { value: "24/7", label: "Support" }
      ]
    },
    {
      id: 'uosl',
      name: "UOSL Shipping & Logistics",
      shortDescription: "End-to-end logistics solutions with a focus on efficiency and customer satisfaction.",
      description: "UOSL Shipping & Logistics is a full-service logistics provider offering comprehensive supply chain solutions. From warehousing to last-mile delivery, we ensure seamless transportation of goods across global markets with maximum efficiency and reliability.",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      link: "/uosl",
      year: 2018,
      employees: "400+",
      locations: ["Karachi", "Lahore", "Islamabad", "Dubai"],
      values: [
        { icon: <Target className="w-5 h-5" />, title: "Innovation", description: "Advanced solutions" },
        { icon: <Users className="w-5 h-5" />, title: "Partnership", description: "Collaborative approach" },
        { icon: <BarChart2 className="w-5 h-5" />, title: "Efficiency", description: "Streamlined operations" }
      ],
      // stats: [
      //   { value: "1M+", label: "Shipments/Year" },
      //   { value: "100+", label: "Vehicles" },
      //   { value: "50K+", label: "Sq. Ft. Warehouse" },
      //   { value: "99.9%", label: "Accuracy" }
      // ]
    }
  ];

  // const toggleCompany = (companyId: string) => {
  //   setExpandedCompany(expandedCompany === companyId ? null : companyId);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-60" />
        </div>

        <div className="relative min-h-[26rem] flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 border border-blue-100 mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-semibold tracking-wider">SINCE 1951</span>
              </motion.div> */}

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Pioneering
                <span className="mx-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Maritime</span>
                Excellence
              </motion.h1>

              <motion.p
                className="mt-5 text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                A diversified group at the forefront of maritime innovation, logistics, and strategic investments —
                connecting markets with integrity, vision, and unmatched reliability.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                {/* <Link
                  to="/services"
                  className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
                >
                  Explore Services
                </Link> */}
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-lg bg-red text-blue-700 border border-blue-600 font-semibold hover:bg-blue-100 transition-colors duration-300 w-full sm:w-auto flex items-center gap-2"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
              >
                <div className="rounded-xl bg-white shadow-sm border border-gray-100 py-4">
                  <div className="text-2xl font-bold text-gray-900">70+</div>
                  <div className="text-xs text-gray-500">Years of Excellence</div>
                </div>
                <div className="rounded-xl bg-white shadow-sm border border-gray-100 py-4">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500">Clients</div>
                </div>
                <div className="rounded-xl bg-white shadow-sm border border-gray-100 py-4">
                  <div className="text-2xl font-bold text-gray-900">Global</div>
                  <div className="text-xs text-gray-500">Presence</div>
                </div>
                <div className="rounded-xl bg-white shadow-sm border border-gray-100 py-4">
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1">
              {['overview', ...companies.map(company => company.id)].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'overview' ? 'Baksh Group' : companies.find(c => c.id === tab)?.name}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'overview' ? (
          <div className="space-y-16">
            {/* Group Overview */}
            <motion.section 
              className="bg-white rounded-xl shadow-md p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Group </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The Baksh Group is a leading conglomerate with a strong presence in maritime, logistics, and investment sectors. 
                    With over 18 years of excellence, we've built a reputation for innovation, reliability, and sustainable growth 
                    across all our business verticals.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our group companies work in synergy to deliver end-to-end solutions, from maritime transport and logistics 
                    to strategic investments and financial services. We operate across multiple countries with a team of dedicated 
                    professionals committed to excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-white">70+</div>
                      <div className="text-sm text-gray-300">Years Experience</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-white">Multiple</div>
                      <div className="text-sm text-gray-300">Countries</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-white">Experienced</div>
                      <div className="text-sm text-gray-300">Employees</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-white">Many</div>
                      <div className="text-sm text-gray-300">Vessels</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/images/group.jpg" 
                    alt="Baksh Group Operations" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.section>

            {/* { Our Companies }
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Companies</h2>
              <div className="space-y-4">
                {companies.map((company, index) => (
                  <motion.div 
                    key={company.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => toggleCompany(company.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 rounded-lg mr-4">
                          {company.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                          <p className="text-sm text-gray-500">{company.shortDescription}</p>
                        </div>
                      </div>
                      {expandedCompany === company.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedCompany === company.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="md:col-span-2">
                                <h4 className="font-medium text-gray-900 mb-2">About {company.name}</h4>
                                <p className="text-gray-600 mb-4">{company.description}</p>
                                <div className="mt-4">
                                  <h5 className="font-medium text-gray-900 mb-2">Locations</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {company.locations.map((location, i) => (
                                      <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {location}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 mb-3">Key Stats</h5>
                                <div className="space-y-3">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                      <Clock className="h-5 w-5" />
                                    </div>
                                    <div className="ml-3">
                                      <p className="text-sm font-medium text-gray-500">Established</p>
                                      <p className="text-sm text-gray-900">{company.year}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                      <Users className="h-5 w-5" />
                                    </div>
                                    <div className="ml-3">
                                      <p className="text-sm font-medium text-gray-500">Employees</p>
                                      <p className="text-sm text-gray-900">{company.employees}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-6">
                                  <h5 className="font-medium text-gray-900 mb-3">Core Values</h5>
                                  <div className="space-y-2">
                                    {company.values.map((value, i) => (
                                      <div key={i} className="flex items-start">
                                        <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                                          {value.icon}
                                        </div>
                                        <div className="ml-3">
                                          <p className="text-sm font-medium text-gray-900">{value.title}</p>
                                          <p className="text-sm text-gray-500">{value.description}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                              <a
                                href={company.link}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                Learn more about {company.name.split(' ')[0]}
                                <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </section> */}

{/* Our Mission & Vision */}
<section
  className="relative py-16 text-white bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=1600&q=80')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 via-gray-800/85 to-gray-900/35"></div>

  <div className="relative max-w-6xl mx-auto px-6 md:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-white">
        Our Mission & Vision
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
        Guiding our journey with innovation, integrity, and impact in every wave we sail.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Mission */}
      <div className="group relative bg-white/10 hover:bg-white/15 transition-all duration-500 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-white/10 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-blue-500/30 rounded-xl group-hover:bg-blue-500/50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7H7v6h6V7z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 13l10 10 4-4-10-10H7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
        </div>
        <p className="text-white-200 leading-relaxed">
          To deliver exceptional value to our customers through innovative maritime and logistics
          solutions, maintaining the highest standards of safety, efficiency, and environmental responsibility.
        </p>

        {/* Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-tr-2xl transition-all duration-500"></div>
      </div>

      {/* Vision */}
      <div className="group relative bg-white/10 hover:bg-white/15 transition-all duration-500 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-white/10 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-3 bg-blue-500/30 rounded-xl group-hover:bg-blue-500/50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
        </div>
        <p className="text-white-200 leading-relaxed">
          To be the most trusted and innovative maritime and logistics group, setting industry benchmarks
          and creating sustainable value for all our stakeholders.
        </p>

        {/* Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-tr-2xl transition-all duration-500"></div>
      </div>
    </div>

    {/* Decorative underline */}
    <div className="mt-12 flex justify-center">
      <div className="h-1 w-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg"></div>
    </div>
  </div>
</section>
            {/* Our Values */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Integrity",
                    description: "We conduct our business with honesty, transparency, and the highest ethical standards.",
                    icon: <Shield className="h-8 w-8 text-blue-600" />
                  },
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in everything we do, continuously improving and innovating.",
                    icon: <Award className="h-8 w-8 text-blue-600" />
                  },
                  {
                    title: "Customer Focus",
                    description: "We build lasting relationships by understanding and exceeding our customers' expectations.",
                    icon: <Users className="h-8 w-8 text-blue-600" />
                  },
                  {
                    title: "Innovation",
                    description: "We embrace new ideas and technologies to drive progress and create value.",
                    icon: <Target className="h-8 w-8 text-blue-600" />
                  },
                  {
                    title: "Sustainability",
                    description: "We are committed to environmental responsibility and sustainable business practices.",
                    icon: <Globe className="h-8 w-8 text-blue-600" />
                  },
                  {
                    title: "Teamwork",
                    description: "We collaborate across our group to achieve shared goals and deliver exceptional results.",
                    icon: <Users className="h-8 w-8 text-blue-600" />
                  }
                ].map((value, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Leadership Team - Commented out for now
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Smith",
                    position: "Group CEO",
                    bio: "20+ years of experience in maritime and logistics industry.",
                    image: "https://randomuser.me/api/portraits/men/1.jpg"
                  },
                  {
                    name: "Sarah Johnson",
                    position: "CFO",
                    bio: "Financial expert with extensive experience in corporate finance.",
                    image: "https://randomuser.me/api/portraits/women/1.jpg"
                  },
                  {
                    name: "Michael Chen",
                    position: "COO",
                    bio: "Operations leader with a track record of operational excellence.",
                    image: "https://randomuser.me/api/portraits/men/2.jpg"
                  }
                ].map((member, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-64 bg-gray-200 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
            */}
          </div>
        ) : (
          // Individual Company View
          <div>
            {companies.map((company) => (
              company.id === activeTab && (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.section 
                    className="bg-white rounded-xl shadow-md p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{company.name} </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {company.description}
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {company.id === 'baksh-investment' && "With over 15 years of experience in maritime investments, we have built a reputation for identifying and nurturing high-potential opportunities in the shipping and logistics sectors. Our strategic approach and deep industry knowledge enable us to deliver exceptional returns for our clients. We specialize in portfolio management, risk assessment, and strategic financial planning to help our clients achieve their investment goals in the maritime industry."}
                          {company.id === 'yaaseen-shipping' && "Operating with a modern fleet and extensive global network, we provide reliable and efficient sea transportation services across international waters. Our commitment to safety, innovation, and customer satisfaction has made us a trusted partner in the maritime industry. We handle container shipping, bulk cargo, and specialized transport with state-of-the-art vessels and experienced crews ensuring timely and secure delivery of goods worldwide."}
                          {company.id === 'yaaseen-pvt' && "Our specialized approach to shipping and logistics solutions ensures that every client receives tailored services that meet their specific requirements. We excel in container shipping, bulk cargo handling, and specialized transport services with unmatched efficiency. Our team of logistics experts works closely with clients to develop customized solutions that optimize supply chain performance and reduce operational costs while maintaining the highest standards of service delivery."}
                          {company.id === 'uosl' && "As a full-service logistics provider, we offer comprehensive supply chain solutions from warehousing to last-mile delivery. Our advanced technology and experienced team ensure seamless transportation of goods across global markets with maximum efficiency and reliability. We provide end-to-end logistics services including freight forwarding, customs clearance, inventory management, and distribution services to help businesses streamline their operations and reach new markets effectively."}
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {company.id === 'baksh-investment' && "Our investment philosophy centers on long-term value creation through careful analysis of market trends and emerging opportunities in the maritime sector. We leverage our deep industry expertise to identify undervalued assets and growth potential, providing our clients with diversified investment portfolios that deliver consistent returns while managing risk effectively."}
                          {company.id === 'yaaseen-shipping' && "With our comprehensive fleet management system and strategic partnerships across major shipping routes, we ensure optimal vessel utilization and route efficiency. Our advanced tracking technology and real-time monitoring systems provide complete visibility throughout the shipping process, giving our clients peace of mind and enabling them to make informed decisions about their cargo movements."}
                          {company.id === 'yaaseen-pvt' && "We understand that each client has unique shipping requirements and challenges. Our flexible service offerings include charter services, project cargo handling, and specialized equipment for sensitive or oversized shipments. Our commitment to continuous improvement and investment in modern infrastructure ensures we remain at the forefront of the shipping industry."}
                          {company.id === 'uosl' && "Our integrated logistics platform combines advanced technology with personalized service to deliver exceptional results. We offer flexible solutions that scale with our clients' business needs, from small package delivery to large-scale freight operations. Our team of logistics professionals is dedicated to exceeding expectations and building lasting partnerships with our clients."}
                        </p>
                        {/* <div className="grid grid-cols-2 gap-4 mt-8">
                          {company.stats.slice(0, 4).map((stat, i) => (
                            <div key={i} className="bg-gray-800 p-4 rounded-lg">
                              <div className="text-2xl font-bold text-white">{stat.value}</div>
                              <div className="text-sm text-gray-300">{stat.label}</div>
                            </div>
                          ))}
                        </div> */}
                      </div>
                      <div className="bg-gray-100 rounded-lg overflow-hidden h-96 md:h-full">
                        <img 
                          src={company.id === 'baksh-investment' ? "/images/bill.jpg" :
                               company.id === 'yaaseen-shipping' ? "/images/yal.jpg" :
                               company.id === 'yaaseen-pvt' ? "/images/yap.jpg" :
                               company.id === 'uosl' ? "/images/uosl.jpg" :
                               "/images/bill.jpg"}
                          alt={`${company.name} Operations`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.section>

                  {/* Company Values */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {company.values.map((value, i) => (
                        <motion.div 
                          key={i}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                            {value.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                          <p className="text-gray-600">{value.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Company Services */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Maritime Transport",
                          description: "Efficient and reliable sea freight solutions for all types of cargo."
                        },
                        {
                          title: "Logistics Solutions",
                          description: "End-to-end supply chain management and logistics services."
                        },
                        {
                          title: "Port Operations",
                          description: "Comprehensive port management and stevedoring services."
                        },
                        {
                          title: "Investment Services",
                          description: "Strategic investment solutions for maritime and logistics sectors."
                        }
                      ].map((service, i) => (
                        <motion.div 
                          key={i}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                    <div className="max-w-3xl mx-auto text-center">
                      <h2 className="text-3xl font-bold mb-4">Ready to get started with {company.name}?</h2>
                      <p className="text-xl text-blue-100 mb-8">
                        Contact us today to discuss how we can help with your {company.name.toLowerCase().includes('shipping') ? 'shipping' : 'business'} needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8"
                        >
                          Contact Us
                        </a>
                        <a
                          href={company.link}
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-8"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div> */}
                </motion.div>
              )
            ))}
          </div>
        )}
      </main>

{/* Global Footer CTA
<footer className="bg-gray-900 text-white py-12 w-full mt-auto">
  <div className="w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to grow with us?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied clients who trust our group for their maritime and logistics needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-8"
          >
            Get in Touch
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Group Companies</h3>
            <ul className="mt-4 space-y-2">
              {companies.map((company) => (
                <li key={company.id}>
                  <a href={company.link} className="text-base text-gray-300 hover:text-white">
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-base text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-base text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="/careers" className="text-base text-gray-300 hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/privacy" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="/cookies" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-base text-gray-300">123 Maritime Ave, Karachi, Pakistan</span></li>
              <li><span className="text-base text-gray-300">+92 300 1234567</span></li>
              <li><span className="text-base text-gray-300">info@bakhsgroup.com</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Baksh Group. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</footer> */}
    </div>
  );
};

export default About;