import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const CreateListing = ({ onClose }) => {
  const [plan, setPlan] = useState('basic');

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 animate-in slide-in-from-bottom">
      {/* Form Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Create Listing</h2>
        <button onClick={onClose} className="p-2 bg-gray-100 rounded-full">
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
          <input type="text" placeholder="e.g. Senior Product Designer" className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-purple-800" />
        </div>
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
          <textarea rows="4" placeholder="Tell us about the job or item..." className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-purple-800" />
        </div>

        {/* Payment Plan Selection */}
        <label className="block text-sm font-bold text-gray-700 mb-1">Select Plan</label>
        <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={() => setPlan('basic')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition ${plan === 'basic' ? 'border-purple-800 bg-purple-50' : 'border-gray-200'}`}
          >
            <h4 className="font-bold">Basic</h4>
            <p className="text-xl font-black text-purple-900">$10</p>
            <p className="text-xs text-gray-500">Live for 7 days</p>
          </div>
          
          <div 
            onClick={() => setPlan('featured')}
            className={`p-4 rounded-2xl border-2 cursor-pointer transition ${plan === 'featured' ? 'border-purple-800 bg-purple-50' : 'border-gray-200'}`}
          >
            <div className="flex justify-between">
              <h4 className="font-bold">Featured</h4>
              {plan === 'featured' && <Check className="w-4 h-4 text-purple-800" />}
            </div>
            <p className="text-xl font-black text-purple-900">$25</p>
            <p className="text-xs text-gray-500">Top of list + 30 days</p>
          </div>
        </div>
      </div>

      {/* Payment Action Button */}
      <button 
        className="w-full py-4 rounded-2xl text-white font-bold text-lg shadow-xl mt-6 active:scale-95 transition"
        style={{ backgroundColor: '#4A148C' }}
        onClick={() => alert('Redirecting to Stripe Checkout...')}
      >
        Pay {plan === 'basic' ? '$10.00' : '$25.00'} & Post
      </button>
    </div>
  );
};

export default CreateListing;
