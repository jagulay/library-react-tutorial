import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LibraryLogo from '../assets/Library.svg'

function Nav () {
    return (
        <nav>
            <nav className="container">
                <a href="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon="fa-solid fa-bars" />                    
                    </button>
                    <li className="nav__icon">
                        <a href="" className="nav__link">
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                        </a>
                        <span className='cart__length'>3</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="fa-solid fa-xmark" />
                    </button>
                </div>
                <ul className="menu__links">
                    <li className="menu__list">
                        <a href="/" className='menu__link'>
                            Home
                        </a>
                    </li>
                    <li className="menu__list">
                        <a href="/" className='menu__link'>
                            Books
                        </a>
                    </li>
                    <li className="menu__list">
                        <a href="/" className='menu__link'>
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </nav>
    );
}

export default Nav