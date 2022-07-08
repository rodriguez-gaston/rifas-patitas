import React from 'react';

const Header = () => {
  return (
    <header>
      <section className="max-w-7xl p-4 mx-auto flex justify-between items-center">
        <p>Patitas en Accion</p>
        <ul className="flex gap-5">
          <li>Hola</li>
          <li>Chau</li>
          <li>Insta</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
