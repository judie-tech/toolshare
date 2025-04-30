import React from 'react';
import { 
  Search, 
  User, 
  CreditCard, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  RefreshCw, 
  Star,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How ToolShare Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            ToolShare connects people who need tools with those who have them, 
            making resource sharing simple and accessible.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-12 text-center">The ToolShare Process</h2>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-orange-100 text-orange-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <Search className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-orange-100 text-orange-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold">Find the tools you need</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Browse our catalog of available tools. Filter by category, 
                    location, and availability to find exactly what you need. 
                    No internet? Use USSD by dialing *123*456# to access the same tools.
                  </p>
                  <div className="flex space-x-4">
                    <div className="flex-1 rounded-lg border p-4 bg-gray-50">
                      <h4 className="font-semibold text-sm mb-2">Web Access</h4>
                      <p className="text-sm text-gray-600">
                        Browse the full catalog with photos, detailed descriptions, 
                        and reviews from other borrowers.
                      </p>
                    </div>
                    <div className="flex-1 rounded-lg border p-4 bg-gray-50">
                      <h4 className="font-semibold text-sm mb-2">USSD Access</h4>
                      <p className="text-sm text-gray-600">
                        Dial *123*456# from any phone to browse tools by category 
                        and location, no internet needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <User className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold">Request to borrow</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Submit a borrow request with your preferred dates. The owner will receive your 
                    request and can approve or suggest alternative dates. Communication happens via 
                    SMS, so everyone stays informed.
                  </p>
                  <div className="rounded-lg border p-4 bg-gray-50">
                    <h4 className="font-semibold text-sm mb-2">Request Process</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Select your preferred borrowing dates</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Submit borrow request (web or USSD)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Owner receives notification</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Both parties get SMS confirmations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <CreditCard className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 text-green-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold">Pay security deposit</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Once your request is approved, pay a small, refundable security deposit using 
                    airtime credit. This ensures that both parties are committed to taking care of 
                    the tools and following through with the agreement.
                  </p>
                  <div className="rounded-lg border p-4 bg-gray-50">
                    <h4 className="font-semibold text-sm mb-2">Deposit Process</h4>
                    <p className="text-sm text-gray-600">
                      Deposits are collected via airtime micro-payments:
                    </p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Receive SMS with payment instructions</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Send airtime via USSD code</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Both parties get deposit confirmation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-purple-100 text-purple-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-purple-100 text-purple-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold">Coordinate pickup</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Arrange a time and place to meet with the tool owner. You'll both receive 
                    contact details to coordinate the handover. We recommend meeting in public 
                    places for safety.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4 bg-gray-50">
                      <h4 className="font-semibold text-sm mb-2">Communication</h4>
                      <p className="text-sm text-gray-600">
                        Direct calls/SMS between borrower and lender for easy coordination.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4 bg-gray-50">
                      <h4 className="font-semibold text-sm mb-2">Safety Tips</h4>
                      <p className="text-sm text-gray-600">
                        Meet in public places and verify tool condition before taking possession.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-yellow-100 text-yellow-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-100 text-yellow-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold">Use and return the tool</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Use the tool for your agreed period. You'll receive SMS reminders before 
                    the return date. Return the tool in the same condition to get your deposit back.
                  </p>
                  <div className="rounded-lg border p-4 bg-gray-50">
                    <h4 className="font-semibold text-sm mb-2">Return Process</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-yellow-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Receive return reminder SMS one day before due date</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-yellow-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Coordinate return with owner</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 text-yellow-600 mt-0.5 mr-1 flex-shrink-0" />
                        <span>Owner confirms return and tool condition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 6 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-red-100 text-red-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto">
                    <RefreshCw className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center mb-2">
                    <div className="bg-red-100 text-red-600 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold">6</span>
                    </div>
                    <h3 className="text-xl font-semibold">Get deposit back & rate experience</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Once the tool is returned, you'll receive your deposit back via airtime credit. 
                    Both parties rate each other to build trust in the community.
                  </p>
                  <div className="rounded-lg border p-4 bg-gray-50">
                    <h4 className="font-semibold text-sm mb-2">Rating System</h4>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="ml-2">Rate your experience</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Higher ratings lead to better borrowing privileges and increased trust 
                      from the community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USSD Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">USSD Access Guide</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-semibold">Accessing ToolShare Without Internet</h3>
                <p className="text-blue-100">
                  Use these USSD codes from any phone to access ToolShare services.
                </p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      Basic USSD Commands
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="bg-blue-100 text-blue-600 font-mono px-3 py-1 rounded mr-3">
                          *123*456#
                        </div>
                        <div className="text-sm text-gray-600">
                          Main menu
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-blue-100 text-blue-600 font-mono px-3 py-1 rounded mr-3">
                          *123*456*1#
                        </div>
                        <div className="text-sm text-gray-600">
                          Browse tools by category
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-blue-100 text-blue-600 font-mono px-3 py-1 rounded mr-3">
                          *123*456*2#
                        </div>
                        <div className="text-sm text-gray-600">
                          View borrowed tools
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-blue-100 text-blue-600 font-mono px-3 py-1 rounded mr-3">
                          *123*456*3#
                        </div>
                        <div className="text-sm text-gray-600">
                          List a tool for lending
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
                      SMS Commands
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex">
                        <div className="bg-green-100 text-green-600 font-mono px-3 py-1 rounded mr-3">
                          FIND [item]
                        </div>
                        <div className="text-sm text-gray-600">
                          Search for a specific tool
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-green-100 text-green-600 font-mono px-3 py-1 rounded mr-3">
                          BORROW [id]
                        </div>
                        <div className="text-sm text-gray-600">
                          Request to borrow a tool
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-green-100 text-green-600 font-mono px-3 py-1 rounded mr-3">
                          STATUS
                        </div>
                        <div className="text-sm text-gray-600">
                          Check your borrows/loans
                        </div>
                      </li>
                      <li className="flex">
                        <div className="bg-green-100 text-green-600 font-mono px-3 py-1 rounded mr-3">
                          HELP
                        </div>
                        <div className="text-sm text-gray-600">
                          Get help and instructions
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                  <p className="font-semibold mb-2">Note:</p>
                  <p>
                    All SMS commands should be sent to <span className="font-mono bg-gray-200 px-1 rounded">12345</span>. 
                    Standard SMS rates apply. No internet or data charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="font-semibold mb-2">How secure is the deposit system?</h3>
                <p className="text-gray-600">
                  Deposits are securely held and automatically refunded when tools are returned in 
                  good condition. The airtime deposit system uses encrypted transactions and is 
                  backed by our service guarantee.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="font-semibold mb-2">What if the tool is damaged during my borrowing period?</h3>
                <p className="text-gray-600">
                  If a tool is damaged, you should notify the owner immediately. Depending on the extent 
                  of damage, a portion of your deposit may be kept to cover repairs. In cases of serious 
                  damage, additional charges may apply.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="font-semibold mb-2">How do I know the tools are in good condition?</h3>
                <p className="text-gray-600">
                  Tool owners are required to verify tool condition before listing. We recommend inspecting 
                  tools before borrowing and reporting any pre-existing issues immediately. Our rating system 
                  helps identify reliable lenders.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="font-semibold mb-2">What if I need to extend my borrowing period?</h3>
                <p className="text-gray-600">
                  Contact the owner directly or use the USSD code *123*456*2# to request an extension. The 
                  owner will need to approve any extensions, and you may need to pay an additional deposit 
                  for the extended period.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border p-4">
                <h3 className="font-semibold mb-2">Can I lend multiple tools at once?</h3>
                <p className="text-gray-600">
                  Yes! You can list as many tools as you'd like to share with your community. Each tool 
                  will have its own listing and can be borrowed independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sharing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of tool sharers today and help build a 
            more resourceful and connected community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tools">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Browse Tools
              </Button>
            </Link>
            <Link to="/lend">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-blue-700"
              >
                Lend Your Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;