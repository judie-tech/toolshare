import React from 'react';
import ToolCatalog from '../components/tools/ToolCatalog';

const BrowseToolsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Browse Tools</h1>
      <ToolCatalog />
    </div>
  );
};

export default BrowseToolsPage;