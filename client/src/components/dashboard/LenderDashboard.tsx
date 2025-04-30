import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Card, { CardHeader, CardBody } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Calendar, Check, X, Clock, ArrowRight, PenTool as ToolIcon } from 'lucide-react';
import { Loan, Tool } from '../../types';

const LenderDashboard: React.FC = () => {
  const { tools, loans, approveLoan } = useApp();
  const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'history'>('active');
  
  // Filter tools owned by current user
  const myTools = tools.filter(tool => tool.owner.id === 'user1');
  
  // Get loans related to user's tools
  const myToolIds = myTools.map(tool => tool.id);
  const filteredLoans = loans.filter(loan => myToolIds.includes(loan.toolId));
  
  // Filter loans based on active tab
  const activeLoans = filteredLoans.filter(loan => loan.status === 'active');
  const pendingLoans = filteredLoans.filter(loan => loan.status === 'pending');
  const completedLoans = filteredLoans.filter(loan => loan.status === 'returned');
  
  // Helper to get tool by ID
  const getToolById = (id: string): Tool | undefined => {
    return tools.find(tool => tool.id === id);
  };
  
  // Format date
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Render loan card
  const renderLoanCard = (loan: Loan) => {
    const tool = getToolById(loan.toolId);
    if (!tool) return null;
    
    return (
      <Card className="mb-4" key={loan.id}>
        <CardBody>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <ToolIcon className="mr-2 h-5 w-5 text-gray-500" />
                <h3 className="font-semibold text-lg">{tool.name}</h3>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Calendar className="mr-1 h-4 w-4" />
                <span>
                  {formatDate(loan.startDate)} - {formatDate(loan.endDate)}
                </span>
              </div>
              
              <div className="mb-2">
                {loan.status === 'active' && (
                  <Badge variant="secondary">Active Loan</Badge>
                )}
                {loan.status === 'pending' && (
                  <Badge variant="warning">Pending Approval</Badge>
                )}
                {loan.status === 'returned' && (
                  <Badge variant="success">Returned</Badge>
                )}
                {loan.status === 'overdue' && (
                  <Badge variant="danger">Overdue</Badge>
                )}
              </div>
              
              <div className="text-sm">
                <span className="font-medium">Deposit: </span>
                <span className={loan.depositPaid ? 'text-green-600' : 'text-red-600'}>
                  {loan.depositAmount} KES ({loan.depositPaid ? 'Paid' : 'Unpaid'})
                </span>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0">
              {loan.status === 'pending' && (
                <div className="flex space-x-2">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<Check className="h-4 w-4" />}
                    onClick={() => approveLoan(loan.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    icon={<X className="h-4 w-4" />}
                  >
                    Decline
                  </Button>
                </div>
              )}
              
              {loan.status === 'active' && (
                <Button
                  variant="outline"
                  size="sm"
                  icon={<Clock className="h-4 w-4" />}
                >
                  Send Reminder
                </Button>
              )}
              
              {loan.status === 'returned' && (
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  View Details
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Lender Dashboard</h2>
      
      {/* Tool Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardBody className="text-center">
            <h3 className="text-gray-500 text-sm font-medium mb-1">My Tools</h3>
            <p className="text-3xl font-bold text-gray-900">{myTools.length}</p>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="text-center">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Active Loans</h3>
            <p className="text-3xl font-bold text-gray-900">{activeLoans.length}</p>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="text-center">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Pending Requests</h3>
            <p className="text-3xl font-bold text-gray-900">{pendingLoans.length}</p>
          </CardBody>
        </Card>
      </div>
      
      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'active'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('active')}
        >
          Active Loans ({activeLoans.length})
        </button>
        
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'pending'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('pending')}
        >
          Pending Requests ({pendingLoans.length})
        </button>
        
        <button
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'history'
              ? 'border-b-2 border-orange-500 text-orange-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('history')}
        >
          Loan History
        </button>
      </div>
      
      {/* Active tab content */}
      <div>
        {activeTab === 'active' && (
          <div>
            {activeLoans.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>You don't have any active loans.</p>
              </div>
            ) : (
              activeLoans.map(loan => renderLoanCard(loan))
            )}
          </div>
        )}
        
        {activeTab === 'pending' && (
          <div>
            {pendingLoans.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>You don't have any pending loan requests.</p>
              </div>
            ) : (
              pendingLoans.map(loan => renderLoanCard(loan))
            )}
          </div>
        )}
        
        {activeTab === 'history' && (
          <div>
            {completedLoans.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>You don't have any loan history yet.</p>
              </div>
            ) : (
              completedLoans.map(loan => renderLoanCard(loan))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LenderDashboard;