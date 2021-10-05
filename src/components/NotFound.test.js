import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

test('on render, the Back to All button should be enabled', () => {
  render(
    <Router>
      <NotFound />
    </Router>
  );

  expect(screen.getByRole('link', { name: /back to all/i })).toBeEnabled();
});
