import React from 'react';
import { render, cleanup } from 'react-testing-library';

import MovieDetail from '../MovieDetail';

// can setup in a global config
global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

const match = {
  params: {
    id: 'fkljadlsfjs',
  },
};

test('<MovieDetail />', () => {
  const { debug } = render(<MovieDetail match={match} />);

  debug();

  // expect(console.error).toHaveBeenCalled();
});
