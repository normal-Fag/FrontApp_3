import { Navigation } from "../components/navigation"

export function Footer() {
    return(
        <footer className="footer">
            <div className="footer__content container">
                <Navigation isItFooterNav={true}/>
                <div className="footer__contacts">
                    <h3 className="bottom-menu__title">Контакты</h3>
                    <p>655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</p>
                    <p>Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71</p>
                    <p>Электронная почта: kancler@vskhakasia.ru</p>
                </div>
                <p className="footer__text">
                    Официальный сайт Агенства Туризма Республики Хакасия © 2021
                </p>
            </div>
        </footer>
    )
}