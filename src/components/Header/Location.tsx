import React from 'react';
import { withRouter, WithRouterProps } from './withRouter';

const Location = (props: WithRouterProps) => {
  const { location } = props;

  const correctPath = (location: string) => {
    switch (location) {
      case '/':
        return 'Main';
      case '/about':
        return 'About';
      case '/form':
        return 'Form';
      case '/contacts':
        return 'Contacts';
      default:
        return 'Page Not Found';
    }
  };

  const path = correctPath(location.pathname);
  return (
    <>
      <p className="path_name">{path}</p>
    </>
  );
};

const HOCLocation = withRouter(Location);
export default HOCLocation;
