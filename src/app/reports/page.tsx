import { BarChart3, DollarSign, TrendingUp, Download, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Reports() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
            <Download className="h-5 w-5" />
            <span>Export Reports</span>
          </button>
        </div>

        {/* Report Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Financial Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Financial Reports</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Monthly Income Statement</div>
                <div className="text-sm text-gray-500">Revenue and expenses breakdown</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Rent Collection Report</div>
                <div className="text-sm text-gray-500">Payment status and overdue amounts</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Expense Report</div>
                <div className="text-sm text-gray-500">Maintenance and operational costs</div>
              </button>
            </div>
          </div>

          {/* Property Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Property Reports</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Occupancy Report</div>
                <div className="text-sm text-gray-500">Vacancy rates and trends</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Property Performance</div>
                <div className="text-sm text-gray-500">ROI and profitability analysis</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Maintenance Summary</div>
                <div className="text-sm text-gray-500">Request frequency and costs</div>
              </button>
            </div>
          </div>

          {/* Tenant Reports */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900 ml-3">Tenant Reports</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Tenant Turnover</div>
                <div className="text-sm text-gray-500">Lease renewals and departures</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Payment History</div>
                <div className="text-sm text-gray-500">Individual tenant payment records</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="font-medium">Lease Expiration</div>
                <div className="text-sm text-gray-500">Upcoming lease renewals</div>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">$45,300</h3>
            <p className="text-sm text-gray-500">Total Revenue (This Month)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-red-600">$8,750</h3>
            <p className="text-sm text-gray-500">Total Expenses (This Month)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-blue-600">92%</h3>
            <p className="text-sm text-gray-500">Occupancy Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <h3 className="text-2xl font-bold text-purple-600">$36,550</h3>
            <p className="text-sm text-gray-500">Net Profit (This Month)</p>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-900">December 2023 Financial Report</h4>
                    <p className="text-sm text-gray-500">Generated on January 1, 2024</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Download</button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-900">Q4 2023 Occupancy Report</h4>
                    <p className="text-sm text-gray-500">Generated on December 31, 2023</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Download</button>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-900">Annual Maintenance Summary 2023</h4>
                    <p className="text-sm text-gray-500">Generated on December 30, 2023</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Download</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 