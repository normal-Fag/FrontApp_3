import { useState } from "react";
import { Tour } from "../components/tour";

export function Tours() {
    
    const [isToursHide, setToursHide] = useState<boolean>(false)

    const [tours, setTours] = useState([
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: true
        },
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: true
        },
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: false
        },
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: false
        },
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: false
        },
        {
            title: 'Название тура', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: false
        }
    ])
    
    return (
        <section className="tours container" id="tours">
            <h2 className="tours__title title">Туры</h2>
            <div className={`tours__list${ isToursHide ? ' tours__list--all-hidden-visible' : ''}`}>
                {tours.map((tour, index) => 
                    <Tour 
                        title={tour.title} 
                        description={tour.description} 
                        price={tour.price}
                        isVisible={tour.isVisible}/>
                )}
                <div className="tours__more">
                    <button 
                        type="button" 
                        className="tours__more-btn" 
                        onClick={(event) => {
                            if(!isToursHide) {
                                event.currentTarget.innerText = 'Скрыть'
                                setToursHide(!isToursHide)
                            }
                            else {
                                event.currentTarget.innerText = 'Больше туров'
                                setToursHide(!isToursHide) 
                            }
                        }}>
                        Больше туров
                    </button>
                </div>
            </div>
        </section>
    )
}