import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Package, Search, Filter, AlertTriangle, Edit, Trash2 } from 'lucide-react';
import Modal from '../Modal.jsx';

const InventorySection = ({ boatId }) => {
  const [inventory, setInventory] = useState([
    {
      id: '1',
      name: 'Life Jackets',
      category: 'Safety',
      quantity: 12,
      minQuantity: 8,
      location: 'Safety Locker',
      lastUpdated: '2024-01-15',
      supplier: 'Marine Safety Co.',
      cost: 45.99
    },
    {
      id: '2',
      name: 'Engine Oil',
      category: 'Maintenance',
      quantity: 6,
      minQuantity: 10,
      location: 'Engine Room',
      lastUpdated: '2024-01-10',
      supplier: 'Marine Parts Plus',
      cost: 29.99
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Safety',
    quantity: '',
    minQuantity: '',
    location: '',
    supplier: '',
    cost: ''
  });

  const categories = ['Safety', 'Maintenance', 'Navigation', 'Cleaning', 'Food', 'Medical', 'Other'];

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      id: Date.now().toString(),
      quantity: parseInt(formData.quantity) || 0,
      minQuantity: parseInt(formData.minQuantity) || 0,
      cost: parseFloat(formData.cost) || 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    setInventory([...inventory, newItem]);
    resetForm();
    setIsAddModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Safety',
      quantity: '',
      minQuantity: '',
      location: '',
      supplier: '',
      cost: ''
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isLowStock = (item) => item.quantity <= item.minQuantity;

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Inventory</h2>
          <p className="text-gray-600 text-sm sm:text-base">Track supplies, spare parts, and equipment</p>
        </div>
        <motion.button
          onClick={() => setIsAddModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Item</span>
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-2xl p-6 shadow-sm border-2 transition-all ${
              isLowStock(item) ? 'border-red-200 bg-red-50' : 'border-gray-100'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${isLowStock(item) ? 'bg-red-100' : 'bg-blue-100'}`}>
                  <Package size={20} className={isLowStock(item) ? 'text-red-600' : 'text-blue-600'} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
              {isLowStock(item) && (
                <AlertTriangle size={20} className="text-red-500" />
              )}
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Quantity</span>
                <span className={`font-medium ${isLowStock(item) ? 'text-red-600' : 'text-gray-900'}`}>
                  {item.quantity} / {item.minQuantity} min
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Location</span>
                <span className="font-medium text-gray-900">{item.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Cost</span>
                <span className="font-medium text-gray-900">${item.cost}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Last Updated</span>
                <span className="font-medium text-gray-900">{new Date(item.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Edit size={16} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredInventory.length === 0 && (
        <div className="text-center py-12">
          <Package size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No inventory items found</h3>
          <p className="text-gray-600 mb-6">Add your first inventory item to get started.</p>
          <motion.button
            onClick={() => setIsAddModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add Item
          </motion.button>
        </div>
      )}

      {/* Add Item Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); resetForm(); }} 
        title="Add Inventory Item"
        size="lg"
      >
        <form onSubmit={handleAddItem} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Item Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Life Jackets"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Quantity *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.quantity}
                onChange={(e) => handleInputChange('quantity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Quantity *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.minQuantity}
                onChange={(e) => handleInputChange('minQuantity', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Safety Locker"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Supplier</label>
              <input
                type="text"
                value={formData.supplier}
                onChange={(e) => handleInputChange('supplier', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Marine Safety Co."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cost per Unit</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={formData.cost}
                onChange={(e) => handleInputChange('cost', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => { setIsAddModalOpen(false); resetForm(); }}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Add Item
            </motion.button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default InventorySection;
