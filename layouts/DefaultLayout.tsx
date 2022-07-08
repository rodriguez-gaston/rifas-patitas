import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <div>
        <p>Main Layout</p>
      </div>
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
