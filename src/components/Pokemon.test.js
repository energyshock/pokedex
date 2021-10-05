import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Pokemon from './Pokemon';

test('On render, the loading spinner should be enabled', () => {
  const match = {
    params: {
      id: '',
    },
  };

  render(
    <Router>
      <Pokemon match={match} />
    </Router>
  );

  expect(screen.getByRole('img', { name: /loading.../i })).toBeEnabled();
});
