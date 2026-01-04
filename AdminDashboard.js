import React, { useState } from 'react';
import { Check, Trash2, Clock } from 'lucide-react';

const AdminDashboard = ({ listings, onVerify, onDelete }) => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-black text-brand-purple mb-6 uppercase tracking-tight">Admin Approval</h2>
      
      <div className="space-y-4">
        {listings.map((item) => (
          <div key={item.id} className="border-2 rounded-2xl p-4 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-500">Plan: {item.plan.toUpperCase()}</p>
              <div className="flex items-center gap-1 mt-1">
                {item.status === 'pending' ? (
                  <span className="text-orange-500 text-[10px] font-bold flex items-center gap-1">
                    <Clock size={12} /> PENDING PAYMENT
                  </span>
                ) : (
                  <span className="text-green-600 text-[10px] font-bold flex items-center gap-1">
                    <Check size={12} /> VERIFIED
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex gap-2">
              {item.status === 'pending' && (
                <button 
                  onClick={() => onVerify(item.id)}
                  className="bg-green-600 text-white p-2 rounded-lg"
                >
                  <Check size={20} />
                </button>
              )}
              <button 
                onClick={() => onDelete(item.id)}
                className="bg-red-50 text-red-600 p-2 rounded-lg"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
