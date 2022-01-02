import { YMaps, Map, Placemark } from 'react-yandex-maps';

export function Yndexmap() {
    return (
        <div className="contacts__map">
            <YMaps 
                query={{
                    apikey: 'b2254737-2757-42fd-891c-b1d5e098aafa&lang=ru_RU',
                }}
                version={"2.1"}
            >
                <div>
                    <Map 
                        defaultState={{ 
                            center: [53.721642, 91.442226], 
                            zoom: 16, 
                            behaviors: ['default', 'scrollZoom'],
                            controls: [],
                        }} 
                        className="contacts__map"
                    >
                        <Placemark 
                            geometry={[53.721642, 91.442226]} 
                            properties={
                                {
                                    iconCaption: 'Агенство туризма Республики Хакасия',
                                    hintContent: 'Республика Хакасия, г. Абакан, пр. Ленина, д. 67',
                                }
                            }
                            options={
                                {
                                    preset: 'islands#dotIconWithCaption',
                                    iconColor: '#111',
                                    cursor: 'pointer',
                                    hasHint: true,
                                }
                            }
                        />
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}