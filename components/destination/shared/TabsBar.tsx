"use client";
import React from "react";

interface TabItem {
  name: string;
  id: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  sectionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

const TabsBar: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, sectionRefs }) => {
  const handleScroll = (id: string) => {
    const section = sectionRefs.current?.[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <div className="bg-base-300 border-b border-gray-200">
      <div className="max-w-7xl mx-auto w-full overflow-x-auto no-scrollbar px-6 py-4">
        <ul role="tablist"
            className="inline-flex space-x-8 text-gray-800 text-sm sm:text-base font-medium">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-current={activeTab === tab.id ? "page" : undefined}
              className={`relative px-3 py-2 cursor-pointer transition-all duration-300 ease-in-out rounded-md
                ${activeTab === tab.id
                  ? "text-blue-600 bg-blue-50 font-semibold shadow-sm after:absolute after:-bottom-[17px] after:left-1/2 after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full"
                  : "hover:text-blue-500 hover:bg-gray-50 text-gray-700"}
              `}
              onClick={() => handleScroll(tab.id)}
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                {tab.icon && <span className="text-lg">{tab.icon}</span>}
                {tab.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabsBar;
