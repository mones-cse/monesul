import Sidebar from '@/components/sidebar';

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={'bg-blue-400 w-80'}>
        <Sidebar />
      </div>
      <div className={'bg-green-200 flex-auto'}>{}</div>
    </>
  );
}
