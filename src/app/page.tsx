import { 
  FileText, 
  Wrench, 
  DollarSign,
  Search,
  UserPlus
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Rents Due This Month */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Rents Due This Month</h3>
            <p className="text-3xl font-bold text-gray-900">$12,500</p>
          </div>

          {/* Payments Received */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Payments Received</h3>
            <p className="text-3xl font-bold text-gray-900">$10,200</p>
          </div>

          {/* Pending Maintenance Requests */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Pending Maintenance Requests</h3>
            <p className="text-3xl font-bold text-gray-900">3</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Lease Agreement Signed */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Lease Agreement Signed</p>
                  <p className="text-sm text-gray-500">Property: 123 Oak Street</p>
                </div>
              </div>

              {/* Rent Payment Received */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Rent Payment Received</p>
                  <p className="text-sm text-gray-500">Tenant: Sarah Miller</p>
                </div>
              </div>

              {/* Maintenance Request Submitted */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Wrench className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Maintenance Request Submitted</p>
                  <p className="text-sm text-gray-500">Property: 456 Pine Avenue</p>
                </div>
              </div>

              {/* Property Inspection Completed */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Property Inspection Completed</p>
                  <p className="text-sm text-gray-500">Property: 789 Maple Drive</p>
                </div>
              </div>

              {/* New Tenant Onboarded */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <UserPlus className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">New Tenant Onboarded</p>
                  <p className="text-sm text-gray-500">Tenant: David Lee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
