import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonRow from './PokemonRow';

test('on render, the proper link of the pokemon gets returned', () => {
  const id = '25';
  render(
    <Router>
      <PokemonRow pokemon={{ name: 'pikachu' }} id={id} />
    </Router>
  );

  expect(screen.getByRole('link', { name: /view more/i })).toHaveAttribute(
    'href',
    `/pokemon/${id}`
  );
});
