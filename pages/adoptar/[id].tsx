import React from 'react';
import { useRouter } from 'next/router';

const AdoptarPage = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default AdoptarPage;
