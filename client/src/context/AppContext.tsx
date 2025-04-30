import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tool, Loan, Notification, User, FilterOptions } from '../types';
import { mockTools, mockLoans, mockNotifications, currentUser } from '../data/mockData';

interface AppContextType {
  tools: Tool[];
  filteredTools: Tool[];
  loans: Loan[];
  notifications: Notification[];
  currentUser: User;
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
  markNotificationAsRead: (id: string) => void;
  requestTool: (toolId: string, startDate: Date, endDate: Date) => void;
  approveLoan: (loanId: string) => void;
  returnTool: (loanId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>(mockTools);
  const [loans, setLoans] = useState<Loan[]>(mockLoans);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({});

  // Filter tools based on options
  const filteredTools = tools.filter(tool => {
    let matches = true;
    
    if (filterOptions.category && filterOptions.category !== 'other') {
      matches = matches && tool.category === filterOptions.category;
    }
    
    if (filterOptions.location) {
      matches = matches && (
        tool.location.city.toLowerCase().includes(filterOptions.location.toLowerCase()) ||
        tool.location.address.toLowerCase().includes(filterOptions.location.toLowerCase())
      );
    }
    
    if (filterOptions.availability) {
      matches = matches && tool.availabilityStatus === 'available';
    }
    
    if (filterOptions.searchQuery) {
      const query = filterOptions.searchQuery.toLowerCase();
      matches = matches && (
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
      );
    }
    
    return matches;
  });

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const requestTool = (toolId: string, startDate: Date, endDate: Date) => {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;

    const newLoan: Loan = {
      id: `loan${loans.length + 1}`,
      toolId,
      borrowerId: currentUser.id,
      startDate,
      endDate,
      status: 'pending',
      depositPaid: false,
      depositAmount: tool.depositAmount
    };

    setLoans(prev => [...prev, newLoan]);

    // Create notification for tool owner
    const newNotification: Notification = {
      id: `notif${notifications.length + 1}`,
      type: 'loan_request',
      message: `${currentUser.name} has requested to borrow your ${tool.name}`,
      date: new Date(),
      read: false,
      relatedId: newLoan.id
    };

    setNotifications(prev => [...prev, newNotification]);
  };

  const approveLoan = (loanId: string) => {
    setLoans(prev => 
      prev.map(loan => 
        loan.id === loanId ? { ...loan, status: 'active', depositPaid: true } : loan
      )
    );

    const loan = loans.find(l => l.id === loanId);
    if (!loan) return;

    const tool = tools.find(t => t.id === loan.toolId);
    if (!tool) return;

    // Update tool availability
    setTools(prev => 
      prev.map(t => 
        t.id === loan.toolId ? { ...t, availabilityStatus: 'borrowed' } : t
      )
    );

    // Create notification for borrower
    const newNotification: Notification = {
      id: `notif${notifications.length + 1}`,
      type: 'loan_approved',
      message: `Your request to borrow ${tool.name} has been approved`,
      date: new Date(),
      read: false,
      relatedId: loanId
    };

    setNotifications(prev => [...prev, newNotification]);
  };

  const returnTool = (loanId: string) => {
    setLoans(prev => 
      prev.map(loan => 
        loan.id === loanId ? { ...loan, status: 'returned' } : loan
      )
    );

    const loan = loans.find(l => l.id === loanId);
    if (!loan) return;

    const tool = tools.find(t => t.id === loan.toolId);
    if (!tool) return;

    // Update tool availability
    setTools(prev => 
      prev.map(t => 
        t.id === loan.toolId ? { ...t, availabilityStatus: 'available' } : t
      )
    );

    // Create notification for tool owner
    const newNotification: Notification = {
      id: `notif${notifications.length + 1}`,
      type: 'return_confirmed',
      message: `${currentUser.name} has returned your ${tool.name}`,
      date: new Date(),
      read: false,
      relatedId: loanId
    };

    setNotifications(prev => [...prev, newNotification]);
  };

  return (
    <AppContext.Provider
      value={{
        tools,
        filteredTools,
        loans,
        notifications,
        currentUser,
        filterOptions,
        setFilterOptions,
        markNotificationAsRead,
        requestTool,
        approveLoan,
        returnTool
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};