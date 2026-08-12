import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return <>
        <header className={styles.header}>
            <div className={styles.headerbox}>
                <h2>Pomba Eats</h2>
                <p>Comidas deliciosas vindo diretamente da Pomba Kitchen</p>
            </div>
            <div className={styles.headerBox}>
                <nav className={styles.HeaderNav}>
                    <Link className={styles.HeaderLink} to="/">Home</Link>
                    <Link className={styles.HeaderLink} to="/Catalog">Produtos</Link>
                    <Link className={styles.HeaderLink} to="/Cart">Carrinho</Link>
                    <Link className={styles.HeaderLink} to="/Pedidos">Pedidos</Link>
                </nav>
            </div>

        </header>
  </>
    
}

export { Header };