import { useState } from "react";
import { Tour } from "../components/tour";

export function Tours() {
    
    const [isToursHide, setToursHide] = useState<boolean>(false)
    
    return (
        <section className="tours container" id="tours">
        <h2 className="tours__title title">Туры</h2>
        <div className="tours__list">
            <Tour isVisible={true}/>
            <Tour isVisible={true}/>
            <Tour isVisible={isToursHide}/>
            <Tour isVisible={isToursHide}/>
            <Tour isVisible={isToursHide}/>
            <Tour isVisible={isToursHide}/>
            <div className="tours__more">
                <button type="button" className="tours__more-btn" onClick={(event) => {
                    if(!isToursHide) {
                        event.currentTarget.innerText = 'Скрыть'
                        setToursHide(!isToursHide)
                    }
                    else {
                        event.currentTarget.innerText = 'Больше туров'
                        setToursHide(!isToursHide)
                    }
                    console.log(event.currentTarget.innerText)
                }}>Больше туров</button>
            </div>
        </div>
    </section>
    )
}