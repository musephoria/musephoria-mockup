const activityItems = [
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Lindsay Walton',
        imageUrl:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Courtney Henry',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    {
      user: {
        name: 'Michael Foster',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      projectName: '5 miles away',
      commit: 'Alpheretta',
      branch: 'Georgia',
      date: '5mi',
      dateTime: '2023-01-23T11:00',
    },
    ]
    
    export default function FindNearYouTab() {
      return (
        <div className="">
          <div className="mx-auto px-6">
            <ul role="list" className="divide-y divide-white/5">
              {activityItems.map((item) => (
                <li key={item.commit} className="py-1">
                  <div className="drop-shadow-md bg-gradient-to-r from-purple-500 to-pink-500 border-solid border-2 rounded-md p-4 border-black hover:drop-shadow-xl">
                  <div className="flex items-center gap-x-3 ">
                    <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
                    <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-100">{item.user.name}</h3>
                    <time dateTime={item.dateTime} className="flex-none text-xs text-gray-100">
                      {item.date}
                    </time>
                  </div>
                  <p className="mt-3 truncate text-sm text-gray-100">
                    Currently <span className="text-gray-100">{item.projectName}</span> (
                    <span className="font-mono text-gray-100">{item.commit}</span> , {' '}
                    <span className="text-gray-100">{item.branch}</span>)
                  </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    }
    