import React from "react"

export interface SightseenItem {
    align?: string,
    title: string
}

export function Sightseen(props: SightseenItem) {
    return(
        <div className={props.align === 'left' ? 'sightseens__item left-align' : 'sightseens__item'}>
            <div className="sightseens__img">
                <img src="img/sightseens/b.jpg" alt="photo"/>
            </div>
            <div className="sightseens__text">
                <h3 className="sightseens__subtitle subtitle">{props.title}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium orci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornare condimentum fermentum. Integer mattis pretium tortor dictum tristique. Donec in congue mauris. Quisque vitae nisi ultricies, efficitur odio vel, porta nulla. Donec porta, mauris nec pharetra mollis, diam lorem luctus velit, nec ultricies nunc quam posuere dui. Donec at nisl lorem. Sed vitae sapien metus. In erat felis, pharetra vitae libero eu, posuere accumsan odio...
                </p>
                <p className="sightseens__text-hidden">
                    Fusce eget mauris ullamcorper mi fermentum ullamcorper. Donec egestas mollis dolor, a dignissim dolor venenatis eu. Suspendisse quis quam laoreet, mattis neque eu, feugiat lectus. Maecenas non urna mollis, ultricies eros vel, ullamcorper risus. Nulla hendrerit venenatis erat, in rhoncus quam placerat nec. Ut feugiat nisi in mattis lacinia. Morbi eleifend, neque eget dapibus scelerisque, ligula nisl malesuada odio, et imperdiet metus mi pretium enim.
                </p>
            </div>
        </div>
    )
}