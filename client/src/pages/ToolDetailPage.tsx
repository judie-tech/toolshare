import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  CreditCard, 
  User, 
  Star, 
  ArrowLeft, 
  Share2,
  Phone,
  MessageCircle,
  Shield,
  Check,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Avatar from '../components/ui/Avatar';
import { TOOL_CATEGORIES } from '../data/mockData';
import * as LucideIcons from 'lucide-react';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tools, requestTool } = useApp();
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [showRequestForm, setShowRequestForm] = useState(false);
  
  const tool = tools.find(t => t.id === id);
  
  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Tool Not Found</h2>
        <p className="mb-6">The tool you're looking for doesn't exist or has been removed.</p>
        <Link to="/tools">
          <Button variant="primary">Browse Other Tools</Button>
        </Link>
      </div>
    );
  }

  // Dynamically get the icon based on the tool category
  const IconComponent = LucideIcons[TOOL_CATEGORIES[tool.category] as keyof typeof LucideIcons];
  const Icon = IconComponent || LucideIcons.Tool;
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  // Calculate total days and deposit
  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  // Handle borrow request
  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate) return;
    
    requestTool(tool.id, new Date(startDate), new Date(endDate));
    setShowRequestForm(false);
  };
  
  // Status display
  const getStatusBadge = () => {
    switch (tool.availabilityStatus) {
      case 'available':
        return <Badge variant="success">Available Now</Badge>;
      case 'borrowed':
        return <Badge variant="warning">Currently Borrowed</Badge>;
      case 'maintenance':
        return <Badge variant="danger">Under Maintenance</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link to="/tools" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Tools
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Tool Image */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative aspect-video">
              <img 
                src={tool.imageUrl} 
                alt={tool.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                {getStatusBadge()}
              </div>
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-full">
                <Icon className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{tool.name}</h1>
                <Button 
                  variant="outline" 
                  size="sm" 
                  icon={<Share2 className="h-4 w-4" />}
                >
                  Share
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  {tool.location.city}, {tool.location.address}
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                  {tool.borrowDuration.min} - {tool.borrowDuration.max} days
                </div>
                <div className="flex items-center text-gray-600">
                  <CreditCard className="h-4 w-4 mr-1 text-gray-400" />
                  {tool.depositAmount} KES deposit
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-1 text-gray-400" />
                  {tool.owner.name}
                </div>
              </div>
              
              <div className="border-t border-b py-4 mb-6">
                <h2 className="text-lg font-semibold mb-3">Description</h2>
                <p className="text-gray-700">{tool.description}</p>
              </div>
              
              <div className="flex flex-col xs:flex-row gap-3">
                <Button 
                  variant={showRequestForm ? 'secondary' : 'primary'} 
                  fullWidth
                  onClick={() => setShowRequestForm(!showRequestForm)}
                  disabled={tool.availabilityStatus !== 'available'}
                >
                  {showRequestForm ? 'Cancel Request' : 'Request to Borrow'}
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Contact Owner
                </Button>
              </div>
              
              {/* Borrow Request Form */}
              {showRequestForm && (
                <div className="mt-6 border-t pt-6 animate-fade-in">
                  <h2 className="text-lg font-semibold mb-4">Borrow Request</h2>
                  <form onSubmit={handleRequestSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <input
                          type="date"
                          id="endDate"
                          className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          min={startDate || new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>
                    
                    {startDate && endDate && (
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{calculateTotalDays()} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deposit:</span>
                          <span className="font-medium">{tool.depositAmount} KES</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-col xs:flex-row gap-3">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth
                        disabled={!startDate || !endDate}
                      >
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right column - Sidebar info */}
        <div>
          {/* Owner information */}
          <Card className="mb-6">
            <CardBody>
              <h2 className="text-lg font-semibold mb-4">Tool Owner</h2>
              <div className="flex items-center mb-4">
                <Avatar 
                  src={tool.owner.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'} 
                  alt={tool.owner.name} 
                  size="lg"
                  className="mr-4"
                />
                <div>
                  <h3 className="font-semibold">{tool.owner.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{tool.owner.rating} Rating</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  fullWidth 
                  icon={<Phone className="h-4 w-4" />}
                >
                  Call Owner
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth 
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  Message
                </Button>
              </div>
            </CardBody>
          </Card>
          
          {/* Deposit information */}
          <Card className="mb-6">
            <CardBody>
              <h2 className="text-lg font-semibold mb-4">Deposit Information</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Security Deposit</h3>
                    <p className="text-gray-600">
                      A refundable deposit of {tool.depositAmount} KES is required to borrow this tool.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Refund Conditions</h3>
                    <p className="text-gray-600">
                      Deposit is fully refunded when the tool is returned on time and in the same condition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium mb-1">Late Returns</h3>
                    <p className="text-gray-600">
                      Late returns may incur additional fees deducted from your deposit.
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          
          {/* USSD Access */}
          <Card>
            <CardBody>
              <h2 className="text-lg font-semibold mb-4">USSD Access</h2>
              <p className="text-sm text-gray-600 mb-4">
                No internet? Access ToolShare via USSD by dialing:
              </p>
              <div className="bg-gray-100 p-3 rounded-md text-center mb-4">
                <p className="font-mono font-bold text-lg">*123*456*789#</p>
              </div>
              <p className="text-sm text-gray-600">
                Use code <span className="font-bold">{tool.id}</span> to reference this specific tool when calling or using USSD.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;