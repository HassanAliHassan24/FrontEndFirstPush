import { render, screen } from '@testipackages": {
    "": {
      "name": "science_teachers_finder_management_system",
      "version": "0.1.0",
      "dependencies": {
        "@emotion/react": "^11.10.6",
        "@emotion/styled": "^11.10.6",
        "@mui/icons-material": "^5.11.11",
     ng-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
