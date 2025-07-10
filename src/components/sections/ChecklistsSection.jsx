import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Clipboard, Search, Filter, CheckSquare } from 'lucide-react';

const ChecklistsSection = ({ boatId }) => {
  const [checklists, setChecklists] = useState([
    {
      id: '1',
      title: 'Pre-Departure Safety Check',
      category: 'Safety',
      items: [
        { id: '1', description: 'Check life jackets', completed: true, required: true },
        { id: '2', description: 'Test radio communication', completed: false, required: true }
      ],
      lastCompleted: '2024-01-15',
      frequency: 'Before Trip'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Checklists</h2>
          <p className="text-gray-600 text-sm sm:text-base">Safety and operational checklists</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Checklist</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <Clipboard size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Checklist Management</h3>
        <p className="text-gray-600 mb-6">Create and manage safety and operational checklists.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ChecklistsSection;
