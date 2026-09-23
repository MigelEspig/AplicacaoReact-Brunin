import { render, screen } from '@testing-library/react';
import { Header } from './';

// Substitui o componente de rota durante o teste.
jest.mock('react-router-dom', () => ({
    Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
}), { virtual: true });

test('', () => {
    // renderiza o componente na tela de teste.
    render(<Header />);

    // Busca os links criados pelo componente.
    const links = screen.getAllByRole('link');

    // Confere a quantidade encontrada.
    expect(links).toHaveLength(4);
});
