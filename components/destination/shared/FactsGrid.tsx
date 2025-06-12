'use client'
import React from 'react';
import {
  Landmark,
  Users,
  Languages,
  UserPlus2,
  TrendingUp,
  Phone,
  DollarSign,
  GraduationCap,
} from 'lucide-react';
import FactCard from './FactsCard';

interface FactValueProps {
  capital: string;
  population: string;
  language: string;
  students: string;
  gdp: string;
  dialingCode: string;
  currency: string;
  universities: string;
}

const FactsGrid: React.FC<{ data: FactValueProps }> = ({ data }) => {
  const factList = [
    { label: 'Capital', value: data.capital, icon: <Landmark className="w-6 h-6" /> },
    { label: 'Population', value: data.population, icon: <Users className="w-6 h-6" /> },
    { label: 'Language', value: data.language, icon: <Languages className="w-6 h-6" /> },
    { label: 'International Students', value: data.students, icon: <UserPlus2 className="w-6 h-6" /> },
    { label: 'GDP', value: data.gdp, icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Dialing Code', value: data.dialingCode, icon: <Phone className="w-6 h-6" /> },
    { label: 'Currency', value: data.currency, icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Universities', value: data.universities, icon: <GraduationCap className="w-6 h-6" /> },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 animate-fadeIn">
      {factList.map((fact, idx) => (
        <div key={idx} className="animate-slideUp" style={{ animationDelay: `${idx * 100}ms` }}>
          <FactCard label={fact.label} value={fact.value} icon={fact.icon} />
        </div>
      ))}
    </div>
  );
};

export default FactsGrid;
