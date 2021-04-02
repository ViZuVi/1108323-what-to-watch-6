import React from 'react';
import {render} from '@testing-library/react';
import ErrorScreen from './error-screen';

it(`ErrorScreen should render correctly`, () => {
  const {container} = render(
      <ErrorScreen error={``} />);
  expect(container).toMatchSnapshot();
});

