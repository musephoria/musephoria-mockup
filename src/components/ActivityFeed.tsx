/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ChevronRightIcon } from '@heroicons/react/20/solid'
type Status = 'offline' | 'online' | 'error';
type Environment = 'V2' | 'V9' | 'V4' | 'V7';

const statuses: Record<Status, string> = {
    offline: 'text-gray-500 bg-gray-100/10',
    online: 'text-green-400 bg-green-400/10',
    error: 'text-rose-400 bg-rose-400/10',
  };
  
  const environments: Record<Environment, string> = {
    V2: 'text-rose-400 bg-gray-600/30 ring-gray-700',
    V9: 'text-indigo-400 bg-gray-600/30 ring-gray-700',
    V4: 'text-emerald-400 bg-gray-600/30 ring-gray-700',
    V7: 'text-fuchsia-400 bg-gray-600/30 ring-gray-700',
  };
  
  interface Deployment {
    id: number;
    href: string;
    projectName: string;
    teamName: string;
    status: Status;
    statusText: string;
    description: string;
    environment: Environment;
  }
  
  const deployments: Deployment[] = [
  {
    id: 1,
    href: '#',
    projectName: 'Chorus',
    teamName: 'The Crow That Would Not Sing',
    status: 'offline',
    statusText: 'Last updated 4 hours ago',
    description: 'Received 3 reviews',
    environment: 'V2',
  },
  {
    id: 2,
    href: '#',
    projectName: 'Intro',
    teamName: 'Inferno',
    status: 'online',
    statusText: 'Last updated 9 hours ago',
    description: 'Received 5 reviews',
    environment: 'V9',
  },
  {
    id: 3,
    href: '#',
    projectName: 'Bridge',
    teamName: 'Paranoid Android',
    status: 'offline',
    statusText: 'Last updated 2 days ago',
    description: 'Received 8 reviews',
    environment: 'V4',
  },
  {
    id: 4,
    href: '#',
    projectName: 'Hook',
    teamName: 'Ghost Town',
    status: 'error',
    statusText: 'Last updated 2 days ago',
    description: 'Received 12 reviews',
    environment: 'V7',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ActivityFeed() {
  return (
    <div className="bg-gray-900 py-8">
      <div className="mx-auto max-w-lg px-6">
        <ul role="list" className="divide-y divide-white/5">
          {deployments.map((deployment) => (
            <li key={deployment.id} className="relative flex items-center space-x-4 py-4">
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <div className={classNames(statuses[deployment.status], 'flex-none rounded-full p-1')}>
                    <div className="h-2 w-2 rounded-full bg-current" />
                  </div>
                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                    <a href={deployment.href} className="flex gap-x-2">
                      <span className="truncate">{deployment.teamName}</span>
                      <span className="text-gray-400">/</span>
                      <span className="whitespace-nowrap">{deployment.projectName}</span>
                      <span className="absolute inset-0" />
                    </a>
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                  <p className="truncate">{deployment.description}</p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="whitespace-nowrap">{deployment.statusText}</p>
                </div>
              </div>
              <div
                className={classNames(
                  environments[deployment.environment],
                  'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {deployment.environment}
              </div>
              <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
