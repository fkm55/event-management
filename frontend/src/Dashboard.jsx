// src/Dashboard.js
import React, { useState } from 'react';
import EventForm from './components/EventForm';
import SearchEvents from './SearchEvents';
import SearchUsers from './SearchUsers';
import UserForm from './UserForm';

const Dashboard = () => {
  const [showContent, setShowContent] = useState({ contentId: 'default', description: '' });

  const handleContentChange = (contentId, description) => {
    setShowContent({ contentId, description });
  };

  const handleShowDashboard = () => {
    setShowContent({ contentId: 'default', description: '' });
  };

  return (
    <div className="min-h-screen mt-16 flex">
      {/* Sidebar */}
      <div id="sidebar" className="bg-gray-800 text-white w-1/4 p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Manage Accounts</h3>
          <ul>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={() => handleContentChange('search_users', 'Search Users')}
              >
                Search Users
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={() => handleContentChange('manage_user', 'Manage Users')}
              >
                Manage Users
              </button>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Events</h3>
          <ul>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={() => handleContentChange('search_events', 'Search Events')}
              >
                Search Events
              </button>
            </li>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={() => handleContentChange('manage_event', 'Manage Events')}
              >
                Manage Events
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Hosts</h3>
          <ul>
            <li>
              <button
                className="w-full text-left py-2 px-4 hover:bg-gray-700"
                onClick={() => handleContentChange('search_host', 'Search Host Event')}
              >
                Search Host Event
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div id="content" className={`w-3/4 p-6 ${showContent.contentId === 'default' ? '' : 'w-full'}`}>
        {showContent.contentId === 'default' ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Welcome to the Admin Dashboard</h2>
            </div>
            <p className="text-gray-600 mb-4">Select an option from the sidebar to manage the system.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                <ul className="list-disc list-inside">
                  <li><a href="#" className="text-blue-500 hover:underline">View User List</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">View Event Details</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Manage Hosts</a></li>
                </ul>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Statistics</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nisl vitae urna ultrices aliquam.</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-4">
              <button onClick={handleShowDashboard} className="text-xl mr-4">←</button>
              <h2 className="text-2xl font-bold">{showContent.description}</h2>
            </div>
            {showContent.contentId === 'manage_event' && <EventForm />}
            {showContent.contentId === 'search_events' && <SearchEvents />}
            {showContent.contentId === 'search_users' && <SearchUsers />}
            {showContent.contentId === 'manage_user' && <UserForm />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
