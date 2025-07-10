import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Settings, Search, Filter, Calendar, AlertTriangle, CheckCircle, Clock, DollarSign } from 'lucide-react';
import Modal from '../Modal.jsx';

const MaintenanceSection = ({ boatId }) => {
  const [maintenanceRecords, setMaintenanceRecords] = useState([
    {
      id: '1',
      type: 'Engine Service',
      description: 'Regular engine maintenance and oil change',
      date: '2024-01-15',
      cost: 1200,
      status: 'Completed',
      technician: 'John Smith',
      priority: 'Medium',
      nextDue: '2024-07-15'
    },
    {
      id: '2',
      type: 'Hull Cleaning',
      description: 'Bottom paint and hull cleaning',
      date: '2024-02-01',
      cost: 800,
      status: 'Pending',
      technician: 'Marine Services Inc',
      priority: 'Low',
      nextDue: '2024-08-01'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    date: '',
    cost: '',
    status: 'Pending',
    technician: '',
    priority: 'Medium',
    nextDue: ''
  });

  const statusOptions = ['Pending', 'In Progress', 'Completed'];
  const priorityOptions = ['Low', 'Medium', 'High', 'Critical'];

  const handleAddRecord = (e) => {
    e.preventDefault();
    const newRecord = {
      ...formData,
      id: Date.now().toString(),
      cost: parseFloat(formData.cost) || 0,
    };
    setMaintenanceRecords([...maintenanceRecords, newRecord]);
    resetForm();
    setIsAddModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      type: '',
      description: '',
      date: '',
      cost: '',
      status: 'Pending',
      technician: '',
      priority: 'Medium',
      nextDue: ''
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRecords = maintenanceRecords.filter(record => {
    const matchesSearch = record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || record.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Maintenance Records</h2>
          <p className="text-gray-600 text-sm sm:text-base">Track maintenance history and schedule future work</p>
        </div>
        <motion.button
          onClick={() => setIsAddModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <Plus size={18} />
          <span>Add Record</span>
        </motion.button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search maintenance records..."
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
            {statusOptions.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {filteredRecords.map((record, index) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{record.type}</h3>
                    <p className="text-gray-600 mt-1">{record.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(record.priority)}`}>
                      {record.priority}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-medium text-gray-900">{new Date(record.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign size={16} className="text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Cost</p>
                      <p className="font-medium text-gray-900">${record.cost.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings size={16} className="text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Technician</p>
                      <p className="font-medium text-gray-900">{record.technician}</p>
                    </div>
                  </div>
                  {record.nextDue && (
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Next Due</p>
                        <p className="font-medium text-gray-900">{new Date(record.nextDue).toLocaleDateString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-12">
          <Settings size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No maintenance records found</h3>
          <p className="text-gray-600 mb-6">Add your first maintenance record to get started.</p>
          <motion.button
            onClick={() => setIsAddModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add Record
          </motion.button>
        </div>
      )}

      {/* Add Record Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => { setIsAddModalOpen(false); resetForm(); }} 
        title="Add Maintenance Record"
        size="lg"
      >
        <form onSubmit={handleAddRecord} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance Type *</label>
              <input
                type="text"
                required
                value={formData.type}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Engine Service, Hull Cleaning"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Detailed description of maintenance work"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cost</label>
              <input
                type="number"
                step="0.01"
                value={formData.cost}
                onChange={(e) => handleInputChange('cost', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => handleInputChange('priority', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {priorityOptions.map(priority => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technician</label>
              <input
                type="text"
                value={formData.technician}
                onChange={(e) => handleInputChange('technician', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Technician or company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Next Due Date</label>
              <input
                type="date"
                value={formData.nextDue}
                onChange={(e) => handleInputChange('nextDue', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              Add Record
            </motion.button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MaintenanceSection;
