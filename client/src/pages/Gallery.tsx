import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Ship,
  Container,
  Truck,
  Building2,
  Globe,
  Anchor
} from 'lucide-react';
// import { pageBackgrounds } from '../assets/videos';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: <Globe className="w-4 h-4" /> },
    { id: 'ships', name: 'Ships & Vessels', icon: <Ship className="w-4 h-4" /> },
    { id: 'ports', name: 'Ports & Terminals', icon: <Anchor className="w-4 h-4" /> },
    { id: 'containers', name: 'Container Operations', icon: <Container className="w-4 h-4" /> },
    { id: 'logistics', name: 'Logistics', icon: <Truck className="w-4 h-4" /> },
    { id: 'offices', name: 'Our Offices', icon: <Building2 className="w-4 h-4" /> }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1533977803438-314dc812a450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Container Ship at Port',
      category: 'ships',
      description: 'Our flagship container vessel loading cargo at the main port terminal.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Port Operations',
      category: 'ports',
      description: 'Efficient cargo handling operations at our state-of-the-art port facility.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503276459378-5e4c6865a0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Container Yard',
      category: 'containers',
      description: 'Organized container storage and management system ensuring quick access and efficient operations.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1613690413712-dbe316605644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhhcmJvcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Truck Fleet',
      category: 'logistics',
      description: 'Our modern truck fleet ensuring reliable land transportation services.'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1590497008432-598f04441de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyYm9yfGVufDB8fDB8fHww',
      title: 'Corporate Office',
      category: 'offices',
      description: 'Our modern corporate headquarters designed for efficient operations and client meetings.'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1601311852860-1d8f42381551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvcnR8ZW58MHx8MHx8fDA%3D',
      title: 'Cargo Ship at Sea',
      category: 'ships',
      description: 'Our cargo vessel navigating through international waters with precision and safety.'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1581238540491-5e055dceb2d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnR8ZW58MHx8MHx8fDA%3D',
      title: 'Port Cranes',
      category: 'ports',
      description: 'Advanced port cranes handling containers with speed and precision.'
    },
    {
      id: 8,
      src: 'https://plus.unsplash.com/premium_photo-1673362114918-6f69d11a1b38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnR8ZW58MHx8MHx8fDA%3D',
      title: 'Container Loading',
      category: 'containers',
      description: 'Systematic container loading process ensuring cargo safety and efficiency.'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1591907303049-a5e5df26bcb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnR8ZW58MHx8MHx8fDA%3D',
      title: 'Warehouse Operations',
      category: 'logistics',
      description: 'Modern warehouse facility with advanced inventory management systems.'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1527314392553-2c7bded21b23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Global Operations Center',
      category: 'offices',
      description: 'Our global operations center monitoring shipments worldwide in real-time.'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1696965663045-857145758dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXBzJTIwY29udGFpbmVycyUyMGhkfGVufDB8fDB8fHww',
      title: 'Fleet Management',
      category: 'ships',
      description: 'Our diverse fleet of vessels designed for different cargo types and routes.'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1661756977826-c66970f2a2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcHMlMjBjb250YWluZXJzJTIwaGR8ZW58MHx8MHx8fDA%3D',
      title: 'Port Infrastructure',
      category: 'ports',
      description: 'State-of-the-art port infrastructure supporting high-volume cargo operations.'
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      const nextImage = filteredImages[nextIndex];
      if (nextImage) {
        setSelectedImage(nextImage.id);
      }
    }
  };

  const prevImage = () => {
    if (selectedImage !== null && filteredImages.length > 0) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      const prevImage = filteredImages[prevIndex];
      if (prevImage) {
        setSelectedImage(prevImage.id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-300">Our Gallery</span>
            </h1>

          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* { Search Bar }
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div> */}

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
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const image = galleryImages.find(img => img.id === selectedImage);
                if (!image) return null;
                
                return (
                  <>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto max-h-[70vh] object-contain"
                      />
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                      >
                        <X className="w-6 h-6 text-gray-600" />
                      </button>
                      
                      {/* Navigation buttons */}
                      {filteredImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                          >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                          </button>
                        </>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{image.title}</h3>
                      <p className="text-gray-600">{image.description}</p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
