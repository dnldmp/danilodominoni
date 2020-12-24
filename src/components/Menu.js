export default function Menu(props){
    return(
        <a href={props.href}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </a>
    )
}