import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
import CollabList from '~/components/CollabList';

  const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
    { name: 'Chat', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
    { name: 'Feedback', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  ]

  type ActivityItems = {
    name: string;
    imageUrl: string;
    projectName: string;
    commit: string;
    branch: string;
    date: string;
    dataTime: string;
  };


  const ActivityItems = [
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: 'The Crow That Would Not Sing',
      commit: 'Chorus',
      branch: 'V2',
      date: '4h',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: 'Inferno',
      commit: 'Intro',
      branch: 'V2',
      date: '4h',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: 'Paranoid Android',
      commit: 'Chorus',
      branch: 'V2',
      date: '9h',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Rebbeca Walton',
        imageUrl:
          'data:image/jpeg;base64,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',
      },
      projectName: 'Ghost Town',
      commit: 'Pre-Chorus',
      branch: 'V2',
      date: '2 Days',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Will Ploufton',
        imageUrl:
          'data:image/jpeg;base64,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',
      },
      projectName: 'Ghost Town',
      commit: 'Hook',
      branch: 'V2',
      date: '2 Days',
      dateTime: '2023-01-23T11:00',
    },
  ]
  


  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SideBar() {
    return (
      <div className="flex flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {item.name}
                      {item.count ? (
                        <span
                          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                          aria-hidden="true"
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Your Collabs</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
              <CollabList activityItems={ActivityItems} />
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
              >
                <img
                  className="h-8 w-8 rounded-full bg-gray-800"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  