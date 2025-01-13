import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Image src="/images/logo2.png" alt="Future-Age-Tech Logo" width={80} height={40} />
          <span></span>
        </div>
        <div className="navbar-links">
          <Link href="/">Home</Link>
          {/* <Link href="/services">Services</Link> */}
          <Link href="/About">About</Link>
          {/* <Link href="/contact">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
}