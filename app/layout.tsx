import './globals.css';
import Sidebar from '@/components/sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let isSidebarOpen = true
    ? 'bg-white absolute w-full border-r border-gray-200 '
    : 'hidden ';
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={'flex bg-gray-700'}>
        <div
          className={
            isSidebarOpen + 'lg:block lg:bg-gray-50 lg:w-56 ' + '2xl:w-72'
          }
        >
          <Sidebar />
        </div>
        <div className={'bg-white flex-auto'}>{children}</div>
      </body>
    </html>
  );
}

/**
 absolute -translate-x-full
 3xl:w-80 z-30 flex h-full max-h-screen min-h-screen w-3/4 flex-none
 transform flex-col overflow-y-auto   bg-white pb-10 transition duration-200
 ease-in-out dark:border-gray-800 dark:bg-gray-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative
 lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-900 2xl:w-72




 */
