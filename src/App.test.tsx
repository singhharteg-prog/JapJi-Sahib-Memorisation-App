import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders home screen with heading and all activity cards', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'ਜਪੁਜੀ ਸਾਹਿਬ' })).toBeInTheDocument();
    expect(screen.getByText('Memorization Practice App')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /what's the next word\?/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /read & practice/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /order the lines/i })).toBeInTheDocument();
  });

  it('navigates to stanza selector for next-word activity', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /what's the next word\?/i }));

    expect(screen.getByRole('heading', { name: /what's the next word\?/i })).toBeInTheDocument();
    expect(screen.getByText(/select one or more pauris to practice/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start practice/i })).toBeInTheDocument();
  });

  it('starts read practice directly from home', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /read & practice/i }));

    expect(screen.getByRole('heading', { name: /read & practice/i })).toBeInTheDocument();
    expect(screen.getByText(/jump to pauri/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
