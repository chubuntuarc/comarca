import { User, Mail, Phone, MapPin, Calendar, DollarSign, Plus, Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';

const tenants = [
  {
    id: 1,
    name: 'Sarah Miller',
    email: 'sarah.miller@email.com',
    phone: '(555) 123-4567',
    property: '123 Oak Street',
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    rent: 2500,
    paymentStatus: 'Paid',
    lastPayment: '2024-01-01'
  },
  {
    id: 2,
    name: 'David Lee',
    email: 'david.lee@email.com',
    phone: '(555) 987-6543',
    property: '789 Maple Drive',
    leaseStart: '2023-06-15',
    leaseEnd: '2024-06-14',
    rent: 1800,
    paymentStatus: 'Overdue',
    lastPayment: '2023-12-01'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'emily.johnson@email.com',
    phone: '(555) 456-7890',
    property: '567 Cedar Lane',
    leaseStart: '2024-02-01',
    leaseEnd: '2025-01-31',
    rent: 2200,
    paymentStatus: 'Paid',
    lastPayment: '2024-01-01'
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '(555) 321-0987',
    property: '890 Birch Street',
    leaseStart: '2023-09-01',
    leaseEnd: '2024-08-31',
    rent: 2800,
    paymentStatus: 'Due Soon',
    lastPayment: '2023-12-01'
  }
];

export default function Tenants() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tenants</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="h-5 w-5" />
            <span>Add Tenant</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tenants..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Tenants List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Tenants</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {tenants.map((tenant) => (
              <div key={tenant.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{tenant.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1" />
                          {tenant.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {tenant.phone}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      tenant.paymentStatus === 'Paid' 
                        ? 'bg-green-100 text-green-800'
                        : tenant.paymentStatus === 'Overdue'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {tenant.paymentStatus}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Property:</span>
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="font-medium">{tenant.property}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Lease Period:</span>
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="font-medium">
                        {new Date(tenant.leaseStart).toLocaleDateString()} - {new Date(tenant.leaseEnd).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Monthly Rent:</span>
                    <div className="flex items-center mt-1">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="font-medium">${tenant.rent.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-500">Last Payment:</span>
                    <div className="mt-1">
                      <span className="font-medium">{new Date(tenant.lastPayment).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                    Send Message
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                    Payment History
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{tenants.length}</h3>
            <p className="text-sm text-gray-500">Total Tenants</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">
              {tenants.filter(t => t.paymentStatus === 'Paid').length}
            </h3>
            <p className="text-sm text-gray-500">Payments Up to Date</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600">
              {tenants.filter(t => t.paymentStatus === 'Overdue').length}
            </h3>
            <p className="text-sm text-gray-500">Overdue Payments</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">
              ${tenants.reduce((sum, t) => sum + t.rent, 0).toLocaleString()}
            </h3>
            <p className="text-sm text-gray-500">Total Monthly Rent</p>
          </div>
        </div>
      </main>
    </div>
  );
} 