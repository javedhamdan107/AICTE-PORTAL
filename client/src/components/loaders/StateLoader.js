import React from 'react';
import { Spinner } from 'react-bootstrap';

import { StyledLoader } from './StateLoaderStyles';

const StateLoader = () => (
  <StyledLoader>
    <Spinner animation="border" role="status">
      <span className="visually-hidden" />
    </Spinner>
  </StyledLoader>
);

export default StateLoader;
