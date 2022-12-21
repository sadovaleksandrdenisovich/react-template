import { render, screen } from '@testing-library/react';
import { beforeEach, describe } from 'vitest';

import { ErrorNotFound } from './ErrorNotFound';

describe('ErrorNotFound', () => {
  beforeEach(() => {
    render(<ErrorNotFound />);
  });

  test('should be not found page', () => {
    expect(screen.getByText(/404/)).toBeInTheDocument();
  });
});
