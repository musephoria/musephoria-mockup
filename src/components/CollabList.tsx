import React from 'react';

interface User {
  name: string;
  imageUrl: string;
}

interface ActivityItem {
  user: User;
  projectName: string;
  commit: string;
  branch: string;
  date: string;
  dateTime: string;
}

interface CollabListProps {
  activityItems: ActivityItem[];
}

const CollabList: React.FC<CollabListProps> = ({ activityItems }) => {
    return (
      <div className="bg-gray-900">
        <div className="px-6">
          <ul role="list" className="divide-y divide-white/5">
            {activityItems.map((item) => (
              <li key={item.commit} className="py-4">
                <div className="flex items-center gap-x-3">
                  <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
                  <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">{item.user.name}</h3>
                  <time dateTime={item.dateTime} className="flex-none text-xs text-gray-500">
                    {item.date}
                  </time>
                </div>
                <p className="mt-3 truncate text-sm text-gray-500">
                  Pushed to <span className="text-gray-400">{item.projectName}</span> (
                  <span className="font-mono text-gray-400">{item.commit}</span> on{' '}
                  <span className="text-gray-400">{item.branch}</span>)
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  export default CollabList;