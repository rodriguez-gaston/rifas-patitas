import Link from 'next/link';
import React from 'react';

const DonationSticky = () => {
  return (
    <Link href={'/donar'}>
      <button className="fixed bottom-5 right-4 bg-primary-700 text-white px-4 py-2 rounded-full hover:bg-primary-900">Donar</button>
    </Link>
  );
};

export default DonationSticky;
