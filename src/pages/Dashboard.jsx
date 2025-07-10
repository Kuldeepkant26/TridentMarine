import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';
import { 
  Plus, Anchor, Settings, Wrench, Clipboard, 
  Users, FileText, Camera, Folder, UserCircle, 
  BarChart3, Menu, X, Bell, Search, ArrowLeft
} from 'lucide-react';
import Modal from '../components/Modal.jsx';
import AddBoatModal from '../components/AddBoatModal.jsx';
import DetailsSection from '../components/sections/DetailsSection.jsx';
import MaintenanceSection from '../components/sections/MaintenanceSection.jsx';
import InventorySection from '../components/sections/InventorySection.jsx';
import CrewSection from '../components/sections/CrewSection.jsx';
import EquipmentSection from '../components/sections/EquipmentSection.jsx';
import ChecklistsSection from '../components/sections/ChecklistsSection.jsx';
import ContactsSection from '../components/sections/ContactsSection.jsx';
import NotesSection from '../components/sections/NotesSection.jsx';
import PhotosSection from '../components/sections/PhotosSection.jsx';
import DocumentsSection from '../components/sections/DocumentsSection.jsx';
import ReadingsSection from '../components/sections/ReadingsSection.jsx';
import MechanicalSection from '../components/sections/MechanicalSection.jsx';

function Dashboard() {
  const navigate = useNavigate();
  
  const [boats, setBoats] = useState([
    {
      id: '1',
      name: 'Ocean Explorer',
      type: 'Yacht',
      length: '65 ft',
      year: 2020,
      location: 'Marina Bay',
      status: 'Active',
      lastInspection: '2024-01-15',
      nextMaintenance: '2024-03-15',
      createdAt: '2024-01-01T00:00:00Z',
      sections: {}
    },
    {
      id: '2',
      name: 'Sea Breeze',
      type: 'Sailboat',
      length: '42 ft',
      year: 2018,
      location: 'Harbor Point',
      status: 'Maintenance',
      lastInspection: '2024-01-10',
      nextMaintenance: '2024-02-20',
      createdAt: '2024-01-05T00:00:00Z',
      sections: {}
    },
    {
      id: '3',
      name: 'Wave Runner',
      type: 'Speedboat',
      length: '28 ft',
      year: 2022,
      location: 'Sunset Marina',
      status: 'Active',
      lastInspection: '2024-01-20',
      nextMaintenance: '2024-04-01',
      createdAt: '2024-01-10T00:00:00Z',
      sections: {}
    }
  ]);

  const [selectedBoatId, setSelectedBoatId] = useState(boats[0]?.id || null);
  const [activeSection, setActiveSection] = useState('Details');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start closed on mobile
  const [isAddBoatModalOpen, setIsAddBoatModalOpen] = useState(false);

  const sections = [
    { name: 'Details', icon: BarChart3 },
    { name: 'Mechanical', icon: Settings },
    { name: 'Equipment', icon: Wrench },
    { name: 'Maintenance', icon: Settings },
    { name: 'Inventory', icon: Clipboard },
    { name: 'Checklists', icon: Clipboard },
    { name: 'Contacts', icon: Users },
    { name: 'Notes', icon: FileText },
    { name: 'Photos', icon: Camera },
    { name: 'Documents', icon: Folder },
    { name: 'Crew', icon: UserCircle },
    { name: 'Readings', icon: BarChart3 },
  ];

  const selectedBoat = boats.find(boat => boat.id === selectedBoatId);

  const addBoat = (boatData) => {
    const newBoat = {
      ...boatData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setBoats([...boats, newBoat]);
    setSelectedBoatId(newBoat.id);
  };

  const updateBoat = (updatedBoat) => {
    setBoats(boats.map(boat => boat.id === updatedBoat.id ? updatedBoat : boat));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Maintenance': return 'bg-yellow-500';
      case 'Inactive': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const renderSectionContent = () => {
    if (!selectedBoat) return null;

    switch (activeSection) {
      case 'Details':
        return <DetailsSection boat={selectedBoat} onUpdateBoat={updateBoat} />;
      case 'Mechanical':
        return <MechanicalSection boatId={selectedBoat.id} />;
      case 'Equipment':
        return <EquipmentSection boatId={selectedBoat.id} />;
      case 'Maintenance':
        return <MaintenanceSection boatId={selectedBoat.id} />;
      case 'Inventory':
        return <InventorySection boatId={selectedBoat.id} />;
      case 'Checklists':
        return <ChecklistsSection boatId={selectedBoat.id} />;
      case 'Contacts':
        return <ContactsSection boatId={selectedBoat.id} />;
      case 'Notes':
        return <NotesSection boatId={selectedBoat.id} />;
      case 'Photos':
        return <PhotosSection boatId={selectedBoat.id} />;
      case 'Documents':
        return <DocumentsSection boatId={selectedBoat.id} />;
      case 'Crew':
        return <CrewSection boatId={selectedBoat.id} />;
      case 'Readings':
        return <ReadingsSection boatId={selectedBoat.id} />;
      default:
        return (
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-sm border border-gray-100">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench size={20} className="text-gray-400 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{activeSection} Management</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Configure and manage {activeSection.toLowerCase()} for {selectedBoat.name}
            </p>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm sm:text-base">
              Get Started
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 flex">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside 
        className={`
          fixed lg:relative top-0 left-0 h-full z-50 lg:z-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-80 lg:w-80 xl:w-96 bg-white border-r border-gray-200 
          transition-transform duration-300 ease-in-out lg:transition-none
          flex flex-col shadow-lg lg:shadow-none
        `}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              animate={{ opacity: 1 }}
            >
              <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-blue-100 rounded-xl hover:bg-blue-200 transition-colors"
                title="Go back"
              >
                <ArrowLeft size={20} className="text-blue-600 sm:w-6 sm:h-6" />
              </motion.button>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Marine Dashboard</h1>
                <p className="text-xs sm:text-sm text-gray-500">Fleet Management</p>
              </div>
            </motion.div>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Add Boat Button */}
        <div className="p-4">
          <motion.button
            onClick={() => setIsAddBoatModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base"
          >
            <Plus size={18} />
            <span className="font-medium">Add New Boat</span>
          </motion.button>
        </div>

        {/* Fleet List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">My Fleet</h3>
              <span className="text-xs sm:text-sm text-gray-500">{boats.length} boats</span>
            </div>
            
            <div className="space-y-2">
              <AnimatePresence>
                {boats.map((boat, index) => (
                  <motion.div
                    key={boat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setSelectedBoatId(boat.id);
                      setIsSidebarOpen(false); // Close sidebar on mobile after selection
                    }}
                    className={`p-3 sm:p-4 rounded-xl cursor-pointer transition-all ${
                      selectedBoatId === boat.id
                        ? 'bg-blue-50 border-2 border-blue-200'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Anchor size={16} className="text-blue-600 sm:w-5 sm:h-5" />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${getStatusColor(boat.status)} rounded-full border-2 border-white`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate text-sm sm:text-base">{boat.name}</p>
                        <p className="text-xs sm:text-sm text-gray-500">{boat.type} • {boat.length}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          {selectedBoat && (
            <div className="border-t border-gray-100 p-4">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Sections</h4>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.button
                      key={section.name}
                      onClick={() => {
                        setActiveSection(section.name);
                        setIsSidebarOpen(false); // Close sidebar on mobile after selection
                      }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                        activeSection === section.name
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{section.name}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto w-full lg:w-auto">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                {selectedBoat ? (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{selectedBoat.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{activeSection} Management</p>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Marine Dashboard</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Select a boat to get started</p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="relative hidden sm:block">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-32 sm:w-48"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell size={18} className="text-gray-600" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 lg:p-8">
          {selectedBoat ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderSectionContent()}
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 sm:py-20"
            >
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Anchor size={24} className="text-blue-600 sm:w-8 sm:h-8" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Welcome to Marine Dashboard</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
                Manage your fleet with precision. Track maintenance, inventory, crew, and more all in one place.
              </p>
              <motion.button
                onClick={() => setIsAddBoatModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base"
              >
                Add Your First Boat
              </motion.button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Add Boat Modal */}
      <AddBoatModal
        isOpen={isAddBoatModalOpen}
        onClose={() => setIsAddBoatModalOpen(false)}
        onAddBoat={addBoat}
      />
    </div>
  );
}

export default Dashboard;
