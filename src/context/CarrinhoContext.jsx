import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    function adicionarItem(produto) {
        setItens((prev) => {
            const jaexiste = prev.find((item) => item.id === produto.id);

            if (jaexiste) {
                return prev.map((item) =>
                    item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
                );
            }

            return [...prev, { ...produto, quantidade: 1 }];
        });
    }

    function alterarQuantidade(id, delta) {
        setItens((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantidade: Math.max(1, item.quantidade + delta) } : item
                )
                .filter((item) => item.quantidade > 0)
        );
    }

    function removerItem(id) {
        setItens((prev) => prev.filter((item) => item.id !== id));
    }

    function TotalItens() {
        return itens.reduce((acc, item) => acc + item.quantidade, 0);
    }

    function TotalPreco() {
        return itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    }

    function finalizarPedido() {
        if (itens.length === 0) return;

        const novoPedido = {
            id: Date.now(),
            date: new Date().toLocaleDateString("pt-BR"),
            itens: itens,
            total: TotalPreco()
        };

        setPedidos((prev) => [...prev, novoPedido]);
        setItens([]);

    }

    return (
        <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, alterarQuantidade, TotalItens, TotalPreco, finalizarPedido, pedidos }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}