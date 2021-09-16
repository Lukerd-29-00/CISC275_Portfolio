import {Position, Square} from "./Board"
interface SquareProps {
    position: Position,
    squareColor: "white" | "black",
    piece: boolean,
    highlighted: boolean,
    setActive: (arg: Position | null) => void,
    setSquaresHighlighted: (position: Array<Position>,highlight: boolean) => void 
    getTargets: (position: Position | null) => Array<Position>
    children: JSX.Element | undefined
}

export function CheckersSquare(props: SquareProps){
    return (
        <div key={props.position.col} className="col-sm">
            <button className={props.highlighted ? "square highlighted" : props.squareColor == "white" ? "square" : "square dark"} disabled={props.highlighted ? props.piece :!props.piece} onClick={() => {props.setActive(props.position); props.setSquaresHighlighted(props.getTargets(props.position),true)}}>
                {props.children}
            </button>
        </div>
    )
}