interface TourItem  {
    title: string
    img: string
    price: number
    description: string
}

export function Tour(props) {

    let isTourVisible = props.isVisible;

    return (
        <div className={`tours__item${ isTourVisible ? '' : ' tours__item--hidden'}`}>
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
    )
}