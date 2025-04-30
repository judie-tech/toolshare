import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CreditCard } from 'lucide-react';
import { Tool } from '../../types';
import Card, { CardBody, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import { TOOL_CATEGORIES } from '../../data/mockData';
import * as LucideIcons from 'lucide-react';

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  // Dynamically get the icon based on the tool category
  const IconComponent = LucideIcons[TOOL_CATEGORIES[tool.category] as keyof typeof LucideIcons];
  const Icon = IconComponent || LucideIcons.Tool;

  // Status display
  const getStatusBadge = () => {
    switch (tool.availabilityStatus) {
      case 'available':
        return <Badge variant="success">Available</Badge>;
      case 'borrowed':
        return <Badge variant="warning">Borrowed</Badge>;
      case 'maintenance':
        return <Badge variant="danger">Maintenance</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card 
      hover 
      className="h-full flex flex-col"
    >
      <Link to={`/tools/${tool.id}`} className="block flex-grow">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={tool.imageUrl} 
            alt={tool.name} 
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-0 right-0 m-2">
            {getStatusBadge()}
          </div>
          <div className="absolute top-0 left-0 m-2 bg-white bg-opacity-90 p-2 rounded-full">
            <Icon className="h-6 w-6 text-orange-600" />
          </div>
        </div>
        <CardBody className="flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">{tool.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{tool.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            <span>{tool.location.city}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1 text-gray-400" />
            <span>
              {tool.borrowDuration.min} - {tool.borrowDuration.max} days
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <CreditCard className="h-4 w-4 mr-1 text-gray-400" />
            <span>
              {tool.depositAmount} KES deposit
            </span>
          </div>
        </CardBody>
      </Link>
      
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-xs font-medium mr-1">Owner:</div>
          <div className="text-sm font-semibold">{tool.owner.name}</div>
        </div>
        <div className="flex items-center">
          <div className="text-sm font-medium bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">
            ★ {tool.owner.rating.toFixed(1)}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;