//export const parameters = {
  //layout: 'centered',
  //actions: { argTypesRegex: "^on[A-Z].*" },
//}

import '../src/index.css';

// Configures Storybook to log the actions(onArchiveTask and onPinTask) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
