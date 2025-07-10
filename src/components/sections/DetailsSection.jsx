import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Anchor, Clock, AlertTriangle } from 'lucide-react';

const DetailsSection = ({ boat, onUpdateBoat }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { label: 'Type', value: boat.type, icon: Anchor },
    { label: 'Length', value: boat.length, icon: Calendar },
    { label: 'Year', value: boat.year.toString(), icon: Clock },
    { label: 'Location', value: boat.location, icon: MapPin },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{boat.name}</h2>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(boat.status)}`}>
              {boat.status}
            </span>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs sm:text-sm text-gray-600">Added</p>
            <p className="text-base sm:text-lg font-semibold text-gray-900">
              {new Date(boat.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-3 sm:p-4 shadow-sm"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
                  <stat.icon size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Inspection Schedule</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Calendar size={18} className="text-gray-600 sm:w-5 sm:h-5" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Last Inspection</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {boat.lastInspection ? new Date(boat.lastInspection).toLocaleDateString() : 'Not recorded'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <AlertTriangle size={18} className="text-blue-600 sm:w-5 sm:h-5" />
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">Next Maintenance</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {boat.nextMaintenance ? new Date(boat.nextMaintenance).toLocaleDateString() : 'Not scheduled'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 sm:p-4 text-left bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
              <p className="font-medium text-blue-900 text-sm sm:text-base">Schedule Maintenance</p>
              <p className="text-xs sm:text-sm text-blue-600">Plan upcoming service</p>
            </button>
            <button className="w-full p-3 sm:p-4 text-left bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
              <p className="font-medium text-green-900 text-sm sm:text-base">Update Status</p>
              <p className="text-xs sm:text-sm text-green-600">Change operational status</p>
            </button>
            <button className="w-full p-3 sm:p-4 text-left bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
              <p className="font-medium text-purple-900 text-sm sm:text-base">Generate Report</p>
              <p className="text-xs sm:text-sm text-purple-600">Export boat details</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailsSection;
