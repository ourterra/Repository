
export const globalTypes = {
  theme: {
    name: 'okTheme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
    },
  },
};
