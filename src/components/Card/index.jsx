import style from './Card.module.css'
import { useCarrinho } from '../../context/CarrinhoContext';
import { formatarPreco } from '../../utils/formatarPreco';

export default function Card({ produto }) {
    const { adicionarItem } = useCarrinho();

    return (
        <div className={style.Card}>
            <img className={style.img} src={produto.img} alt={produto.nome} />
            <h4 className={style.title}>{produto.nome}</h4>
            <p className={style.description}>{produto.desc || (produto.em_estoque ? 'Em estoque' : 'Fora de estoque')}</p>
            <p className={style.price}>R$ {formatarPreco(produto.preco)}</p>
            <button
                className={style.buttonCard}
                type="button"
                onClick={() => adicionarItem(produto)}
            >
                Comprar
            </button>
        </div>
    );
}

export {Card};