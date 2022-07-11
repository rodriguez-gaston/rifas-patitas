import React from 'react';
import Instagram from '@/icons/Instagram';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md">
      <section className="max-w-7xl mx-auto p-4 grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 justify-between items-center text-gray-800">
        <Link href={'/'}>
          <button className="justify-self-start order-1">Patitas en Accion</button>
        </Link>
        <div className="h-[1px] bg-gray-300 col-span-2 md:hidden order-3"></div>
        <nav className="justify-self-center order-4 md:order-2 col-span-2 md:col-span-1">
          <ul className="flex gap-5">
            <li>Hola</li>
            <li>Chau</li>
            <li>Insta</li>
          </ul>
        </nav>
        <section className="justify-self-end order-2 md:order-3">
          <Instagram />
        </section>
      </section>
    </header>
  );
};

export default Header;
