import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className={'min-h-screen'}>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
