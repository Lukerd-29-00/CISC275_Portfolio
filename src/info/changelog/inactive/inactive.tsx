interface func {
    func: () => void
}
export function Inactive(props: func){
    return (
        <button className="link" onClick={props.func}>Changelog</button>
    )

}