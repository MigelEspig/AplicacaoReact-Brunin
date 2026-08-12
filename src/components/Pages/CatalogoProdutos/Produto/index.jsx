import { useParams } from "react-router-dom";
import { produtos } from "../../../data/produtos";
import { useCarrinho } from '../../../context/CarrinhoContext';


function Produto() {
    const { id } = useParams();
    const produto = produtos.find((p) => p.id === Number(id));
    const { adicionarItem } = useCarrinho();
    if (!produto) {
        return <div>Produto não encontrado</div>;
    }
    return (
    <section>
        <h2>{produto.nome}</h2>
        <p>Descrição: {produto.desc}</p>
        <p>Preço: R$ {produto.preco}</p>  
        <img src={produto.img} alt={produto.nome} />
        {produto.em_estoque ? 
        <>
            <p>Em estoque: Sim</p>
            <button onClick={() => adicionarItem({ id: produto.id, nome: produto.nome, preco: produto.preco, img: produto.img })}>Adicionar ao carrinho</button>
        </>
        :
        <p>Em estoque: Não</p>
        }
    </section> 
    )
}

export default Produto;