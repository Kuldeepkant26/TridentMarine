import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, BarChart3, Search, Filter, TrendingUp, Calendar } from 'lucide-react';

const ReadingsSection = ({ boatId }) => {
  const [readings, setReadings] = useState([
    {
      id: '1',
      type: 'Engine Hours',
      value: 1250,
      unit: 'hours',
      recordedAt: '2024-01-15T10:30:00Z',
      location: 'Main Engine',
      notes: 'Regular reading during maintenance'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Readings</h2>
          <p className="text-gray-600 text-sm sm:text-base">Engine hours, fuel levels, and other measurements</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Reading</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <BarChart3 size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Readings & Measurements</h3>
        <p className="text-gray-600 mb-6">Track engine hours, fuel levels, and other important readings.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ReadingsSection;
