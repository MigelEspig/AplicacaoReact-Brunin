import { render, screen } from '@testing-library/react';
import { Footer } from './';

test('', () => {
    // renderiza o componente na tela de teste *ponto*
    render(<Footer />);

    // Busca os links criados pelo componente *ponto*
    const links = screen.getAllByRole('link');

    // Confere a quantidade encontrada *ponto*
    expect(links).toHaveLength(4);
});
