import { Contact } from "../components/contact";
import { Yndexmap } from "../components/YandexMap";

export function Contacts() {
    return (
        <section className="contacts">
            <h2 className="contacts__title title">Контакты</h2>
            <div className="contacts__content container">
                <ul className="contacts__items">
                    <Contact contact={'655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67'} />
                    <li className="contacts__item contacts__item--phone">
                        <a href="tel:83902225335">8 (3902) 22-53-35</a>
                    </li>
                    <li className="contacts__item second_phone">
                        <a href="tel:83902225335">8 (3902) 22-53-35</a>
                    </li>
                    <li className="contacts__item contacts__item--mail">
                        <a href="mailto:kancler@vskhakasia.ru">kancler@vskhakasia.ru</a>
                    </li>
                </ul>
                <Yndexmap/>
            </div>
        </section>
    )
}