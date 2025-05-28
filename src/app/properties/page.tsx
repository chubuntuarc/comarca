import { Building, MapPin, DollarSign, Users, Plus, Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';

const properties = [
  {
    id: 1,
    address: '123 Oak Street',
    city: 'San Francisco, CA',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 1,
    rent: 2500,
    status: 'Occupied',
    tenant: 'Sarah Miller',
    image: '/api/placeholder/300/200'
  },
  {
    id: 2,
    address: '456 Pine Avenue',
    city: 'San Francisco, CA',
    type: 'House',
    bedrooms: 3,
    bathrooms: 2,
    rent: 3200,
    status: 'Vacant',
    tenant: null,
    image: '/api/placeholder/300/200'
  },
  {
    id: 3,
    address: '789 Maple Drive',
    city: 'San Francisco, CA',
    type: 'Condo',
    bedrooms: 1,
    bathrooms: 1,
    rent: 1800,
    status: 'Occupied',
    tenant: 'David Lee',
    image: '/api/placeholder/300/200'
  },
  {
    id: 4,
    address: '321 Elm Street',
    city: 'San Francisco, CA',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    rent: 2800,
    status: 'Maintenance',
    tenant: null,
    image: '/api/placeholder/300/200'
  }
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="h-5 w-5" />
            <span>Add Property</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Property Image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Building className="h-16 w-16 text-gray-400" />
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{property.address}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    property.status === 'Occupied' 
                      ? 'bg-green-100 text-green-800'
                      : property.status === 'Vacant'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {property.status}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.city}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Type:</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Bedrooms:</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Bathrooms:</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Rent:</span>
                    <span className="font-medium flex items-center">
                      <DollarSign className="h-4 w-4" />
                      {property.rent.toLocaleString()}/month
                    </span>
                  </div>
                  {property.tenant && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Tenant:</span>
                      <span className="font-medium flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {property.tenant}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm hover:bg-gray-50">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">{properties.length}</h3>
            <p className="text-sm text-gray-500">Total Properties</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">
              {properties.filter(p => p.status === 'Occupied').length}
            </h3>
            <p className="text-sm text-gray-500">Occupied</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-yellow-600">
              {properties.filter(p => p.status === 'Vacant').length}
            </h3>
            <p className="text-sm text-gray-500">Vacant</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600">
              {properties.filter(p => p.status === 'Maintenance').length}
            </h3>
            <p className="text-sm text-gray-500">Maintenance</p>
          </div>
        </div>
      </main>
    </div>
  );
} 