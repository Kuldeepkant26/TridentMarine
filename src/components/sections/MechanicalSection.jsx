import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Settings, Search, Filter, Edit, Trash2, Wrench, AlertTriangle, CheckCircle } from 'lucide-react';
import Modal from '../Modal.jsx';

const MechanicalSection = ({ boatId }) => {
  const [mechanicalSystems, setMechanicalSystems] = useState([
    {
      id: '1',
      name: 'Main Engine',
      type: 'Engine',
      manufacturer: 'Caterpillar',
      model: 'C32 ACERT',
      serialNumber: 'CAT123456789',
      installDate: '2020-01-15',
      lastService: '2024-01-10',
      nextService: '2024-07-10',
      status: 'Working',
      location: 'Engine Room'
    },
    {
      id: '2',
      name: 'Generator',
      type: 'Generator',
      manufacturer: 'Onan',
      model: '15MDKD',
      serialNumber: 'ON987654321',
      installDate: '2020-02-01',
      lastService: '2023-12-20',
      nextService: '2024-06-20',
      status: 'Working',
      location: 'Engine Room'
    },
    {
      id: '3',
      name: 'Bow Thruster',
      type: 'Thruster',
      manufacturer: 'Side-Power',
      model: 'SP240',
      serialNumber: 'SP456789123',
      installDate: '2020-03-15',
      lastService: '2023-11-15',
      nextService: '2024-05-15',
      status: 'Needs Service',
      location: 'Bow Compartment'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSystem, setEditingSystem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Engine',
    manufacturer: '',
    model: '',
    serialNumber: '',
    installDate: '',
    lastService: '',
    nextService: '',
    status: 'Working',
    location: ''
  });

  const systemTypes = ['Engine', 'Generator', 'Thruster', 'Pump', 'Compressor', 'Hydraulic', 'Other'];
  const statusOptions = ['Working', 'Needs Service', 'Out of Order'];

  const handleAddSystem = (e) => {
    e.preventDefault();
    const newSystem = {
      ...formData,
      id: Date.now().toString(),
    };
    setMechanicalSystems([...mechanicalSystems, newSystem]);
    resetForm();
    setIsAddModalOpen(false);
  };

  const handleEditSystem = (e) => {
    e.preventDefault();
    setMechanicalSystems(mechanicalSystems.map(system => 
      system.id === editingSystem.id ? { ...formData, id: editingSystem.id } : system
    ));
    resetForm();
    setIsEditModalOpen(false);
    setEditingSystem(null);
  };

  const handleDeleteSystem = (systemId) => {
    setMechanicalSystems(mechanicalSystems.filter(system => system.id !== systemId));
  };

  const openEditModal = (system) => {
    setEditingSystem(system);
    setFormData(system);
    setIsEditModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'Engine',
      manufacturer: '',
      model: '',
      serialNumber: '',
      installDate: '',
      lastService: '',
      nextService: '',
      status: 'Working',
      location: ''
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Working': return 'bg-green-100 text-green-800';
      case 'Needs Service': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Order': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Working': return CheckCircle;
      case 'Needs Service': return AlertTriangle;
      case 'Out of Order': return AlertTriangle;
      default: return Settings;
    }
  };

  const filteredSystems = mechanicalSystems.filter(system => {
    const matchesSearch = system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         system.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || system.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Mechanical Systems</h2>
          <p className="text-gray-600 text-sm sm:text-base">Manage engines, generators, and mechanical equipment</p>
        </div>
        <motion.button
          onClick={() => setIsAddModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add System</span>
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search mechanical systems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Status</option>
            <option value="Working">Working</option>
            <option value="Needs Service">Needs Service</option>
            <option value="Out of Order">Out of Order</option>
          </select>
        </div>
      </div>

      {/* Systems Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSystems.map((system, index) => {
          const StatusIcon = getStatusIcon(system.status);
          return (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Wrench size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{system.name}</h3>
                    <p className="text-sm text-gray-600">{system.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(system.status)}`}>
                    <StatusIcon size={12} />
                    <span>{system.status}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Manufacturer</p>
                    <p className="font-medium text-gray-900">{system.manufacturer}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Model</p>
                    <p className="font-medium text-gray-900">{system.model}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Last Service</p>
                    <p className="font-medium text-gray-900">{new Date(system.lastService).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next Service</p>
                    <p className="font-medium text-gray-900">{new Date(system.nextService).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">{system.location}</p>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t border-gray-100">
                <button 
                  onClick={() => openEditModal(system)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => handleDeleteSystem(system.id)}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredSystems.length === 0 && (
        <div className="text-center py-12">
          <Wrench size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No mechanical systems found</h3>
          <p className="text-gray-600 mb-6">Add your first mechanical system to get started.</p>
          <motion.button
            onClick={() => setIsAddModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add System
          </motion.button>
        </div>
      )}

      {/* Add System Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); resetForm(); }} 
        title="Add Mechanical System"
        size="lg"
      >
        <form onSubmit={handleAddSystem} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">System Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Main Engine"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {systemTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
              <input
                type="text"
                value={formData.manufacturer}
                onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Caterpillar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., C32 ACERT"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
              <input
                type="text"
                value={formData.serialNumber}
                onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., CAT123456789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Install Date</label>
              <input
                type="date"
                value={formData.installDate}
                onChange={(e) => handleInputChange('installDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Service</label>
              <input
                type="date"
                value={formData.lastService}
                onChange={(e) => handleInputChange('lastService', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Next Service</label>
              <input
                type="date"
                value={formData.nextService}
                onChange={(e) => handleInputChange('nextService', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Engine Room"
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
              Add System
            </motion.button>
          </div>
        </form>
      </Modal>

      {/* Edit System Modal */}
      <Modal 
        isOpen={isEditModalOpen} 
        onClose={() => { setIsEditModalOpen(false); setEditingSystem(null); resetForm(); }} 
        title="Edit Mechanical System"
        size="lg"
      >
        <form onSubmit={handleEditSystem} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">System Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Main Engine"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {systemTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
              <input
                type="text"
                value={formData.manufacturer}
                onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Caterpillar"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., C32 ACERT"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
              <input
                type="text"
                value={formData.serialNumber}
                onChange={(e) => handleInputChange('serialNumber', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., CAT123456789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Install Date</label>
              <input
                type="date"
                value={formData.installDate}
                onChange={(e) => handleInputChange('installDate', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Service</label>
              <input
                type="date"
                value={formData.lastService}
                onChange={(e) => handleInputChange('lastService', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Next Service</label>
              <input
                type="date"
                value={formData.nextService}
                onChange={(e) => handleInputChange('nextService', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Engine Room"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => { setIsEditModalOpen(false); setEditingSystem(null); resetForm(); }}
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
              Update System
            </motion.button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MechanicalSection;
