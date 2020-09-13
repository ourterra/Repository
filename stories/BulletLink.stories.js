import React from 'react';

import { Header } from './BulletLink';

export default {
  title: 'Header_Ex/Bullitlink',
  component: Header,
};

const Template = (args) => <BulletLink {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
