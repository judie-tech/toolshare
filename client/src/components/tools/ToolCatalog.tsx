import React from 'react';
import { useApp } from '../../context/AppContext';
import ToolCard from './ToolCard';
import ToolFilterBar from './ToolFilterBar';

const ToolCatalog: React.FC = () => {
  const { filteredTools } = useApp();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Available Tools</h2>
      
      <ToolFilterBar />
      
      {filteredTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No tools found matching your filters.</p>
          <p className="text-sm text-gray-500 mt-2">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ToolCatalog;