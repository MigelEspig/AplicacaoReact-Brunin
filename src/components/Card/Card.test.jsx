import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Card} from './';
import {CarrinhoProvider} from '../../context/CarrinhoContext';

test("Mostra o nome do produto", () => {
    render(
        <CarrinhoProvider>
            <Card
                produto={{
                    nome: 'Sopa dos mares',
                    preco: 31.99,
                    desc: 'Descrição',
                    em_estoque: true,
                    img: null,
                }}
            />
        </CarrinhoProvider>
    );
    expect(screen.getByText("Sopa dos mares")).toBeInTheDocument();
});