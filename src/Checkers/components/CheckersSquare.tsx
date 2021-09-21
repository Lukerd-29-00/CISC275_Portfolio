import {Piece, Square, Move} from "./CheckersBoard"
export interface SquareProps {
    square: Square
    redsTurn: boolean
    moves: Array<Move>
    selectSquare: (square: Square | null) => void
    movePiece: (move: Move) => void
    firstMove: boolean
    setFirstMove: (firstMove: boolean) => void
    selectPiece: (piece: Piece | null) => void
    selectStartingSquare: (square: Square | null) => void
    selectedPiece: Piece | null
    startingSquare: Square | null
    child: JSX.Element
}

export function CheckersSquare(props: SquareProps){
    const deselect = props.square.position.row === props.startingSquare?.position.row && props.square.position.col === props.startingSquare?.position.col && props.firstMove
    const moving: boolean = props.moves.length > 0
    const onClick = () => {
        if(deselect){
            props.selectStartingSquare(null);
            props.selectSquare(null);
            props.selectPiece(null);
            props.setFirstMove(true);
        }
        else if(moving){
            for(const move of props.moves){
                if(move.destination.position.row === props.square.position.row && move.destination.position.col === props.square.position.col){
                    if(move.destination.piece === null){
                        props.movePiece(move);
                        props.setFirstMove(false);
                        if(move.deletes !== null){
                            props.selectSquare(move.destination);
                            props.selectStartingSquare(move.destination)
                        }
                        if(move.destination.position.row === 0 && (props.selectedPiece as Piece).color === "red" && !(props.selectedPiece as Piece).king){
                            props.selectStartingSquare({position: move.destination.position, color: move.destination.color, highlighted: move.destination.highlighted, piece: {color: "red",king: true}})
                            props.selectPiece({color: "red",king: true});  
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
            <button className={props.square.highlighted ? "square highlighted" : props.square.color === "black" ? "square dark" : "square"} onClick={onClick} disabled={moving ? !deselect && !props.square.highlighted : !(props.square.piece !== null && ((props.redsTurn && props.square.piece.color === "red") || (!props.redsTurn && props.square.piece.color === "black")))} key={props.square.position.col}>{props.child}</button>
    )

}