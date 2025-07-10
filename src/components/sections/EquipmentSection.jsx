import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Wrench, Search, Filter, Edit, Trash2, AlertTriangle, CheckCircle } from 'lucide-react';

const EquipmentSection = ({ boatId }) => {
  const [equipment, setEquipment] = useState([
    {
      id: '1',
      name: 'GPS Navigation',
      type: 'Navigation',
      manufacturer: 'Garmin',
      model: 'GPSMAP 8617',
      serialNumber: 'GAR123456789',
      installDate: '2020-01-15',
      lastService: '2023-12-01',
      nextService: '2024-06-01',
      status: 'Working',
      location: 'Bridge'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Equipment</h2>
          <p className="text-gray-600 text-sm sm:text-base">Manage navigation, safety, and other equipment</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Equipment</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <Wrench size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Equipment Management</h3>
        <p className="text-gray-600 mb-6">Track and manage all boat equipment and electronics.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EquipmentSection;
