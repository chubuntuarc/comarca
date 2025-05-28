import { FileText, Calendar, User, MapPin, DollarSign, Plus, Search, Filter, AlertTriangle } from 'lucide-react';
import Navigation from '@/components/Navigation';

const leases = [
  {
    id: 1,
    tenant: 'Sarah Miller',
    property: '123 Oak Street',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    monthlyRent: 2500,
    securityDeposit: 2500,
    status: 'Active',
    daysUntilExpiry: 335
  },
  {
    id: 2,
    tenant: 'David Lee',
    property: '789 Maple Drive',
    startDate: '2023-06-15',
    endDate: '2024-06-14',
    monthlyRent: 1800,
    securityDeposit: 1800,
    status: 'Expiring Soon',
    daysUntilExpiry: 45
  },
  {
    id: 3,
    tenant: 'Emily Johnson',
    property: '567 Cedar Lane',
    startDate: '2024-02-01',
    endDate: '2025-01-31',
    monthlyRent: 2200,
    securityDeposit: 2200,
    status: 'Active',
    daysUntilExpiry: 365
  },
  {
    id: 4,
    tenant: 'Michael Brown',
    property: '890 Birch Street',
    startDate: '2023-09-01',
    endDate: '2024-08-31',
    monthlyRent: 2800,
    securityDeposit: 2800,
    status: 'Active',
    daysUntilExpiry: 213
  },
  {
    id: 5,
    tenant: 'Jessica Wilson',
    property: '456 Pine Avenue',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    monthlyRent: 3200,
    securityDeposit: 3200,
    status: 'Expired',
    daysUntilExpiry: -15
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800';
    case 'Expiring Soon':
      return 'bg-yellow-100 text-yellow-800';
    case 'Expired':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function Leases() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leases</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="h-5 w-5" />
            <span>New Lease</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leases..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Leases List */}
        <div className="space-y-6">
          {leases.map((lease) => (
            <div key={lease.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Lease Agreement #{lease.id}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {lease.tenant}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {lease.property}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {lease.status === 'Expiring Soon' && (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  )}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(lease.status)}`}>
                    {lease.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-gray-500">Lease Period:</span>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">
                      {new Date(lease.startDate).toLocaleDateString()} - {new Date(lease.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Monthly Rent:</span>
                  <div className="flex items-center mt-1">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">${lease.monthlyRent.toLocaleString()}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Security Deposit:</span>
                  <div className="flex items-center mt-1">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="font-medium">${lease.securityDeposit.toLocaleString()}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Days Until Expiry:</span>
                  <div className="mt-1">
                    <span className={`font-medium ${
                      lease.daysUntilExpiry < 0 
                        ? 'text-red-600' 
                        : lease.daysUntilExpiry < 60 
                        ? 'text-yellow-600' 
                        : 'text-green-600'
                    }`}>
                      {lease.daysUntilExpiry < 0 ? `Expired ${Math.abs(lease.daysUntilExpiry)} days ago` : `${lease.daysUntilExpiry} days`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                  View Details
                </button>
                {lease.status === 'Expiring Soon' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Renew Lease
                  </button>
                )}
                {lease.status === 'Expired' && (
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-700">
                    Create New Lease
                  </button>
                )}
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Edit
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{leases.length}</h3>
            <p className="text-sm text-gray-500">Total Leases</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">
              {leases.filter(l => l.status === 'Active').length}
            </h3>
            <p className="text-sm text-gray-500">Active Leases</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-600">
              {leases.filter(l => l.status === 'Expiring Soon').length}
            </h3>
            <p className="text-sm text-gray-500">Expiring Soon</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">
              ${leases.filter(l => l.status === 'Active').reduce((sum, l) => sum + l.monthlyRent, 0).toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">Monthly Revenue</p>
          </div>
        </div>
      </main>
    </div>
  );
} 