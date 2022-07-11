import React, { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DonationSticky from '@/components/elements/donation/DonationSticky';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <DonationSticky />
      <Footer />
    </>
  );
};

export default DefaultLayout;
