import {useState} from 'react'
import { useSquares } from '../hooks/UseSquares'
import { CheckersSquare } from './CheckersSquare';
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
    highlighted: boolean
}

export interface Move {
    deletes: Array<Position>
    path: Array<Position>
}

function getTargets(position: Position | null,board: Array<Array<Square>>,empty: boolean = false): Array<Position>{
    let output = new Array<Position>();
    if(position == null){
        return output;
    }
    if(board[position.row][position.col].piece !== null && board[position.row][position.col].piece?.king){
        output.push({row: position.row+1,col:position.col+1});
        output.push({row:position.row+1,col:position.col-1});
        output.push({row:position.row-1,col:position.col+1});
        output.push({row:position.row-1,col:position.col-1});
    }
    else if(board[position.row][position.col].piece !== null && board[position.row][position.col].piece?.color == "black"){
        output.push({row: position.row+1,col:position.col+1});
        output.push({row:position.row+1,col:position.col-1});
    }
    else{
        output.push({row:position.row-1,col:position.col+1});
        output.push({row:position.row-1,col:position.col-1});
    }
    //ignore spaces outside the board.
    output = output.filter((value: Position) => {
        if(value.row < 8 && value.row > -1 && value.col < 8 && value.col > -1){
            return true;
        }
        return false;
    })
    if(!empty){
        output = output.filter((value: Position) => {
            return board[value.row][value.col].piece === null;
        })
        for(const pos of output){
            output = output.concat(getTargets(pos,board,true));
        }
    }
    else{
        output = output.filter((value: Position) => {
            return board[value.row][value.col].piece !== null;
        })
        for(const pos of output){
            output = output.concat(getTargets(pos,board));
        }
    }
    return output;
}

export function Board(props: any){
    const [squares, movePiece, setSquaresHighlighted] = useSquares();
    const [active, setActive] = useState<Position | null>(null);


    return (
        <div className="container">
        {squares.map((row: Square[],rowIndex: number) => {
            return (
                <div className="board-row">
                    {row.map((square: Square,col: number) => {
                        let output = {position: {row: rowIndex,col: col},squareColor: squares[rowIndex][col].color,piece: squares[rowIndex][col].piece !== null,setActive: setActive,highlighted:squares[rowIndex][col].highlighted,setSquaresHighlighted: setSquaresHighlighted,getTargets: ((position: Position | null) => {return getTargets(position,squares)}),children: <></>}

                        if(square.piece !== null && square.piece.color == "black"){
                            output.children = <span className="dot"/>
                            return CheckersSquare(output);
                        }
                        else if(square.piece !== null && square.piece.color == "red"){
                            output.children = <span className="dot red"/>
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