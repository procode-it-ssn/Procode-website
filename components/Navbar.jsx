/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Events', href: '/events' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 bg-white shadow-lg fixed w-full"
    >
      {({ open }) => (
        <>
          <div className=" mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-400 text-gray-800 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:flex justify-center w-full">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={classNames(
                            router.pathname == item.href
                              ? 'cursor-pointer bg-gradient-to-tr  from-cyan-400  to-blue-500 drop-shadow-lg  text-gray-50 dark:text-white'
                              : 'cursor-pointer dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
                            'px-3 py-2 rounded-md font-semibold'
                          )}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {theme === 'light' ? (
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    className="focus:outline-none dark:hover:bg-gray-700 p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    className="focus:outline-none dark:hover:bg-gray-700 p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} className="w-full text-left">
                  <Link href={item.href}>
                    <div
                      className={classNames(
                        router.pathname == item.href
                          ? 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-white'
                          : 'dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
