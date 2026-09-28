'use client';

import Link from 'next/link';
import { Menu, X, Plane, Hotel, PackageOpen, Info, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const logo = '/assets/nextvacation-logo.png';

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="wrap header-row">
          <Link className="logo" href="/" aria-label="החופשה הבאה">
            <img src={logo} alt="החופשה הבאה" />
          </Link>

          <nav className="desktop-nav" aria-label="ניווט ראשי">
            <Link className={path.startsWith('/flights') ? 'active' : ''} href="/flights">טיסות</Link>
            <Link className={path.startsWith('/hotels') ? 'active' : ''} href="/hotels">מלונות</Link>
            <Link className={path.startsWith('/packages') ? 'active' : ''} href="/packages">טיסה + מלון</Link>
          </nav>

          <button
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="פתיחת תפריט"
            aria-expanded={open}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="drawer-close" onClick={() => setOpen(false)} aria-label="סגירת תפריט">
          <X size={21} />
        </button>

        <div className="drawer-logo">
          <img src={logo} alt="החופשה הבאה" />
        </div>

        <nav className="drawer-nav">
          <Link href="/">דף הבית</Link>
          <Link href="/flights"><Plane size={18} />טיסות</Link>
          <Link href="/hotels"><Hotel size={18} />מלונות</Link>
          <Link href="/packages"><PackageOpen size={18} />טיסה + מלון</Link>
          <Link href="/how-it-works"><Info size={18} />איך זה עובד</Link>
          <Link href="/about"><Info size={18} />אודות</Link>
          <Link href="/contact"><Mail size={18} />צור קשר</Link>
        </nav>
      </aside>
    </>
  );
}
