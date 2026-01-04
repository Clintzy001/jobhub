import React, { useState } from 'react';
import { Search, User, Home, MessageCircle, Plus, Briefcase, Tag } from 'lucide-react';
// This links the second file you created
import CreateListing from './CreateListing'; 

const JobHub = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  // This "State" tracks if the Post Form is open or closed
  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: '#F5F5F5' }}>
      
      {/* If showPostForm is true, show the CreateListing screen */}
      {showPostForm && (
        <CreateListing onClose={() => setShowPostForm(false)} />
      )}

      {/* Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-black tracking-tighter" style={{ color: '#4A148C' }}>JOBHUB</h1>
        <div className="flex gap-4 items-center">
          <Search className="w-6 h-6 text-gray-400" />
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </header>

      {/* Toggle Buttons (Jobs/Ads) */}
      <div className="flex justify-center gap-2 py-6">
        <button 
          onClick={() => setActiveTab('jobs')}
          className={`px-8 py-2 rounded-lg font-bold transition-all ${activeTab === 'jobs' ? 'text-white shadow-lg' : 'bg-gray-200 text-gray-600'}`}
          style={activeTab === 'jobs' ? { backgroundColor: '#4A148C' } : {}}
        >
          Jobs
        </button>
        <button 
          onClick={() => setActiveTab('ads')}
          className={`px-8 py-2 rounded-lg font-bold transition-all ${activeTab === 'ads' ? 'text-white shadow-lg' : 'bg-gray-200 text-gray-600'}`}
          style={activeTab === 'ads' ? { backgroundColor: '#4A148C' } : {}}
        >
          Ads
        </button>
      </div>

      {/* Content List */}
      <main className="px-5 pb-24 space-y-4 flex-1">
        <h2 className="text-lg font-bold text-gray-800">
          {activeTab === 'jobs' ? 'Recommended Jobs' : 'Featured Ads'}
        </h2>
        {/* Placeholder for Listings */}
        <div className="p-8 text-center text-gray-400 border-2 border-dashed rounded-2xl">
          Listings will appear here after payment.
        </div>
      </main>

      {/* Bottom Nav + Floating Button */}
      <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center py-3">
        <Home className="w-6 h-6" style={{ color: '#4A148C' }} />
        <Search className="w-6 h-6 text-gray-400" />
        
        {/* CLICKING THIS NOW OPENS THE FORM */}
        <div className="relative -top-6">
          <button 
            onClick={() => setShowPostForm(true)}
            className="p-4 rounded-full shadow-2xl transition-transform active:scale-95" 
            style={{ backgroundColor: '#4A148C' }}
          >
            <Plus className="text-white w-8 h-8" />
          </button>
        </div>

        <MessageCircle className="w-6 h-6 text-gray-400" />
        <User className="w-6 h-6 text-gray-400" />
      </nav>
    </div>
  );
};

export default JobHub;
