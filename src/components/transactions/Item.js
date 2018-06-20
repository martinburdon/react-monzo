import React from 'react';

export default ({
  description,
  notes
}) => (
  <transaction-item>
    <p>{description}</p>
    <p>{notes}</p>
  </transaction-item>
);
