import { Wrench, AlertTriangle, Clock, CheckCircle, Plus, Search, Filter, MapPin, User, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';

const maintenanceRequests = [
  {
    id: 1,
    title: 'Leaky Faucet in Kitchen',
    description: 'Kitchen faucet has been dripping constantly for the past week.',
    property: '456 Pine Avenue',
    tenant: 'John Smith',
    priority: 'Medium',
    status: 'In Progress',
    dateSubmitted: '2024-01-15',
    assignedTo: 'Mike Johnson - Plumber',
    estimatedCost: 150
  },
  {
    id: 2,
    title: 'Broken Air Conditioning',
    description: 'AC unit stopped working completely. No cold air coming out.',
    property: '123 Oak Street',
    tenant: 'Sarah Miller',
    priority: 'High',
    status: 'Pending',
    dateSubmitted: '2024-01-14',
    assignedTo: null,
    estimatedCost: 500
  },
  {
    id: 3,
    title: 'Squeaky Door Hinges',
    description: 'Front door hinges are very squeaky and need lubrication.',
    property: '789 Maple Drive',
    tenant: 'David Lee',
    priority: 'Low',
    status: 'Completed',
    dateSubmitted: '2024-01-10',
    assignedTo: 'Tom Wilson - Handyman',
    estimatedCost: 50
  },
  {
    id: 4,
    title: 'Clogged Bathroom Drain',
    description: 'Bathroom sink drain is completely blocked.',
    property: '321 Elm Street',
    tenant: 'Emily Johnson',
    priority: 'High',
    status: 'Pending',
    dateSubmitted: '2024-01-16',
    assignedTo: null,
    estimatedCost: 200
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-800';
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'Low':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'In Progress':
      return 'bg-blue-100 text-blue-800';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed':
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case 'In Progress':
      return <Clock className="h-5 w-5 text-blue-600" />;
    case 'Pending':
      return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
    default:
      return <Clock className="h-5 w-5 text-gray-600" />;
  }
};

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Maintenance</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="h-5 w-5" />
            <span>New Request</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search maintenance requests..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Maintenance Requests */}
        <div className="space-y-6">
          {maintenanceRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(request.status)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{request.title}</h3>
                    <p className="text-gray-600 mt-1">{request.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(request.priority)}`}>
                    {request.priority} Priority
                  </span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Property:</span>
                  <div className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">{request.property}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Tenant:</span>
                  <div className="flex items-center mt-1">
                    <User className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">{request.tenant}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Date Submitted:</span>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">{new Date(request.dateSubmitted).toLocaleDateString()}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Estimated Cost:</span>
                  <div className="mt-1">
                    <span className="font-medium">${request.estimatedCost}</span>
                  </div>
                </div>
              </div>

              {request.assignedTo && (
                <div className="mb-4">
                  <span className="text-gray-500 text-sm">Assigned to:</span>
                  <div className="flex items-center mt-1">
                    <Wrench className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium text-sm">{request.assignedTo}</span>
                  </div>
                </div>
              )}

              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                  View Details
                </button>
                {request.status === 'Pending' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Assign Worker
                  </button>
                )}
                {request.status === 'In Progress' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Mark Complete
                  </button>
                )}
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{maintenanceRequests.length}</h3>
            <p className="text-sm text-gray-500">Total Requests</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-600">
              {maintenanceRequests.filter(r => r.status === 'Pending').length}
            </h3>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">
              {maintenanceRequests.filter(r => r.status === 'In Progress').length}
            </h3>
            <p className="text-sm text-gray-500">In Progress</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">
              {maintenanceRequests.filter(r => r.status === 'Completed').length}
            </h3>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
        </div>
      </main>
    </div>
  );
} 