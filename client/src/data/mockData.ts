import { Tool, Loan, Notification, User, ToolCategory } from '../types';

// Categories with icons
export const TOOL_CATEGORIES: { [key in ToolCategory]: string } = {
  'electronics': 'Laptop',
  'power-tools': 'Hammer',
  'kitchen': 'Utensils',
  '3d-printing': 'Printer',
  'photography': 'Camera',
  'computing': 'Monitor',
  'gardening': 'Shovel',
  'crafting': 'Scissors',
  'office': 'FileText',
  'other': 'Tool'
};

export const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'John Maker',
    phoneNumber: '+2547123456789',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.8,
    location: {
      address: '123 Tech Street',
      city: 'Nairobi',
      coordinates: { lat: -1.292066, lng: 36.821945 }
    }
  },
  {
    id: 'user2',
    name: 'Maria Builder',
    phoneNumber: '+2547987654321',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.5,
    location: {
      address: '456 Maker Avenue',
      city: 'Mombasa',
      coordinates: { lat: -4.043477, lng: 39.658871 }
    }
  },
  {
    id: 'user3',
    name: 'David Tech',
    phoneNumber: '+2547456123789',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    rating: 4.9,
    location: {
      address: '789 Innovation Road',
      city: 'Kisumu',
      coordinates: { lat: -0.102410, lng: 34.761810 }
    }
  }
];

export const mockTools: Tool[] = [
  {
    id: 'tool1',
    name: 'MacBook Pro 16"',
    category: 'computing',
    description: 'Powerful laptop for software development and graphic design tasks. 16GB RAM, 512GB SSD.',
    imageUrl: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user1',
      name: 'John Maker',
      rating: 4.8
    },
    location: {
      address: '123 Tech Street',
      city: 'Nairobi',
      coordinates: { lat: -1.292066, lng: 36.821945 }
    },
    availabilityStatus: 'available',
    depositAmount: 5000,
    borrowDuration: { min: 1, max: 7 }
  },
  {
    id: 'tool2',
    name: 'Creality Ender 3 3D Printer',
    category: '3d-printing',
    description: 'Desktop 3D printer, perfect for prototyping and small batch production.',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user2',
      name: 'Maria Builder',
      rating: 4.5
    },
    location: {
      address: '456 Maker Avenue',
      city: 'Mombasa',
      coordinates: { lat: -4.043477, lng: 39.658871 }
    },
    availabilityStatus: 'borrowed',
    depositAmount: 3000,
    borrowDuration: { min: 1, max: 5 }
  },
  {
    id: 'tool3',
    name: 'Canon EOS 5D Mark IV',
    category: 'photography',
    description: 'Professional DSLR camera with 24-70mm lens, ideal for high-quality photography and videography.',
    imageUrl: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user3',
      name: 'David Tech',
      rating: 4.9
    },
    location: {
      address: '789 Innovation Road',
      city: 'Kisumu',
      coordinates: { lat: -0.102410, lng: 34.761810 }
    },
    availabilityStatus: 'available',
    depositAmount: 4000,
    borrowDuration: { min: 1, max: 3 }
  },
  {
    id: 'tool4',
    name: 'DeWalt Cordless Drill Set',
    category: 'power-tools',
    description: '20V Max cordless drill with multiple bits and two batteries. Perfect for construction and DIY projects.',
    imageUrl: 'https://images.pexels.com/photos/2062058/pexels-photo-2062058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user1',
      name: 'John Maker',
      rating: 4.8
    },
    location: {
      address: '123 Tech Street',
      city: 'Nairobi',
      coordinates: { lat: -1.292066, lng: 36.821945 }
    },
    availabilityStatus: 'maintenance',
    depositAmount: 2000,
    borrowDuration: { min: 1, max: 7 }
  },
  {
    id: 'tool5',
    name: 'Kitchen Aid Stand Mixer',
    category: 'kitchen',
    description: 'Professional stand mixer for baking and cooking needs. Includes multiple attachments.',
    imageUrl: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user2',
      name: 'Maria Builder',
      rating: 4.5
    },
    location: {
      address: '456 Maker Avenue',
      city: 'Mombasa',
      coordinates: { lat: -4.043477, lng: 39.658871 }
    },
    availabilityStatus: 'available',
    depositAmount: 2500,
    borrowDuration: { min: 1, max: 5 }
  },
  {
    id: 'tool6',
    name: 'Microsoft Surface Pro',
    category: 'computing',
    description: 'Versatile tablet laptop combo with stylus. Great for digital art, note-taking, and office work.',
    imageUrl: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    owner: {
      id: 'user3',
      name: 'David Tech',
      rating: 4.9
    },
    location: {
      address: '789 Innovation Road',
      city: 'Kisumu',
      coordinates: { lat: -0.102410, lng: 34.761810 }
    },
    availabilityStatus: 'available',
    depositAmount: 3500,
    borrowDuration: { min: 1, max: 7 }
  }
];

export const mockLoans: Loan[] = [
  {
    id: 'loan1',
    toolId: 'tool2',
    borrowerId: 'user1',
    startDate: new Date('2025-01-15'),
    endDate: new Date('2025-01-20'),
    status: 'active',
    depositPaid: true,
    depositAmount: 3000
  },
  {
    id: 'loan2',
    toolId: 'tool4',
    borrowerId: 'user3',
    startDate: new Date('2025-01-10'),
    endDate: new Date('2025-01-17'),
    status: 'returned',
    depositPaid: true,
    depositAmount: 2000
  },
  {
    id: 'loan3',
    toolId: 'tool1',
    borrowerId: 'user2',
    startDate: new Date('2025-01-25'),
    endDate: new Date('2025-01-28'),
    status: 'pending',
    depositPaid: false,
    depositAmount: 5000
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'notif1',
    type: 'loan_request',
    message: 'John Maker has requested to borrow your MacBook Pro',
    date: new Date('2025-01-14T08:30:00'),
    read: false,
    relatedId: 'loan3'
  },
  {
    id: 'notif2',
    type: 'return_reminder',
    message: 'Reminder: The DeWalt Drill Set is due for return tomorrow',
    date: new Date('2025-01-16T10:15:00'),
    read: true,
    relatedId: 'loan2'
  },
  {
    id: 'notif3',
    type: 'deposit_received',
    message: 'Deposit of 3000 KES received for Canon EOS 5D Mark IV',
    date: new Date('2025-01-15T14:45:00'),
    read: false,
    relatedId: 'loan1'
  }
];

export const currentUser: User = mockUsers[0];