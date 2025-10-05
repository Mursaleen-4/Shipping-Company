import React from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign } from 'lucide-react';

const Tariffs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
        >
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center">
                <div className="p-3 bg-blue-50 rounded-xl mr-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tariffs</h1>
                  <p className="text-gray-600">Our standard rates and downloadable tariff sheets.</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors self-start md:self-center"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Liner Shipping', desc: 'Base ocean freight and surcharges.' },
              { title: 'Freight Forwarding', desc: 'Air, sea and inland rates overview.' },
              { title: 'Container Services', desc: 'FCL/LCL, storage and handling fees.' },
              { title: 'Ship Husbandry', desc: 'Agency fees and port charges guidance.' },
              { title: 'Warehousing', desc: 'Storage, palletizing and value-add services.' },
              { title: 'Customs Clearance', desc: 'Documentation and brokerage charges.' }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          </div>

          <p className="mt-8 text-sm text-gray-500">
            Note: Final quotations may vary based on route, seasonality and cargo specifics. Please use the Get Quote form for exact pricing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tariffs;


