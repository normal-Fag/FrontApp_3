import { ReactHTMLElement, useEffect, useState } from "react";
import { Navigation } from "../components/navigation";

export function Header() {
    const [isMenuVisible, setMenuVisible] = useState<Boolean>(false); // useState для бургер-меню
    const [isHeaderScrolling, setHeaderScrolling] = useState<Boolean>(false); // useState для добавления класса scrolling к header
    // Хендлер для header
    const handlerPageScroll = () => {
        if(window.scrollY > window.innerHeight - 100) {
            setHeaderScrolling(true);
        }
        else {
            setHeaderScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlerPageScroll);

        return () => window.removeEventListener('scroll', handlerPageScroll);
    })
    
    return(
        <header className={`header${ isMenuVisible ? ' active' : ''}${ isHeaderScrolling ? ' scrolling': ''}`}>
        <div className="header__container container">
            <a href="#" className="header__logo"></a>
            <button 
                className="header__burger header__burger-active" 
                type="button" 
                onClick={() => setMenuVisible(!isMenuVisible)}>
                <span></span>
            </button> 
            <Navigation isItFooterNav={false}/>
        </div>
    </header>
    )
}