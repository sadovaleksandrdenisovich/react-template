import { render, screen } from '@testing-library/react';
import { beforeEach, describe } from 'vitest';

import { ErrorInternalServer } from './ErrorInternalServer';

describe('ErrorInternalServer', () => {
  beforeEach(() => {
    render(<ErrorInternalServer />);
  });

  test('should be internal server page', () => {
    expect(screen.getByText(/500/)).toBeInTheDocument();
  });
});
