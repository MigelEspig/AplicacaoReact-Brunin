import {render, screen} from '@testing-library/react';
import Card from './Card';

test("Mostra o nome do produto", () => {
    render(
        <Card title={"Sopa dos mares"} price={31.99} />
    );
    expect(screen.getByText("Sopa dos mares")).toBeInTheDocument();
});