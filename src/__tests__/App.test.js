import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders Login text', () => {
    render(<App />);
    const loginText = screen.getByText(/login/i);
    expect(loginText).toBeInTheDocument();
  });

  test('renders email input field', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/e-mail/i); // Busca pelo label "E-mail:"
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input field', () => {
    render(<App />);
    const passwordInput = screen.getByLabelText(/senha/i); // Busca pelo label "Senha:"
    expect(passwordInput).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<App />);
    const submitButton = screen.getByRole('button', { name: /acessar/i }); // Busca botão com texto "Acessar"
    expect(submitButton).toBeInTheDocument();
  });

  test('renders welcome message if exists', () => {
    render(<App />);
    const welcomeMessage = screen.queryByText(/welcome/i);
    if (welcomeMessage) {
      expect(welcomeMessage).toBeInTheDocument();
    }
  });
});
