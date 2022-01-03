import { Sightseen } from "../components/sightseen"

export function Sightseens() {
    return(
        <section className="sightseens" id="sightseens">
            <div className="sightseens__container container">
                <h2 className="sightseens__title title">Достопримечательности</h2>
                <Sightseen title={'Тропа предков'}/>
                <Sightseen title={'Приисковый'} align={'left'}/>
                <Sightseen title={'Сундуки'}/>
            </div>
        </section>
    )
}