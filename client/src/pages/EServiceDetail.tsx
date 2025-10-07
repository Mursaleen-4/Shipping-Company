import { FC, ReactElement, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Ship, Truck, Package, Anchor } from 'lucide-react';

interface IService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  color: string;
}

const defaultServices: IService[] = [
  {
    id: '1',
    title: 'Liner Shipping',
    description: 'Regular scheduled services with our partners',
    longDescription: 'Our liner shipping services provide reliable, scheduled cargo transportation with fixed routes and schedules. We offer both full container load (FCL) and less than container load (LCL) options to meet your specific shipping needs.',
    icon: 'ship',
    features: [
      'Regular scheduled departures',
      'Global port coverage',
      'FCL and LCL options',
      'Real-time tracking',
      'Dedicated account management'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: '2',
    title: 'Freight Forwarding',
    description: 'Complete logistics solutions and documentation',
    longDescription: 'Our comprehensive freight forwarding services handle all aspects of your cargo movement, from origin to destination. We manage customs clearance, documentation, and coordination with carriers to ensure smooth transportation.',
    icon: 'truck',
    features: [
      'Door-to-door service',
      'Customs clearance',
      'Cargo insurance',
      'Documentation handling',
      'Multi-modal transport'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    id: '3',
    title: 'Container Services',
    description: 'FCL/LCL services with empty container depots',
    longDescription: 'We offer flexible container solutions including FCL (Full Container Load) and LCL (Less than Container Load) services. Our network of depots ensures easy access to containers when and where you need them.',
    icon: 'container',
    features: [
      'FCL and LCL options',
      'Container tracking',
      'Depot services',
      'Special container types',
      'Flexible leasing options'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: '4',
    title: 'Ship Husbandry',
    description: 'Vessel handling and port coordination services',
    longDescription: 'Our ship husbandry services ensure smooth port operations, including vessel agency, crew changes, and port coordination. We handle all necessary arrangements to minimize port stay and optimize your operations.',
    icon: 'anchor',
    features: [
      'Port agency services',
      'Bunkering arrangements',
      'Crew changes',
      'Port documentation',
      'Vessel supplies'
    ],
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: '5',
    title: 'Warehousing',
    description: 'Secure storage and inventory management solutions',
    longDescription: 'Our warehousing services provide secure, climate-controlled storage solutions with advanced inventory management. We offer short and long-term storage options with real-time inventory tracking and reporting.',
    icon: 'package',
    features: [
      'Secure storage facilities',
      'Climate-controlled options',
      'Real-time inventory tracking',
      'Pick and pack services',
      'Distribution support'
    ],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: '6',
    title: 'Customs Clearance',
    description: 'Efficient handling of all customs documentation and clearance',
    longDescription: 'Our customs clearance services ensure your shipments comply with all import/export regulations. We handle all necessary documentation and work closely with customs authorities to prevent delays.',
    icon: 'clipboard-check',
    features: [
      'Import/export documentation',
      'Duty and tax calculation',
      'Regulatory compliance',
      'Customs brokerage',
      'Duty drawback services'
    ],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: '7',
    title: 'Cargo Tracking',
    description: 'Real-time tracking of your shipments and containers',
    longDescription: 'Our advanced cargo tracking system provides real-time visibility of your shipments worldwide. Get instant updates on location, temperature, and estimated time of arrival.',
    icon: 'map-pin',
    features: [
      'Real-time GPS tracking',
      'Temperature monitoring',
      'Automated alerts',
      'Mobile access',
      'Custom reporting'
    ],
    color: 'from-emerald-500 to-green-600'
  },
  {
    id: '8',
    title: 'Vessel Schedules',
    description: 'Up-to-date vessel schedules and port calls',
    longDescription: 'Access our comprehensive database of vessel schedules and port calls to plan your shipments efficiently. Our system is updated in real-time with the latest schedule changes and port conditions.',
    icon: 'calendar',
    features: [
      'Real-time schedule updates',
      'Port congestion alerts',
      'Route optimization',
      'Historical data',
      'Custom schedule feeds'
    ],
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: '9',
    title: 'Document Management',
    description: 'Upload, store and manage all your shipping documents',
    longDescription: 'Our secure document management system allows you to store, share, and manage all your shipping documents in one place. Access your documents anytime, anywhere with our cloud-based platform.',
    icon: 'file-text',
    features: [
      'Secure cloud storage',
      'Document sharing',
      'Version control',
      'Digital signatures',
      'Compliance archiving'
    ],
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: '10',
    title: 'Shipping News',
    description: 'Latest news and updates in the shipping industry',
    longDescription: 'Stay informed with the latest developments in the shipping industry. Our news service provides timely updates on market trends, regulatory changes, and company announcements.',
    icon: 'newspaper',
    features: [
      'Daily industry updates',
      'Market analysis',
      'Regulatory changes',
      'Company news',
      'Custom alerts'
    ],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: '11',
    title: 'Freight Calculator',
    description: 'Calculate estimated freight costs for your shipments',
    longDescription: 'Our freight calculator helps you estimate shipping costs based on various factors including origin, destination, weight, and dimensions. Get instant quotes for different shipping methods.',
    icon: 'calculator',
    features: [
      'Multi-modal rate comparison',
      'Currency conversion',
      'Surcharge calculation',
      'Save quotes',
      'Custom rate agreements'
    ],
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: '12',
    title: 'Container Management',
    description: 'Track and manage your containers with our advanced system',
    longDescription: 'Our container management system provides end-to-end visibility and control of your container fleet. Monitor container status, location, and condition in real-time.',
    icon: 'box',
    features: [
      'Container tracking',
      'Maintenance scheduling',
      'Utilization reports',
      'Lease management',
      'Cost analysis'
    ],
    color: 'from-teal-500 to-cyan-600'
  },
  {
    id: '13',
    title: 'Market Insights',
    description: 'Access to shipping market trends and analysis',
    longDescription: 'Gain valuable insights into shipping market trends with our comprehensive analysis and reports. Make informed decisions based on real-time market data and expert analysis.',
    icon: 'bar-chart-2',
    features: [
      'Market trends',
      'Freight rate analysis',
      'Capacity forecasts',
      'Trade lane analysis',
      'Custom reports'
    ],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: '14',
    title: 'Compliance & Security',
    description: 'Ensure your shipments meet all regulatory requirements',
    longDescription: 'Our compliance and security services help you navigate complex international trade regulations and ensure your shipments meet all security requirements.',
    icon: 'shield',
    features: [
      'Regulatory compliance',
      'Security screening',
      'Risk assessment',
      'Training programs',
      'Audit support'
    ],
    color: 'from-red-500 to-pink-600'
  },
  {
    id: '15',
    title: 'Industry News',
    description: 'Stay informed with the latest updates and insights from the shipping industry',
    longDescription: 'Access comprehensive coverage of the shipping industry, including market trends, regulatory updates, and company news. Our expert analysis helps you stay ahead in a competitive market.',
    icon: 'rss',
    features: [
      'Daily news updates',
      'Exclusive interviews',
      'Market analysis',
      'Event coverage',
      'Custom news alerts'
    ],
    color: 'from-blue-600 to-indigo-700'
  }
];

const EServiceDetail: FC = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<IService | undefined>();
  const navigate = useNavigate();
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to fetch services from API first
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          setServices(defaultServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      const foundService = services.find(s => s.id === id);
      if (!foundService) {
        // If service not found, redirect to services page
        navigate('/services');
        return;
      }
      setService(foundService);
    }
  }, [id, services, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The requested service could not be found.</p>
          <Link to="/services" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }


  const IconComponent = 
    service.icon === 'ship' ? Ship :
    service.icon === 'truck' ? Truck :
    service.icon === 'container' ? Package :
    service.icon === 'anchor' ? Anchor : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Services
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with gradient */}
          <div className={`${service.color} h-2 w-full`}></div>
          
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center mb-8">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                {IconComponent && (
                  <div className="p-4 rounded-xl bg-opacity-10 bg-gray-900">
                    <IconComponent className={`h-12 w-12 ${service.color.replace('from-', 'text-').split(' ')[0]}`} />
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Service Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.longDescription}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Ready to get started with our {service.title.toLowerCase()} service?
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/eservices"
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EServiceDetail;