import React from 'react';
import { useParams } from 'react-router-dom';

// Gets the name of the rooms from the URL
const withRouter = WrappedComponent => props => {
  const params = useParams();

  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

export default withRouter;