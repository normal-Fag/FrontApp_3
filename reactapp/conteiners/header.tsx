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

    // Отслеживание скролла 
    useEffect(() => {
        window.addEventListener('scroll', handlerPageScroll);
        return () => window.removeEventListener('scroll', handlerPageScroll);
    })

    // Создадим 'бумеранг' для передачи данных между header и navigation
    const removeMenuVisible = (value: Boolean) => {
        setMenuVisible(value);
        document.querySelector('body')?.classList.remove('lock');
    }
    
    return(
        <header className={`header${ isMenuVisible ? ' active' : ''}${ isHeaderScrolling ? ' scrolling': ''}`}>
            <div className="header__container container">
                <a href="#" className="header__logo"></a>
                <button 
                    className="header__burger header__burger-active" 
                    type="button" 
                    onClick={
                        () => {
                            setMenuVisible(!isMenuVisible)
                            document.querySelector('body')?.classList.toggle('lock')
                        }
                    }
                >
                    <span></span>
                </button> 
                <Navigation isItFooterNav={false} updateMenuVisible={removeMenuVisible}/>
            </div>
        </header>
    )
}