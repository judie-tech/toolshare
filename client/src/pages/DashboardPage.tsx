import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, ArrowUpRight, User, PenTool as Tool, Package, ChevronRight, Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';
import LenderDashboard from '../components/dashboard/LenderDashboard';
import UssdSimulator from '../components/ussd/UssdSimulator';

const DashboardPage: React.FC = () => {
  const { tools, loans, currentUser } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'lender' | 'borrower' | 'ussd'>('overview');
  
  // Filter for user stats
  const myTools = tools.filter(tool => tool.owner.id === currentUser.id);
  const myBorrowedTools = loans.filter(loan => loan.borrowerId === currentUser.id && loan.status === 'active');
  const pendingRequests = loans.filter(loan => 
    (myTools.some(t => t.id === loan.toolId) && loan.status === 'pending') || 
    (loan.borrowerId === currentUser.id && loan.status === 'pending')
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
        <Link to="/lend">
          <Button
            variant="primary"
            size="sm"
            icon={<Plus className="h-4 w-4" />}
          >
            List a Tool
          </Button>
        </Link>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardBody className="flex items-center">
            <div className="mr-4 bg-orange-100 p-3 rounded-full">
              <Tool className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">My Listed Tools</p>
              <p className="text-xl font-semibold">{myTools.length}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="flex items-center">
            <div className="mr-4 bg-blue-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Borrows</p>
              <p className="text-xl font-semibold">{myBorrowedTools.length}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="flex items-center">
            <div className="mr-4 bg-yellow-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Requests</p>
              <p className="text-xl font-semibold">{pendingRequests.length}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400 ml-auto" />
          </CardBody>
        </Card>
      </div>
      
      {/* Dashboard Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        <button
          className={`px-4 py-2 flex items-center whitespace-nowrap ${
            activeTab === 'overview'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          <LayoutGrid className="h-4 w-4 mr-2" />
          Overview
        </button>
        
        <button
          className={`px-4 py-2 flex items-center whitespace-nowrap ${
            activeTab === 'lender'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('lender')}
        >
          <Tool className="h-4 w-4 mr-2" />
          Lender Dashboard
        </button>
        
        <button
          className={`px-4 py-2 flex items-center whitespace-nowrap ${
            activeTab === 'borrower'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('borrower')}
        >
          <Package className="h-4 w-4 mr-2" />
          Borrower Dashboard
        </button>
        
        <button
          className={`px-4 py-2 flex items-center whitespace-nowrap ${
            activeTab === 'ussd'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('ussd')}
        >
          <ArrowUpRight className="h-4 w-4 mr-2" />
          USSD Simulator
        </button>
      </div>
      
      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Profile Summary */}
            <Card>
              <CardBody>
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={currentUser.avatar} 
                      alt={currentUser.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{currentUser.name}</h2>
                    <p className="text-gray-600">{currentUser.phoneNumber}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full text-xs">
                        <span className="mr-1">★</span>
                        <span>{currentUser.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">Member since Jan 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-gray-600">
                    {currentUser.location.address}, {currentUser.location.city}
                  </p>
                </div>
                
                <div className="mt-4">
                  <Link to="/profile">
                    <Button
                      variant="outline"
                      fullWidth
                      icon={<User className="h-4 w-4" />}
                    >
                      Edit Profile
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
            
            {/* USSD Simulator Preview */}
            <div>
              <h3 className="font-semibold mb-3">USSD Access</h3>
              <p className="text-gray-600 mb-4">
                Try our USSD simulator to see how users without smartphones can access ToolShare:
              </p>
              <UssdSimulator />
            </div>
          </div>
        )}
        
        {activeTab === 'lender' && (
          <LenderDashboard />
        )}
        
        {activeTab === 'borrower' && (
          <div className="text-center py-12">
            <p className="text-gray-600">Borrower dashboard content will be implemented here.</p>
            <p className="text-sm text-gray-500 mt-2">This feature is coming soon.</p>
          </div>
        )}
        
        {activeTab === 'ussd' && (
          <div className="max-w-md mx-auto">
            <h3 className="font-semibold mb-3">USSD Simulator</h3>
            <p className="text-gray-600 mb-4">
              Test how users interact with ToolShare using USSD codes on basic phones:
            </p>
            <UssdSimulator />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;