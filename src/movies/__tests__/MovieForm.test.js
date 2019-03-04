import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from '../MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn(); // spy function

test('<MovieForm>', () => {
  const { queryByTestId, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  );
  expect(queryByTestId('movie-form')).toBeTruthy();

  // Note Might not work.
  // getByLabelText('Text').value = 'hello';
  // fireEvent.change(getByLabelText('Text'));

  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'hi there' },
  });

  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1); // spied
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hi there',
  }); // spied
});

// enzyme tests the state, here we are testing what the user does,
// ie. input, how they are using the web site
