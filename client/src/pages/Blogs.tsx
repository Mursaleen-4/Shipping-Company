import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Globe,
  Ship,
  TrendingUp,
  Award
} from 'lucide-react';
// import { pageBackgrounds } from '../assets/videos';

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: <Globe className="w-4 h-4" /> },
    { id: 'shipping', name: 'Shipping', icon: <Ship className="w-4 h-4" /> },
    { id: 'logistics', name: 'Logistics', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'industry', name: 'Industry', icon: <Award className="w-4 h-4" /> },
    { id: 'company', name: 'Company', icon: <User className="w-4 h-4" /> }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Maritime Shipping: Trends and Innovations',
      excerpt: 'Exploring the latest technological advancements and trends shaping the future of global maritime shipping industry.',
      content: 'The maritime shipping industry is undergoing a significant transformation driven by technological innovation, environmental concerns, and changing global trade patterns. From autonomous vessels to green shipping technologies, the sector is embracing digitalization and sustainability at an unprecedented pace.',
      author: 'Ahmed Hassan',
      authorRole: 'Maritime Technology Director',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      category: 'shipping',
      tags: ['Technology', 'Innovation', 'Maritime'],
      image: 'https://images.unsplash.com/photo-1523395147355-9ded3539f60d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      featured: true
    },
    {
      id: 2,
      title: 'Sustainable Logistics: Our Commitment to Green Shipping',
      excerpt: 'How Yaaseen Shipping is leading the way in sustainable maritime operations and environmental responsibility.',
      content: 'Sustainability is at the core of our operations. We are committed to reducing our carbon footprint through innovative technologies, fuel-efficient vessels, and sustainable practices that protect our oceans for future generations.',
      author: 'Sarah Johnson',
      authorRole: 'Sustainability Manager',
      publishDate: '2024-01-12',
      readTime: '4 min read',
      category: 'logistics',
      tags: ['Sustainability', 'Environment', 'Green Shipping'],
      image: 'https://images.unsplash.com/photo-1597151884305-2a7a1549e34e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      featured: false
    },
    {
      id: 3,
      title: 'Global Trade Recovery: Market Analysis and Outlook',
      excerpt: 'An in-depth analysis of global trade recovery patterns and their impact on shipping and logistics sectors.',
      content: 'The global trade landscape is showing signs of recovery with increased demand for shipping services. Our analysis reveals key trends and opportunities for businesses looking to expand their international operations.',
      author: 'Michael Chen',
      authorRole: 'Market Analyst',
      publishDate: '2024-01-10',
      readTime: '6 min read',
      category: 'industry',
      tags: ['Market Analysis', 'Global Trade', 'Recovery'],
      image: 'https://plus.unsplash.com/premium_photo-1661964131234-fda88ca041c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      featured: false
    },
    {
      id: 4,
      title: 'Yaaseen Shipping Expands Fleet with New Container Vessels',
      excerpt: 'We are excited to announce the addition of three new state-of-the-art container vessels to our fleet.',
      content: 'Our fleet expansion represents a significant investment in modern, fuel-efficient vessels that will enhance our service capabilities and reduce environmental impact. These new vessels feature the latest technology and safety systems.',
      author: 'Captain Ali Rahman',
      authorRole: 'Fleet Operations Manager',
      publishDate: '2024-01-08',
      readTime: '3 min read',
      category: 'company',
      tags: ['Fleet Expansion', 'New Vessels', 'Investment'],
      image: 'https://plus.unsplash.com/premium_photo-1661963131307-f79ad259ccfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      featured: true
    },
    {
      id: 5,
      title: 'Digital Transformation in Port Operations',
      excerpt: 'How digital technologies are revolutionizing port operations and improving efficiency.',
      content: 'Port operations are becoming increasingly digitalized with IoT sensors, AI-powered systems, and automated processes. This transformation is improving efficiency, reducing costs, and enhancing safety across the maritime industry.',
      author: 'Dr. Fatima Al-Zahra',
      authorRole: 'Technology Innovation Lead',
      publishDate: '2024-01-05',
      readTime: '7 min read',
      category: 'shipping',
      tags: ['Digitalization', 'Port Operations', 'Technology'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Supply Chain Resilience in Uncertain Times',
      excerpt: 'Building resilient supply chains that can adapt to global disruptions and market changes.',
      content: 'The importance of supply chain resilience has never been more evident. Companies are investing in diversified logistics networks, digital visibility tools, and flexible operations to navigate uncertain times.',
      author: 'Robert Kim',
      authorRole: 'Supply Chain Director',
      publishDate: '2024-01-03',
      readTime: '5 min read',
      category: 'logistics',
      tags: ['Supply Chain', 'Resilience', 'Risk Management'],
      image: 'https://images.unsplash.com/photo-1627391242762-4ea316c7c068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'readTime':
        return parseInt(a.readTime) - parseInt(b.readTime);
      default:
        return 0;
    }
  });

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
{/* Page Title */}
<section className="text-center py-12">
  <motion.h1
    className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-blue-600">News & Blogs</span>
  </motion.h1>
  <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>

</section>


      {/* Search and Filter Section */}
      <section className="py-12 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* { Sort Dropdown }
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="readTime">Read Time</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.publishDate).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.publishDate).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author}</div>
                          <div className="text-xs text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {regularPosts.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest industry insights, company news, and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
              />
              <motion.button 
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Blogs;
