import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, Search, Filter, Mail, Phone } from 'lucide-react';

const CrewSection = ({ boatId }) => {
  const [crew, setCrew] = useState([
    {
      id: '1',
      name: 'Captain John Smith',
      role: 'Captain',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      experience: 15,
      certifications: ['Master License', 'STCW'],
      joinDate: '2020-01-15',
      status: 'Active'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Crew</h2>
          <p className="text-gray-600 text-sm sm:text-base">Manage crew members and their information</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Crew Member</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <Users size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Crew Management</h3>
        <p className="text-gray-600 mb-6">Manage your boat's crew members and their details.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CrewSection;
