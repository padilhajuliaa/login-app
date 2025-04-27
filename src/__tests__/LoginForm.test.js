import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../components/LoginForm';

describe('LoginForm Component', () => {
  test('renders login form elements', () => {
    render(<LoginForm />);
    
    // Verificar se os elementos principais estão presentes
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Acessar/i })).toBeInTheDocument();
  });

  test('successful login with correct credentials', () => {
    render(<LoginForm />);
    
    // Preencher campos com credenciais corretas
    fireEvent.change(screen.getByLabelText(/E-mail:/i), {
      target: { value: 'eduardo.lino@pucpr.br' }
    });
    
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: '123456' }
    });
    
    // Submeter o formulário
    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }));
    
    // Verificar se a mensagem de sucesso aparece
    expect(screen.getByText(/Acessado com sucesso!/i)).toBeInTheDocument();
  });

  test('failed login with incorrect credentials', () => {
    render(<LoginForm />);
    
    // Preencher campos com credenciais incorretas
    fireEvent.change(screen.getByLabelText(/E-mail:/i), {
      target: { value: 'usuario@exemplo.com' }
    });
    
    fireEvent.change(screen.getByLabelText(/Senha:/i), {
      target: { value: 'senhaerrada' }
    });
    
    // Submeter o formulário
    fireEvent.click(screen.getByRole('button', { name: /Acessar/i }));
    
    // Verificar se a mensagem de erro aparece
    expect(screen.getByText(/Usuário ou senha incorretos!/i)).toBeInTheDocument();
  });
});