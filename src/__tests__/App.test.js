// Esses testes verificam se os elementos da tela de login estão sendo renderizados corretamente.
// Eles utilizam a biblioteca @testing-library/react para renderizar o componente App e verificar a presença de elementos específicos na tela.
// A função render() é usada para renderizar o componente, e a função screen é usada para buscar os elementos na tela.
// Os testes verificam se o texto "Login", o campo de senha, o botão de envio e o campo de email estão presentes na tela.
// Além disso, também é verificado se o título "Welcome" está sendo exibido corretamente.
// Importando as bibliotecas necessárias para os testes


import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders login screen', () => {
  render(<App />);
  const loginText = screen.getByText(/Login/i);
  expect(loginText).toBeInTheDocument();
});

test('renders password input', () => {
  render(<App />);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('renders submit button', () => {
  render(<App />);
  const submitButton = screen.getByRole('button', { name: /Submit/i });
  expect(submitButton).toBeInTheDocument();
});

test('renders email input', () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText(/Email/i);
  expect(emailInput).toBeInTheDocument();
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Welcome/i);
  expect(title).toBeInTheDocument();
});
