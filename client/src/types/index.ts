export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  imageUrl: string;
  owner: {
    id: string;
    name: string;
    rating: number;
  };
  location: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  availabilityStatus: 'available' | 'borrowed' | 'maintenance';
  depositAmount: number;
  borrowDuration: {
    min: number;
    max: number;
  };
}

export type ToolCategory = 
  | 'electronics'
  | 'power-tools'
  | 'kitchen'
  | '3d-printing'
  | 'photography'
  | 'computing'
  | 'gardening'
  | 'crafting'
  | 'office'
  | 'other';

export interface Loan {
  id: string;
  toolId: string;
  borrowerId: string;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'active' | 'returned' | 'overdue' | 'cancelled';
  depositPaid: boolean;
  depositAmount: number;
}

export interface Notification {
  id: string;
  type: 'loan_request' | 'loan_approved' | 'loan_rejected' | 'return_reminder' | 'return_confirmed' | 'deposit_received';
  message: string;
  date: Date;
  read: boolean;
  relatedId?: string; // Can be a toolId or loanId
}

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  avatar: string;
  rating: number;
  location: {
    address: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export interface FilterOptions {
  category?: ToolCategory;
  location?: string;
  availability?: boolean;
  searchQuery?: string;
  maxDistance?: number;
}