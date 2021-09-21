import {Piece, Square, Move} from "./CheckersBoard"
export interface SquareProps {
    square: Square
    redsTurn: boolean
    moves: Array<Move>
    selectSquare: (square: Square) => void
    movePiece: (move: Move) => void
    firstMove: boolean
    setFirstMove: (firstMove: boolean) => void
    selectPiece: (piece: Piece | null) => void
    selectStartingSquare: (square: Square | null) => void
    child: JSX.Element
}

export function CheckersSquare(props: SquareProps){
    const moving: boolean = props.moves.length > 0
    const onClick = () => {
        if(moving){
            for(const move of props.moves){
                if(move.destination.position.row === props.square.position.row && move.destination.position.col === props.square.position.col){
                    if(move.destination.piece === null){
                        props.movePiece(move);
                        props.setFirstMove(false);
                        if(move.deletes !== null){
                            props.selectSquare(move.destination);
                            props.selectStartingSquare(move.destination)
                        }
                    }
                    else{
                        props.selectSquare(props.square)
                    }
                }
            }
        }
        else{
            props.selectStartingSquare(props.square);
            props.selectSquare(props.square);
            props.selectPiece(props.square.piece)
        }
    }
    return (
            <button className={props.square.highlighted ? "square highlighted" : props.square.color === "black" ? "square dark" : "square"} onClick={onClick} disabled={moving ? !props.square.highlighted : !(props.square.piece !== null && ((props.redsTurn && props.square.piece.color === "red") || (!props.redsTurn && props.square.piece.color === "black")))} key={props.square.position.col}>{props.child}</button>
    )

}