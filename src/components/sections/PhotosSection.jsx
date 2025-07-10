import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Camera, Search, Filter, Edit, Trash2, Download } from 'lucide-react';

const PhotosSection = ({ boatId }) => {
  const [photos, setPhotos] = useState([
    {
      id: '1',
      title: 'Before Maintenance',
      url: '/api/placeholder/300/200',
      category: 'Maintenance',
      description: 'Engine before service',
      uploadedAt: '2024-01-15T10:30:00Z',
      tags: ['engine', 'before']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Photos</h2>
          <p className="text-gray-600 text-sm sm:text-base">Visual documentation and photo gallery</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Upload Photo</span>
        </motion.button>
      </div>

      <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
        <Camera size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Photo Gallery</h3>
        <p className="text-gray-600 mb-6">Upload and organize photos for documentation.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PhotosSection;
