'use client'
import React from 'react';

interface FactCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const FactCard: React.FC<FactCardProps> = ({ label, value, icon }) => (
  <div className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 ease-in-out">
    <div className="flex-shrink-0 p-3 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
      {icon}
    </div>
    <div className="flex-grow">
      <p className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors duration-300">{label}</p>
      <p className="text-lg font-semibold text-gray-900 mt-0.5">{value}</p>
    </div>
  </div>
);

export default FactCard;
