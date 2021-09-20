import { inactiveProps } from "../../App"

export function Inactive(props: inactiveProps){
    return (
    <div>
        <h2><button className="link" onClick={props.enabler}>Checkers (WIP)</button></h2>
        <p>This is a work-in-progress checkers game. It is not directly based on any tutorial. Currently, the pieces can only move to an empty, diagonally-adjacent square. Click on a piece to see where it can move, and click on a highlighted square to move. The game does not detect when the game is won, and there are occasional crashes caused by a move that could delete one of two possible pieces.</p>
    </div>
    )
}