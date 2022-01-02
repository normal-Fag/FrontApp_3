import { useState } from "react"
import { start } from "repl";
import { EventEmitter } from "stream";

export function Navigation(props: {isItFooterNav: boolean}) {

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

    const scrollToBlock = (e: MouseEvent) => {
        e.preventDefault();
        // const yOffset = -72;
        let block = document.querySelector('.' + e.currentTarget.getAttribute('href'));
        // const y = block?.getBoundingClientRect().top + yOffset + window.pageYOffset;

        // window.scrollTo({
        //     top: y,
        //     behavior: 'smooth'
        // })

        block && block.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return(
        <nav className={ props.isItFooterNav ? 'bottom-menu' : 'menu menu-active'}>
            <h3 className="bottom-menu__title">Меню</h3>
            <ul className={props.isItFooterNav ? 'bottom-menu__list' : 'menu__list'}>
                {navigation.map((navlink, index) => 
                    <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                        <a 
                            href={navlink.href} 
                            className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}
                            onClick={e => scrollToBlock(e)}
                            >{navlink.title}</a> 
                    </li>
                )}
            </ul>
        </nav>
    )
}