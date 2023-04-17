import React, { useState, useEffect } from 'react';
import UploadTab from './DashboardTabPages/Upload';
import EditorTab from './DashboardTabPages/Editor';
import FeedbackTab from './DashboardTabPages/Feedback';
import FindNearYouTab from './DashboardTabPages/FindNearYou';
import DiscussMusicTab from './DashboardTabPages/DiscussMusic';

type Tab = {
  name: string;
  href: string;
  current: boolean;
};

const tabs: Tab[] = [
  { name: 'Uploads', href: '#', current: false },
  { name: 'Editor', href: '#', current: false },
  { name: 'Feedback', href: '#', current: true },
  { name: 'Find People Near You', href: '#', current: false },
  { name: 'Discuss Music', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function DashboardTabs() {
  const [activeTab, setActiveTab] = useState(tabs.find((tab) => tab.current)!.name);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    tabs.forEach((tab) => {
      tab.current = tab.name === activeTab;
    });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Uploads':
        return <UploadTab />;
      case 'Editor':
        return <EditorTab />;
      case 'Feedback':
        return <FeedbackTab />;
      case 'Find People Near You':
        return <FindNearYouTab />;
      case 'Discuss Music':
        return <DiscussMusicTab />;
      default:
        return <div>Select a tab to display content</div>;
    }
  };

  return (
    <div className="relative border-b bg-gradient-to-r from-purple-400 to-pink-400 border-gray-200 pb-5 sm:pb-0 overflow-y-auto h-full">
      <div className="md:flex md:items-center md:justify-between">
        {/* ...existing code... */}
      </div>
      <div className="mt-4">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabChange(tab.name)}
              className={classNames(
                
                tab.current
                  ? 'bg-gray-300 text-gray-900'
                  : 'bg-gray-100 text-gray-600',
                'rounded-md relative left-5 px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6 overflow-y-auto ">{renderContent()}</div>
    </div>
  );
}