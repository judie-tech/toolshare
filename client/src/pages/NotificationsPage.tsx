import React from 'react';
import { 
  BellRing, 
  MailOpen, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  CreditCard 
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';

const NotificationsPage: React.FC = () => {
  const { notifications, markNotificationAsRead } = useApp();
  
  // Sort notifications by date (newest first)
  const sortedNotifications = [...notifications].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Format date
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Get icon based on notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'loan_request':
        return <BellRing className="h-5 w-5 text-blue-600" />;
      case 'loan_approved':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'loan_rejected':
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'return_reminder':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'return_confirmed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'deposit_received':
        return <CreditCard className="h-5 w-5 text-purple-600" />;
      default:
        return <BellRing className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <Button
          variant="outline"
          size="sm"
          icon={<MailOpen className="h-4 w-4" />}
        >
          Mark All as Read
        </Button>
      </div>
      
      {sortedNotifications.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-400 rounded-full mb-4">
            <BellRing className="h-8 w-8" />
          </div>
          <h2 className="text-lg font-medium text-gray-900 mb-2">No Notifications</h2>
          <p className="text-gray-600">
            You don't have any notifications yet. They will appear here when you
            receive them.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedNotifications.map(notification => (
            <Card 
              key={notification.id}
              className={notification.read ? 'opacity-75' : 'border-l-4 border-l-blue-500'}
            >
              <CardBody>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className={`mb-1 ${notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                        {notification.message}
                      </p>
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                          onClick={() => markNotificationAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {formatDate(notification.date)}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;