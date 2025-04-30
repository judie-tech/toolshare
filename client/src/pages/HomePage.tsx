import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool as Tool, Search, Phone, AlertCircle, CreditCard, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import ToolCatalog from '../components/tools/ToolCatalog';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Share Tools, <br />Build Communities
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Access tools you need without the cost of ownership. 
                Borrow from your community or lend your own tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tools">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    icon={<Search className="h-5 w-5" />}
                  >
                    Find Tools
                  </Button>
                </Link>
                <Link to="/lend">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 border-white"
                    icon={<Share2 className="h-5 w-5" />}
                  >
                    Lend Your Tools
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6 flex items-center text-orange-100">
                <Phone className="h-5 w-5 mr-2" />
                <p>
                  Access via USSD: Dial <span className="font-bold">*123*456#</span> on any phone
                </p>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3">
                <img 
                  src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Tools collection" 
                  className="rounded-md w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-lg shadow-xl transform -rotate-6">
                <img 
                  src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person using tools" 
                  className="rounded-md w-48 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How ToolShare Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Borrow and lend tools with your community through our web platform 
              or via USSD on any mobile phone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-full mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Tools</h3>
              <p className="text-gray-600">
                Browse our catalog of available tools or search via USSD.
                Filter by category, location, and availability.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Deposit</h3>
              <p className="text-gray-600">
                Pay a small deposit via airtime as security. This is
                refunded when you return the tool in good condition.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Borrow &amp; Return</h3>
              <p className="text-gray-600">
                Pick up the tool from the owner and use it for the agreed duration.
                Return on time to maintain a good user rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Tools</h2>
            <Link to="/tools" className="text-orange-600 hover:text-orange-700 font-medium">
              View All →
            </Link>
          </div>
          
          <ToolCatalog />
        </div>
      </section>

      {/* USSD Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Access ToolShare via USSD</h2>
              <p className="text-xl mb-6 text-blue-100">
                No smartphone? No problem! Access ToolShare from any 
                mobile phone by dialing *123*456# to:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <p>Search for available tools near you</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <p>List your tools for others to borrow</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <p>Manage your loans and payments</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 mr-3">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <p>Pay deposits using airtime credit</p>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white p-2 rounded-xl shadow-xl max-w-xs">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="bg-black rounded-t-lg py-2 px-4 flex justify-between items-center">
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                    <div className="h-1 w-16 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-600"></div>
                  </div>
                  <div className="bg-white p-4 font-mono text-black text-sm">
                    <p className="mb-2 font-bold text-center">ToolShare</p>
                    <p className="text-center text-xs mb-3">-------------</p>
                    <p>1. Search for tools</p>
                    <p>2. View my borrowed tools</p>
                    <p>3. List my tool</p>
                    <p>4. Check deposit status</p>
                    <p>5. Help</p>
                    <p className="mt-3 text-xs text-gray-600">Enter option:</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 bg-gray-900 p-2 rounded-b-lg">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
                      <div 
                        key={num} 
                        className="bg-gray-800 text-white text-center rounded-full h-8 w-8 flex items-center justify-center mx-auto text-sm"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Share or Borrow?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of tool sharers today and get access to the tools you 
            need without the cost of ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tools">
              <Button 
                variant="primary" 
                size="lg"
              >
                Browse Tools
              </Button>
            </Link>
            <Link to="/ussd">
              <Button 
                variant="outline" 
                size="lg"
              >
                Try USSD Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;