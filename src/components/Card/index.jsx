import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useCarrinho } from '../../context/CarrinhoContext';

export default function Card({ produto }) {
    const { adicionarItem } = useCarrinho();

    return (
        <div className={style.Card}>
            <img className={style.img} src={produto.img} alt={produto.nome} />
            <h4 className={style.title}>{produto.nome}</h4>
            <p className={style.description}>{produto.desc || (produto.em_estoque ? 'Em estoque' : 'Fora de estoque')}</p>
            <p className={style.price}>R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
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