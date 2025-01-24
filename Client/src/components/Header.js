import React, { useEffect, useState } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(formattedTime);
    };

    updateTime(); // Initialize the current time
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <header className="bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-semibold text-white">Voting System Dashboard</h1>
        <div className="flex items-center space-x-6">
          <span className="text-gray-300" id="currentTime">{currentTime}</span>
          <button className="relative">
            <i className="fas fa-bell text-gray-300"></i>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <img
              src="https://creatie.ai/ai/api/search-image?query=A%20professional%20headshot%20of%20a%20person%20with%20a%20friendly%20smile,%20wearing%20business%20attire,%20against%20a%20neutral%20background&width=40&height=40&orientation=squarish&flag=87acb75a-e82b-4a27-9bbe-284928bbf990&flag=e1654f88-340b-4042-bde7-27e87f5e82f7"
              className="w-8 h-8 rounded-full"
              alt="Profile"
            />
            <span className="text-gray-300">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
