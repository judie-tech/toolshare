import React, { useState } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { Send, RotateCcw } from 'lucide-react';

const UssdSimulator: React.FC = () => {
  const [ussdSession, setUssdSession] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [menu, setMenu] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const startUssdSession = () => {
    const initialMenu = `
ToolShare
-------------
1. Search for tools
2. View my borrowed tools
3. List my tool
4. Check deposit status
5. Help
    `;
    setUssdSession([initialMenu]);
    setMenu('main');
    setHistory([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user input to history
    setHistory(prev => [...prev, input]);
    
    // Process response based on current menu and input
    let response = '';
    
    if (menu === 'main') {
      switch (input) {
        case '1':
          response = `
Search for tools
-------------
1. Electronics
2. Power tools
3. Office equipment
4. Photography
5. Computing
6. Other
0. Back
          `;
          setMenu('category');
          break;
        case '2':
          response = `
Your borrowed tools:
-------------
1. MacBook Pro (3 days left)
2. DSLR Camera (overdue)

0. Back
          `;
          setMenu('borrowed');
          break;
        case '3':
          response = `
List your tool
-------------
Enter tool name:
0. Back
          `;
          setMenu('list-name');
          break;
        case '4':
          response = `
Deposit Status
-------------
Total held: 7,000 KES
Pending return: 5,000 KES

0. Back
          `;
          setMenu('deposit');
          break;
        case '5':
          response = `
Help Center
-------------
Call 0712 345 678 for
assistance with ToolShare.

SMS "HELP" to 12345 for
more information.

0. Back
          `;
          setMenu('help');
          break;
        default:
          response = 'Invalid option. Please try again.';
          break;
      }
    } else if (menu === 'category') {
      if (input === '0') {
        // Go back to main menu
        response = ussdSession[0];
        setMenu('main');
      } else if (['1', '2', '3', '4', '5', '6'].includes(input)) {
        response = `
Available Tools:
-------------
1. Laptop (Nairobi) - 500/day
2. Drill (Mombasa) - 200/day
3. Printer (Kisumu) - 300/day

Enter number to request:
0. Back
        `;
        setMenu('search-results');
      } else {
        response = 'Invalid option. Please try again.';
      }
    } else if (menu === 'search-results') {
      if (input === '0') {
        // Go back
        response = ussdSession[ussdSession.length - 2];
        setMenu('category');
      } else if (['1', '2', '3'].includes(input)) {
        response = `
Request sent!
-------------
The owner will be notified.
Deposit: 3,000 KES

You will receive SMS 
confirmation soon.

1. Main Menu
        `;
        setMenu('confirmation');
      } else {
        response = 'Invalid option. Please try again.';
      }
    } else if (menu === 'confirmation' || menu === 'borrowed' || menu === 'deposit' || menu === 'help') {
      if (input === '0' || input === '1') {
        response = ussdSession[0];
        setMenu('main');
      } else {
        response = 'Invalid option. Please try again.';
      }
    } else if (menu === 'list-name') {
      if (input === '0') {
        response = ussdSession[0];
        setMenu('main');
      } else {
        response = `
Tool: "${input}"
-------------
Enter category:
1. Electronics
2. Power tools
3. Office
4. Photography
5. Computing
6. Other

0. Back
        `;
        setMenu('list-category');
      }
    } else if (menu === 'list-category') {
      if (input === '0') {
        response = ussdSession[ussdSession.length - 2];
        setMenu('list-name');
      } else if (['1', '2', '3', '4', '5', '6'].includes(input)) {
        response = `
Enter deposit amount in KES:
(minimum 1000)

0. Back
        `;
        setMenu('list-deposit');
      } else {
        response = 'Invalid option. Please try again.';
      }
    } else if (menu === 'list-deposit') {
      if (input === '0') {
        response = ussdSession[ussdSession.length - 2];
        setMenu('list-category');
      } else {
        const amount = parseInt(input);
        if (isNaN(amount) || amount < 1000) {
          response = 'Invalid amount. Minimum is 1000 KES.';
        } else {
          response = `
Tool listed successfully!
-------------
Your tool is now available
for borrowing.

You'll get SMS notifications
when someone requests it.

1. Main Menu
        `;
        setMenu('confirmation');
        }
      }
    }
    
    setUssdSession(prev => [...prev, response]);
    setInput('');
  };

  const resetSession = () => {
    setUssdSession([]);
    setInput('');
    setMenu(null);
    setHistory([]);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="bg-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-semibold">USSD Simulator</h3>
        <div className="flex items-center space-x-1 text-xs text-gray-500">
          <span className="bg-green-500 h-2.5 w-2.5 rounded-full inline-block"></span>
          <span>*#12345*</span>
        </div>
      </CardHeader>
      
      <CardBody className="h-96 overflow-y-auto bg-gray-50 font-mono text-sm">
        {ussdSession.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="mb-4">Press "Start Session" to simulate a USSD session</p>
            <Button 
              variant="primary" 
              onClick={startUssdSession}
            >
              Start Session
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {ussdSession.map((message, index) => (
              <div key={index} className="pb-2">
                {index > 0 && (
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded mb-2 inline-block">
                    User input: {history[index - 1]}
                  </div>
                )}
                <pre className="whitespace-pre-wrap bg-white p-3 rounded border border-gray-200">
                  {message}
                </pre>
              </div>
            ))}
          </div>
        )}
      </CardBody>
      
      <CardFooter className="border-t">
        {ussdSession.length > 0 && (
          <form onSubmit={handleSubmit} className="w-full flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter response..."
              maxLength={2}
            />
            <Button
              type="submit"
              variant="primary"
              className="px-3"
              icon={<Send className="h-4 w-4" />}
            >
              Send
            </Button>
            <Button
              type="button"
              variant="outline"
              className="px-3"
              icon={<RotateCcw className="h-4 w-4" />}
              onClick={resetSession}
            >
              Reset
            </Button>
          </form>
        )}
      </CardFooter>
    </Card>
  );
};

export default UssdSimulator;