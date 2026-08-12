import { useCarrinho } from '../../../context/CarrinhoContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { itens, removerItem, alterarQuantidade, TotalItens, TotalPreco } = useCarrinho();
  const totalItens = TotalItens();
  const totalPreco = TotalPreco();

  if (itens.length === 0) {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>Seu carrinho está vazio</h1>
        <p>Adicione produtos na página de catálogo para começar.</p>
        <Link to="/Catalog">Ver produtos</Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Meu Carrinho</h1>
      <p>Total de itens: {totalItens}</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Produto</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Preço</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Quantidade</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Subtotal</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '0.75rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={item.img} alt={item.nome} style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 8 }} />
                  <span>{item.nome}</span>
                </div>
              </td>
              <td style={{ textAlign: 'center' }}>R$ {item.preco.toFixed(2).replace('.', ',')}</td>
              <td style={{ textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => alterarQuantidade(item.id, -1)}
                  style={{ marginRight: 8 }}
                >
                  -
                </button>
                {item.quantidade}
                <button
                  type="button"
                  onClick={() => alterarQuantidade(item.id, 1)}
                  style={{ marginLeft: 8 }}
                >
                  +
                </button>
              </td>
              <td style={{ textAlign: 'center' }}>
                R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}
              </td>
              <td style={{ textAlign: 'center' }}>
                <button type="button" onClick={() => removerItem(item.id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
        Total do pedido: R$ {totalPreco.toFixed(2).replace('.', ',')}
      </div>
    </section>
  );
}

export default Cart;
