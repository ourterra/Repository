// Inside src/stories/2-Header.stories.js

import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
};

export const Text = () => <Header>Hello World Header</Header>;
