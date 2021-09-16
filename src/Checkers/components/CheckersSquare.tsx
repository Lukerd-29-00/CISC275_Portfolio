import {Position} from "./CheckersBoard"
export interface SquareProps {
    position: Position,
    squareColor: "white" | "black",
    piece: boolean,
    highlighted: boolean,
    squareSelected: boolean,
    selected: boolean,
    setActive: (arg: Position | null) => void,
    setSquaresHighlighted: (position: Array<Position>,highlight: boolean) => void 
    getTargets: (position: Position | null) => Array<Position>
    movePiece: (newPosition: Position) => void
    children: JSX.Element | undefined
}

export function setNoSquaresHighlighted(setSquaresHighlighted: ((position: Array<Position>,highlight: boolean) => void)){
    for(let row = 0;row < 8;row++){
        for(let col = 0;col < 8;col++){
            setSquaresHighlighted([{row: row,col: col}],false);
        }
    }
}

export function CheckersSquare(props: SquareProps){
    if(!props.squareSelected){
    return (
        <div key={props.position.col} className="col-sm">
            <button className={props.squareColor === "white" ? "square" : "square dark"} disabled={(!props.piece) && !props.selected} onClick={props.selected ? () => {props.setActive(null); setNoSquaresHighlighted(props.setSquaresHighlighted);} : () => {props.setActive(props.position); props.setSquaresHighlighted(props.getTargets(props.position),true)}}>
                {props.children}
            </button>
        </div>
    )
    }
    else{
        return (
            <div key={props.position.col} className="col-sm">
            <button className={props.highlighted ? "square highlighted" : props.squareColor === "white" ? "square" : "square dark"} disabled={(!props.highlighted || props.piece) && !props.selected} onClick={props.selected ? () => {props.setActive(null); setNoSquaresHighlighted(props.setSquaresHighlighted);} : () => {props.setActive(null); setNoSquaresHighlighted(props.setSquaresHighlighted); props.movePiece(props.position)}}>
                {props.children}
            </button>
        </div>
        )
    }

}