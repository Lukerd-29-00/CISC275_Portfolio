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
    const [selectedSquare, selectSquare] = useState<Square | null>(null);
    const [redsTurn, setRedsTurn] = useState(true);
    const [isFirstMove, setIsFirstMove] = useState(true);
    const [selectedPiece, selectPiece] = useState<Piece | null>(null)
    let moves = new Array<Move>();
    if(selectedSquare !== null){
        //if this is the first move of the turn, allow moving into nearby empty spaces.
        if(isFirstMove){
            moves = moves.concat(getAdjacentEmptySquares(selectedSquare,squares).map((square :Square) => {
                return {destination: square,deletes: null}
            }))
        }
        //Add any squares that kill nearby enemies.
        const enemies = getAdjacentEnemyPieces(selectedSquare,squares,(selectedSquare.piece as Piece));
        for(const enemy of enemies){
            moves = moves.concat(getAdjacentEmptySquares(enemy,squares,(selectedSquare.piece as Piece)).map((destination: Square) => {
                return {destination: destination,deletes: enemy}
            }))
        }
        //If no moves can be made, the other player gets their turn.
        if(moves.length === 0){
            setRedsTurn(!redsTurn);
            setIsFirstMove(true);
            selectSquare(null);
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
                    
                    setSquaresHighlighted([move.destination],true);
                    
                }
            }
        }
    }
        return (
        <div className="container">
        {squares.map((row: Square[],rowIndex: number) => {
            return (
                    <div className="board-row">
                        {row.map((square: Square,col: number) => {
                            let output: SquareProps = {
                                square: squares[rowIndex][col],
                                redsTurn: redsTurn,
                                moves: moves,
                                selectSquare: selectSquare,
                                movePiece: (move: Move) => {movePiece(selectedSquare,move)},
                                firstMove: isFirstMove,
                                setFirstMove: setIsFirstMove,
                                selectPiece: selectPiece,
                                child: <></>    
                            }
    
                            if(square.piece !== null && square.piece.color === "black"){
                                output.child = <span className="dot"/>
                                return CheckersSquare(output);
                            }
                            else if(square.piece !== null && square.piece.color === "red"){
                                output.child = <span className="dot red"/>
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

