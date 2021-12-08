import { useState } from "react";

export function Header() {
    const [isMenuVisible, setMenuVisible] = useState<Boolean>(false);

    const [isHeaderScrolling, setHeaderScrolling] = useState<Boolean>(false);

    return(
        <header className={`header${ isMenuVisible ? ' active' : ''}${ isHeaderScrolling ? ' scrolling': ''}`}>
        <div className="header__container container">
            <a href="#" className="header__logo">
            </a>
            <button className="header__burger header__burger-active" type="button" onClick={() => setMenuVisible(!isMenuVisible)}>
                <span></span>
            </button> 
            <nav className="menu menu-active">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="welcome-section" className="menu__link">Главная</a>
                    </li>
                    <li className="menu__item">
                        <a href="sightseens" className="menu__link">Достопримечательности</a>
                    </li>
                    <li className="menu__item">
                        <a href="tours" className="menu__link">Туры</a>
                    </li>
                    <li className="menu__item">
                        <a href="contacts" className="menu__link">Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}