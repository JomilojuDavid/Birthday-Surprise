import React from 'react';
import { Home, Search, PlusSquare, Play, User } from 'lucide-react';

interface BottomNavProps {
  currentView: 'feed' | 'search' | 'add' | 'reels' | 'profile';
  onViewChange: (view: 'feed' | 'search' | 'add' | 'reels' | 'profile') => void;
}

const BottomNav = ({ currentView, onViewChange }: BottomNavProps) => {
  const navItems = [
    { id: 'feed', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'add', icon: PlusSquare, label: 'Add' },
    { id: 'reels', icon: Play, label: 'Reels' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-black border-t border-gray-800 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 ${
                isActive ? 'text-white' : 'text-gray-400'
              }`}
            >
              <Icon
                className={`w-6 h-6 mb-1 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
                fill={isActive && item.id !== 'search' ? 'white' : 'none'}
              />
              <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;