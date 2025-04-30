import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, PenTool as Tool } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardBody } from '../components/ui/Card';
import { TOOL_CATEGORIES } from '../data/mockData';

const LendToolPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    depositAmount: '',
    minDays: '',
    maxDays: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to the backend
    navigate('/dashboard');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">List Your Tool</h1>
      
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Tool Image Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="mb-4">
                  <Camera className="h-12 w-12 text-gray-400 mx-auto" />
                </div>
                <div className="space-y-2">
                  <Button
                    type="button"
                    variant="outline"
                    icon={<Upload className="h-4 w-4" />}
                  >
                    Upload Photo
                  </Button>
                  <p className="text-sm text-gray-500">
                    Upload a clear photo of your tool
                  </p>
                </div>
              </div>

              {/* Tool Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tool Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select a category</option>
                  {Object.keys(TOOL_CATEGORIES).map((category) => (
                    <option key={category} value={category}>
                      {category.replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deposit Amount (KES)
                  </label>
                  <input
                    type="number"
                    value={formData.depositAmount}
                    onChange={(e) => setFormData({ ...formData, depositAmount: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="City, Area"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Days
                  </label>
                  <input
                    type="number"
                    value={formData.minDays}
                    onChange={(e) => setFormData({ ...formData, minDays: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Days
                  </label>
                  <input
                    type="number"
                    value={formData.maxDays}
                    onChange={(e) => setFormData({ ...formData, maxDays: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  icon={<Tool className="h-4 w-4" />}
                >
                  List Tool
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LendToolPage;