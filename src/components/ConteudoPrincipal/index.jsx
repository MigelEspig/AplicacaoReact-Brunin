import { useState } from 'react';
import Card from '../Card';
import style from './ConteudoPrincipal.module.css';
import { produtos } from '../../data/produtos';

function ConteudoPrincipal() {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    const lista_produtos = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(termoPesquisa.trim().toLowerCase())
    );

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <form className={style.formBusca} onSubmit={handleSubmit}>
                <label className={style.labelBusca} htmlFor="pesquisa-produtos">
                    Pesquisar produtos
                </label>
                <div className={style.inputGroup}>
                    <input
                        id="pesquisa-produtos"
                        type="text"
                        value={termoPesquisa}
                        onChange={(event) => setTermoPesquisa(event.target.value)}
                        placeholder="Digite o nome do produto"
                    />
                    <button type="submit">Buscar</button>
                </div>
            </form>

            {lista_produtos.length === 0 ? (
                <p className={style.semResultado}>
                    Nenhum produto encontrado para: "{termoPesquisa}"
                </p>
            ) : (
                <div className={style.container}>
                    {lista_produtos.map((produto) => (
                        <Card key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </>
    );
}

export default ConteudoPrincipal;