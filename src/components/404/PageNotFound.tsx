import React from 'react';
import NotFound from '../../assets/Error-rafiki.svg';

class PageNotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>Page Not Found</h1>
        <img src={NotFound} alt="not_found" />
      </>
    );
  }
}

export default PageNotFound;
