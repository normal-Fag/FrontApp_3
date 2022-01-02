interface TourItem  {
    title: string
    price: number
    description: string
    isVisible: boolean
}

export function Tour(props: TourItem) {

    return (
        <div className={`tours__item${ props.isVisible ? '' : ' tours__item--hidden'}`}>
            <div className="tours__gradient">
                <div className="tours__content">
                    <h3 className="tours__name">{props.title}</h3>
                    <p className="tours__description">{props.description}</p>
                    <div className="tours__buy">
                        <p className="tours__price">От <b>{props.price}</b> р.</p>
                        <button className="tours__btn">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}