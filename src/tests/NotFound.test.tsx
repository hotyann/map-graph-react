import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '@/pages/NotFound';

describe('NotFound Page', () => {
  it('should render without crashing', () => {
    const { container } = render(<NotFound />);
    expect(container).toBeInTheDocument();
  });

  it('should display the "404 Not Found" message', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('404 Not Found')).toBeInTheDocument();
  });

  it('should have the correct CSS class for styling', () => {
    const { container } = render(<NotFound />);
    const divElement = container.querySelector('div');
    expect(divElement).toHaveClass(
      'flex',
      'min-h-screen',
      'flex-col',
      'items-center',
      'justify-center',
      'bg-gray-100'
    );
  });
});
