import { useState } from "react"

export function Navigation(props: {isItFooterNav: boolean}) {
    // const body = document.querySelector('body');
    // const header = document.getElementById('.header');
    // const headerBurger = document.getElementById('.header__burger');
    // const headerMenuList = document.getElementById('.menu')

    const linksOnClick = (body: HTMLElement, header: HTMLElement, 
        headerBurgerBtn: HTMLElement, menuList: HTMLElement, pointerEvent: EventTarget) => {
        console.log(pointerEvent);
        // pointerEvent.preventDefault();
    
        // const blockValue = pointerEvent.dispatchEvent.
        // document.getElementById('.' + pointerEvent.currentTarget.getAttribute('href')).getBoundingClientRect().top + pageYOffset - 110;
    
        // window.scrollTo({
        //     top: blockValue ,
        //     behavior: 'smooth'
        // });
        // body.classList.remove('lock');
        // header.classList.remove('active');
        // headerBurgerBtn.classList.remove('active');
        // menuList.classList.remove('active');
    }

    return(
        <nav className={ props.isItFooterNav ? 'bottom-menu' : 'menu menu-active'}>
            <h3 className="bottom-menu__title">Меню</h3>
            <ul className={props.isItFooterNav ? 'bottom-menu__list' : 'menu__list'}>
                <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                    <a 
                        href="welcome-section" 
                        className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}
                        // onClick={(event) => linksOnClick(body, header, headerBurger, headerMenuList, event)}
                        >Главная</a>
                </li>
                <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                    <a href="sightseens" className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}>Достопримечательности</a>
                </li>
                <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                    <a href="tours" className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}>Туры</a>
                </li>
                <li className={props.isItFooterNav ? 'bottom-menu__item' : 'menu__item'}>
                    <a href="contacts" className={props.isItFooterNav ? 'bottom-menu__link' : 'menu__link'}>Контакты</a>
                </li>
            </ul>
        </nav>
    )
}