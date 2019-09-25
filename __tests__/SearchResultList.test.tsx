/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';

import SearchResultList from '../components/SearchResultList';

test('renders correctly', () => {
  const tree = renderer.create(<SearchResultList />).toJSON();
  expect(tree).toMatchSnapshot();
});
