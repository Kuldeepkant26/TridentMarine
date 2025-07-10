import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Calendar, MapPin, Ruler } from 'lucide-react';
import Modal from './Modal.jsx';

const AddBoatModal = ({ isOpen, onClose, onAddBoat }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    length: '',
    year: new Date().getFullYear(),
    location: '',
    status: 'Active'
  });

  const [errors, setErrors] = useState({});

  const boatTypes = [
    'Yacht',
    'Sailboat',
    'Speedboat',
    'Catamaran',
    'Motorboat',
    'Fishing Boat',
    'Cruiser',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Boat name is required';
    }
    
    if (!formData.type) {
      newErrors.type = 'Boat type is required';
    }
    
    if (!formData.length.trim()) {
      newErrors.length = 'Length is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Please enter a valid year';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onAddBoat({
        ...formData,
        sections: {}
      });
      
      // Reset form
      setFormData({
        name: '',
        type: '',
        length: '',
        year: new Date().getFullYear(),
        location: '',
        status: 'Active'
      });
      setErrors({});
      onClose();
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Boat"
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Boat Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Boat Name *
          </label>
          <div className="relative">
            <Anchor size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="Enter boat name"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Type and Length Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.type ? 'border-red-300' : 'border-gray-200'
              }`}
            >
              <option value="">Select boat type</option>
              {boatTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Length *
            </label>
            <div className="relative">
              <Ruler size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={formData.length}
                onChange={(e) => handleChange('length', e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.length ? 'border-red-300' : 'border-gray-200'
                }`}
                placeholder="e.g., 65 ft"
              />
            </div>
            {errors.length && <p className="mt-1 text-sm text-red-600">{errors.length}</p>}
          </div>
        </div>

        {/* Year and Status Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Year *
            </label>
            <div className="relative">
              <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={formData.year}
                onChange={(e) => handleChange('year', parseInt(e.target.value))}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.year ? 'border-red-300' : 'border-gray-200'
                }`}
                min="1900"
                max={new Date().getFullYear() + 1}
              />
            </div>
            {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="Active">Active</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location *
          </label>
          <div className="relative">
            <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.location ? 'border-red-300' : 'border-gray-200'
              }`}
              placeholder="e.g., Marina Bay"
            />
          </div>
          {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <motion.button
            type="button"
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-6 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </motion.button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg"
          >
            Add Boat
          </motion.button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBoatModal;
