import { useState } from "react";
import { Tour } from "../components/tour";

export function Tours() {
    
    const [isToursHide, setToursHide] = useState<boolean>(false)

    const [tours, setTours] = useState([
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: true
        },
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: true
        },
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: isToursHide
        },
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: isToursHide
        },
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: isToursHide
        },
        {
            title: 'В страну мошонок', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque.',
            price:10000, 
            isVisible: isToursHide
        }
    ])
    
    return (
        <section className="tours container" id="tours">
            <h2 className="tours__title title">Туры</h2>
            <div className="tours__list">

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
                        console.log(tours)
                    }
                    else {
                        event.currentTarget.innerText = 'Больше туров'
                        setToursHide(!isToursHide) 
                        console.log(tours)
                    }
                }}>Больше туров</button>
            </div>
        </div>
    </section>
    )
}