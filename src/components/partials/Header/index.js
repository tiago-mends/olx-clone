import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import cartLogo from '../../../components/images/cart_logo.png';
import cart from '../../../components/images/cart.svg';
import person from '../../../components/images/person.svg';
import personAdd from '../../../components/images/person_add.svg';

import { isLogged, doLogOut } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    const handleLogOut = () => {
        doLogOut();
        window.location.href = '/';
    };

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo" title="Online Classified Website">
                    <Link to="/">
                        <img src={cartLogo} alt="Logo" />
                        <span className="logo-1">Shop</span>
                        <span className="logo-2">Ez</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/myaccount" className="accButton">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="extButton">Sair</button>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="adButton"><img src={cart} alt="Anunciar"/>Anunciar</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signup" className="cadButton"><img src={personAdd} alt="Cadastrar"/>Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="cntButton"><img src={person} alt="Conectar"/>Conectar</Link>
                                </li>
                            </>
                        }                       
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;