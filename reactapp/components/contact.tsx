export function Contact(props: {contact: string}) {
    return (
        <li className="contacts__item contacts__item--place">
            <p>{props.contact}</p>
        </li>
    )
}