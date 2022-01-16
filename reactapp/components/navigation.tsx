import { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

export interface NavigationItem {
    isItFooterNav: boolean,
    updateMenuVisible?: Function
}

export function Navigation(props: NavigationItem) {
    const [navigation, setNavigation] = useState([
        {
            href: 'welcome-section',
            title: 'Главная'
        },
        {
            href: 'sightseens',
            title: 'Достопримечательности'
        },
        {
            href: 'tours',
            title: 'Туры'
        },
        {
            href: 'contacts',
            title: 'Контакты'
        },
    ])
    // скролл по ссылкам был реализован при помощи пакета React-scroll
    return(
        <nav className={ props.isItFooterNav ? 'bottom-menu' : 'menu menu-active'}>
            <h3 className="bottom-menu__title">Меню</h3>
            <ul className={props.isItFooterNav ? 'bottom-menu__list' : 'menu__list'}>
                {navigation.map((navlink, index) => 
                    <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                            <Link
                                className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}
                                onClick={() => props.updateMenuVisible ? props.updateMenuVisible(false) : console.log()}
                                activeClass="menu__link--current-section"
                                to={navlink.href}
                                smooth={true}
                                offset={-110}
                                duration={500}
                                spy={true}
                            >{navlink.title}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}