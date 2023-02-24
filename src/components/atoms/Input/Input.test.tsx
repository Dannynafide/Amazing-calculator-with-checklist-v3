import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  it('should render Input component', () => {
    render(<Input innerRef={null} value="name" onChange={() => {}} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render value from props', () => {
    render(<Input innerRef={null} value="Tickets" onChange={() => {}} />);
    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe(
      'Tickets'
    );
  });
});
