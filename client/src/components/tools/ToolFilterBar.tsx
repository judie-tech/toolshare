import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FilterOptions, ToolCategory } from '../../types';
import Button from '../ui/Button';
import { TOOL_CATEGORIES } from '../../data/mockData';

const ToolFilterBar: React.FC = () => {
  const { filterOptions, setFilterOptions } = useApp();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [localFilter, setLocalFilter] = useState<FilterOptions>(filterOptions);
  
  // List of Kenya cities
  const cities = ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalFilter(prev => ({ ...prev, searchQuery: value }));
    // Apply search filter immediately
    setFilterOptions(prev => ({ ...prev, searchQuery: value }));
  };

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
    if (!isFilterOpen) {
      // Reset local filters to match current applied filters when opening
      setLocalFilter(filterOptions);
    }
  };

  const applyFilters = () => {
    setFilterOptions(localFilter);
    setIsFilterOpen(false);
  };

  const resetFilters = () => {
    const reset: FilterOptions = {};
    setLocalFilter(reset);
    setFilterOptions(reset);
    setIsFilterOpen(false);
  };

  const handleCategoryChange = (category: ToolCategory | undefined) => {
    setLocalFilter(prev => ({ ...prev, category }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? undefined : e.target.value;
    setLocalFilter(prev => ({ ...prev, location: value }));
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter(prev => ({ ...prev, availability: e.target.checked }));
  };

  return (
    <div className="mb-6">
      {/* Search bar */}
      <div className="relative flex items-center mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for tools..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
          value={localFilter.searchQuery || ''}
          onChange={handleSearchChange}
        />
        <Button 
          variant="ghost" 
          className="ml-2"
          onClick={toggleFilterPanel}
        >
          <Filter className="h-5 w-5 mr-1" />
          Filter
        </Button>
      </div>

      {/* Filters panel */}
      {isFilterOpen && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Filters</h3>
            <button 
              onClick={toggleFilterPanel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(TOOL_CATEGORIES).map(([key, iconName]) => (
                  <button
                    key={key}
                    className={`
                      px-3 py-2 text-sm rounded-md border flex items-center
                      ${localFilter.category === key 
                        ? 'bg-orange-50 border-orange-500 text-orange-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'}
                    `}
                    onClick={() => handleCategoryChange(
                      localFilter.category === key ? undefined : key as ToolCategory
                    )}
                  >
                    {key.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Location filter */}
            <div>
              <label 
                htmlFor="location" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Location
              </label>
              <select
                id="location"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500 focus:border-orange-500"
                value={localFilter.location || ''}
                onChange={handleLocationChange}
              >
                <option value="">All Locations</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability filter */}
            <div>
              <label className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  checked={localFilter.availability || false}
                  onChange={handleAvailabilityChange}
                />
                <span className="text-sm font-medium text-gray-700">
                  Available tools only
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button
              variant="outline"
              onClick={resetFilters}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}

      {/* Active filters display */}
      {(filterOptions.category || filterOptions.location || filterOptions.availability) && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          
          {filterOptions.category && (
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center">
              Category: {filterOptions.category.replace('-', ' ')}
              <button 
                className="ml-1 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setFilterOptions(prev => ({ ...prev, category: undefined }));
                  setLocalFilter(prev => ({ ...prev, category: undefined }));
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {filterOptions.location && (
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center">
              Location: {filterOptions.location}
              <button 
                className="ml-1 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setFilterOptions(prev => ({ ...prev, location: undefined }));
                  setLocalFilter(prev => ({ ...prev, location: undefined }));
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          {filterOptions.availability && (
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs flex items-center">
              Available only
              <button 
                className="ml-1 text-gray-500 hover:text-gray-700"
                onClick={() => {
                  setFilterOptions(prev => ({ ...prev, availability: undefined }));
                  setLocalFilter(prev => ({ ...prev, availability: undefined }));
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          
          <button 
            className="text-xs text-orange-600 hover:text-orange-800"
            onClick={resetFilters}
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default ToolFilterBar;