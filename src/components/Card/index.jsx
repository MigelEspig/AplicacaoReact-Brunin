import style from './Card.module.css'
import paoMofado from '../../Imgs/pao-Mofado.jpg'
import ConteudoPrincipal from '../ConteudoPrincipal';

export default function Card({ title, price, desc, img }) {
    return <>
        <div className={style.Card}>
                <img className={style.img} src={img} alt="imagemPao"/>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{desc}</p>
                <p className={style.price}>R$ {price.toFixed(2).replace('.', ',')}</p>
        </div>
    </>
}

export {Card};