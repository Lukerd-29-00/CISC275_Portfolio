import { inactiveProps } from "../../App"

export function Inactive(props: inactiveProps){
    return (
    <div>
        <h2><button className="link" onClick={props.enabler}>Checkers (WIP)</button></h2>
        <p>This is a work-in-progress checkers game. It works exactly like checkers, but there is currently no win condition. Kings have a gold star in them, and you can deselect a piece that you're moving if you haven't moved yet by clicking on it.</p>
    </div>
    )
}