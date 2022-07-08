import React, { ReactNode } from 'react';
import Header from '../components/layout/Header';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div>
        <p>Main Layout</p>
      </div>
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
