import Card from '../Card';
import style from './ConteudoPrincipal.module.css';
import { produtos } from '../../data/produtos';

function ConteudoPrincipal() {

    let randomInt = Math.floor(Math.random() * produtos.length) + 1;
    const lista_produtos = produtos;
    return (
        <div className={style.container}>
            {lista_produtos.map((produto) => (
                <Card key={produto.id}
                    title={produto.nome}
                    price={produto.preco}
                    desc={produto.em_estoque}
                    img={produto.img}
                />
            ))}
        </div>
    )
}

export default ConteudoPrincipal;