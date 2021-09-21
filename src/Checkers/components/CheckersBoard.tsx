import {useState} from 'react'
import { getPositionOfLineAndCharacter } from 'typescript';
import { useSquares } from '../hooks/UseSquares'
import { CheckersSquare, SquareProps } from './CheckersSquare';
export interface Position {
    row: number,
    col: number
}

//red pieces are on the bottom, black are on the top. Top row is zero, bottom row is 7.
export interface Piece {
    color: "black" | "red"
    king: boolean
}

export interface Square{
    piece: Piece | null
    color: "white" | "black"
    highlighted: boolean,
    position: Position
}

export interface Move {
    deletes: Square | null
    destination: Square
}

interface NoProps {

}


function getAdjacentSquares(square: Square, board: Array<Array<Square>>, piece?: Piece): Array<Square>{
    const up = [{row: square.position.row-1,col:square.position.col-1},{row:square.position.row-1,col:square.position.col+1}];
    const down = [{row: square.position.row+1,col:square.position.col-1},{row:square.position.row+1,col: square.position.col+1}]
    const upanddown = up.concat(down)
    let sqs = new Array<Position>();
    if(piece === undefined && square.piece === null){
        throw Error("No piece to get targets of!")
    }
    else if(piece === undefined){
        piece = (square.piece as Piece);
    }
    let output = new Array<Square>();
    if(piece.king){
        sqs = upanddown
    }
    else if(piece.color === "red"){
        sqs = up
    }
    else{
        sqs = down
    }
    for(const pos of sqs){
        if(pos.row >= 0 && pos.row <= 7 && pos.col >= 0 && pos.col <= 7){
            output.push(board[pos.row][pos.col]);
        }
    }
    return output;
}

function getAdjacentEnemyPieces(square: Square | null,board: Array<Array<Square>>,piece?: Piece): Array<Square>{
    if(square === null || square.piece === null){
        return [];
    }
    return getAdjacentSquares(square,board,piece).filter((sq: Square) => {
        return sq.piece !== null && sq.piece.color !== (square.piece as Piece).color
    })
}

function getAdjacentEmptySquares(square: Square | null, board: Array<Array<Square>>,piece?: Piece): Array<Square>{
    if(square == null || square.piece === null){
        return [];
    }
    return getAdjacentSquares(square,board,piece).filter((sq: Square) => {
        return sq.piece === null;
    })
}

export function CheckersBoard(props: NoProps){
    const [squares, movePiece, setSquaresHighlighted] = useSquares();
    const [selectedSquare, setSelectedSquare] = useState<Square | null>(null);
    const [redsTurn, setRedsTurn] = useState(true);
    const [isFirstMove, setIsFirstMove] = useState(true);
    const [selectedPiece, selectPiece] = useState<Piece | null>(null)
    const [startingSquare, setStartingSquare] = useState<Square | null>(null);
    const selectSquare = (sq: Square | null) => {
        let allSquares = new Array<Square>(64);
        for(let i = 0;i < 64;i++){
            allSquares[i] = squares[Math.floor(i/8)][i % 8]
        }
        setSquaresHighlighted(allSquares,false);
        setSelectedSquare(sq);
    }
    let moves = new Array<Move>();
    if(selectedSquare !== null && selectedPiece !== null && startingSquare !== null){

        //if this is the first move of the turn, allow moving into nearby empty spaces.
        if(isFirstMove || selectedSquare.piece !== selectedPiece){
            moves = moves.concat(getAdjacentEmptySquares(selectedSquare,squares,selectedPiece).map((square :Square) => {
                return {destination: square,deletes: (selectedSquare.piece as Piece).color !== selectedPiece.color ? selectedSquare : null}
            }))
        }
        //Add any squares that kill nearby enemies.
        moves = moves.concat(getAdjacentEnemyPieces(selectedSquare,squares,selectedPiece).filter((sq: Square) => {
            return getAdjacentEmptySquares(sq,squares,selectedPiece).length > 0
        }).map((place: Square) => {
                return {destination: place,deletes: null}
        }));
        
        //Currently breaks in a case where two different moves have the same destination; instead of highlighting destinations, it should highlight the piece to delete then let you select a square from that piece.
        //If no moves can be made, the other player gets their turn.

        if(moves.length === 0){
            setRedsTurn(!redsTurn);
            setIsFirstMove(true);
            selectSquare(null);
            setStartingSquare(null)
            selectPiece(null);
            let allSquares = new Array<Square>(64);
            for(let i = 0;i < 64;i++){
                allSquares[i] = squares[Math.floor(i/8)][i % 8]
            }
            setSquaresHighlighted(allSquares,false);
        }
        else{
            for(const move of moves){
                if(!squares[move.destination.position.row][move.destination.position.col].highlighted){
                    setSquaresHighlighted([move.destination],true)  
                }
            }
        }
    }
        return (
        <div className="container">
        {squares.map((row: Square[],rowIndex: number) => {
            return (
                    <div className="board-row" key={rowIndex}>
                        {row.map((square: Square,col: number) => {
                            let output: SquareProps = {
                                square: squares[rowIndex][col],
                                redsTurn: redsTurn,
                                moves: moves,
                                selectSquare: selectSquare,
                                movePiece: (move: Move) => {movePiece(startingSquare,move)},
                                firstMove: isFirstMove,
                                setFirstMove: setIsFirstMove,
                                selectPiece: selectPiece,
                                selectedPiece: selectedPiece,
                                startingSquare: startingSquare,
                                selectStartingSquare: setStartingSquare,
                                child: <></>    
                            }
    
                            if(square.piece !== null && square.piece.color === "black"){
                                output.child = <span className="dot" role="black-piece"/>
                                return CheckersSquare(output);
                            }
                            else if(square.piece !== null && square.piece.color === "red"){
                                output.child = <span className="dot red" role="red-piece"/>
                                return CheckersSquare(output);
                            }
                            return CheckersSquare(output);
    
                        })
                    }
                </div>
                )
            })}
            </div>
        )
    }

