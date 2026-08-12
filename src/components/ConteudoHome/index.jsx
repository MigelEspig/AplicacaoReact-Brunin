import style from './ConteudoHome.module.css';
import { produtos } from '../../data/produtos';
import Card from '../Card';


function ConteudoHome() {
    const shuffled = [...produtos].sort(() => Math.random() - 0.5);
    const listadestaque = shuffled.slice(0, 3);
    return (
        <>
            <div className={style.container}>
                <h2 className={style.title}>Destaques:</h2>
                <div className={style.productsContainer}>
                    {listadestaque.map((produto) => (
                        <div key={produto.id} className={style.cardWrapper}>
                            <Card produto={produto} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ConteudoHome;