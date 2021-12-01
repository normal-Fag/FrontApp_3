import { Tour } from "../components/tour";

export function Tours() {
    return (
        <section className="tours container" id="tours">
        <h2 className="tours__title title">Туры</h2>
        <div className="tours__list">
           <Tour/>
            <Tour/>
             <div className="tours__item tours__item--hidden">
                <div className="tours__gradient">
                    <div className="tours__content">
                        <h3 className="tours__name">Название</h3>
                        <p className="tours__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.</p>
                        <div className="tours__buy">
                            <p className="tours__price">От <b>10 000</b> р.</p>
                            <button className="tours__btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="tours__item tours__item--hidden">
                <div className="tours__gradient">
                    <div className="tours__content">
                        <h3 className="tours__name">Название</h3>
                        <p className="tours__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.</p>
                        <div className="tours__buy">
                            <p className="tours__price">От <b>10 000</b> р.</p>
                            <button className="tours__btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="tours__item tours__item--hidden">
                <div className="tours__gradient">
                    <div className="tours__content">
                        <h3 className="tours__name">Название</h3>
                        <p className="tours__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.</p>
                        <div className="tours__buy">
                            <p className="tours__price">От <b>10 000</b> р.</p>
                            <button className="tours__btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
             <div className="tours__item tours__item--hidden">
                <div className="tours__gradient">
                    <div className="tours__content">
                        <h3 className="tours__name">Название</h3>
                        <p className="tours__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.</p>
                        <div className="tours__buy">
                            <p className="tours__price">От <b>10 000</b> р.</p>
                            <button className="tours__btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="tours__more">
                <button type="button" className="tours__more-btn">Больше туров</button>
            </div>
        </div>
    </section>
    )
}