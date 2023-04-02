import React from 'react';
import NotFound from '../../assets/Error-rafiki.svg';

export const PageNotFound: React.FC = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <img src={NotFound} alt="not_found" />
    </>
  );
};
