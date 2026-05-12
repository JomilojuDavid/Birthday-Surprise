import React from 'react';
import { Search, Heart, MessageCircle } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between">
      {/* Instagram Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          BirthdayGram
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-xs mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-10 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <Heart className="w-5 h-5 text-white" />
        <MessageCircle className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default TopBar;