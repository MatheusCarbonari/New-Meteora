import style from './Header.module.css';
import logo from '../../../Assets/img/Logo desktop.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>

            <nav className={style.navContainer}>

                {/* Logo do Cabeçalho */}
                <div className={style.logoContainer}>
                    <img src={logo} alt='Logo Meteora' />
                </div>

                {/* Menu do Cabeçalho */}
                <ul className={style.listMenuContainer}>
                    <li>
                        <NavLink
                            className={style.navLinkHeader}
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navLinkHeader}>
                            Nossas Lojas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navLinkHeader}>
                            Novidades
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navLinkHeader}>
                            Promoções
                        </NavLink>
                    </li>
                </ul>

                {/* Input de pesquisa */}
                <div className={style.inputDePesquisa}>
                    <input className={style.campoDePesquisa} type="search" placeholder="Digite o produto" />
                    <input className={style.botaoDePesquisa} type="submit" value="Buscar" />
                </div>

            </nav>

        </header>
    )
}

export default Header;