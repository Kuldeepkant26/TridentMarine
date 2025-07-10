import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, Search, Filter, Edit, Trash2 } from 'lucide-react';

const NotesSection = ({ boatId }) => {
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Maintenance Reminder',
      content: 'Need to schedule engine service next month',
      category: 'Maintenance',
      createdAt: '2024-01-15T10:30:00Z',
      updatedAt: '2024-01-15T10:30:00Z',
      priority: 'Medium',
      tags: ['engine', 'maintenance']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Notes</h2>
          <p className="text-gray-600 text-sm sm:text-base">Keep track of important information and reminders</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Note</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <FileText size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Notes Management</h3>
        <p className="text-gray-600 mb-6">Keep track of important information and reminders.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NotesSection;
