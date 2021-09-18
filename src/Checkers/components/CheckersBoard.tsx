import {useState} from 'react'
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
    highlighted: boolean
}

export interface Move {
    deletes: Array<Position>
    path: Array<Position>
}

interface NoProps {

}


function getTargetsFromTarget(position: Position,board: Array<Array<Square>>,empty: boolean,piece: Piece): Array<Position>{
    let reachable = new Array<Position>();
    if(position === null ){
        return reachable;
    }
    if(piece.king){
        reachable.push({row: position.row+1,col:position.col+1});
        reachable.push({row:position.row+1,col:position.col-1});
        reachable.push({row:position.row-1,col:position.col+1});
        reachable.push({row:position.row-1,col:position.col-1});
    }
    else if(piece.color === "black"){
        reachable.push({row: position.row+1,col:position.col+1});
        reachable.push({row:position.row+1,col:position.col-1});
    }
    else{
        reachable.push({row:position.row-1,col:position.col+1});
        reachable.push({row:position.row-1,col:position.col-1});
    }
    //ignore spaces outside the board.
    reachable = reachable.filter((value: Position) => {
        if(value.row < 8 && value.row > -1 && value.col < 8 && value.col > -1){
            return true;
        }
        return false;
    })
    const output = new Array<Position>();
    if(empty){
        reachable = reachable.filter((value: Position) => {
            return board[value.row][value.col].piece !== null
        })
        for(const space of reachable){
            let targets = getTargetsFromTarget(space,board,false,piece);
            if(targets.length > 0){
                output.push(space);
                output.concat(targets);
            }
        }
    }
    else if((board[position.row][position.col].piece as Piece).color !== piece.color){
        reachable = reachable.filter((value: Position) => {
            return board[value.row][value.col].piece === null
        })
        for(const space of reachable){
            let targets = getTargetsFromTarget(space,board,true,piece);
            output.push(space);
            output.concat(targets);
        }
    }
    return output;
}

function getTargets(position: Position | null,board: Array<Array<Square>>): Array<Position>{
    let reachable = new Array<Position>();
    if(position === null || board[position.row][position.col] === null){
        return reachable;
    }
    const piece: Piece = (board[position.row][position.col].piece as Piece);
    if(piece.king){
        reachable.push({row: position.row+1,col:position.col+1});
        reachable.push({row:position.row+1,col:position.col-1});
        reachable.push({row:position.row-1,col:position.col+1});
        reachable.push({row:position.row-1,col:position.col-1});
    }
    else if(piece.color === "black"){
        reachable.push({row: position.row+1,col:position.col+1});
        reachable.push({row:position.row+1,col:position.col-1});
    }
    else{
        reachable.push({row:position.row-1,col:position.col+1});
        reachable.push({row:position.row-1,col:position.col-1});
    }
    //ignore spaces outside the board.
    reachable = reachable.filter((value: Position) => {
        if(value.row < 8 && value.row > -1 && value.col < 8 && value.col > -1){
            return true;
        }
        return false;
    })
    let output = new Array<Position>();
    for(const space of reachable){
        if(board[space.row][space.col].piece === null){
            output.push(space);
        }
        else {
            let targets = getTargetsFromTarget(space,board,false,piece)
            if(targets.length > 0){
                output.push(space);
                output = output.concat(targets);
            }
        }

    }
    return output;

    
}

export function CheckersBoard(props: NoProps){
    const [squares, movePiece, setSquaresHighlighted] = useSquares();
    const [active, setActive] = useState<Position | null>(null);
        return (
        <div className="container">
        {squares.map((row: Square[],rowIndex: number) => {
            return (
                    <div className="board-row">
                        {row.map((square: Square,col: number) => {
                            let output: SquareProps = {position: {row: rowIndex,col: col},squareColor: squares[rowIndex][col].color,piece: squares[rowIndex][col].piece !== null,setActive: setActive,highlighted:squares[rowIndex][col].highlighted,setSquaresHighlighted: setSquaresHighlighted,getTargets: ((position: Position | null) => {return getTargets(position,squares)}),squareSelected: active !== null,movePiece: active !== null ? (newPosition: Position) => {movePiece(active,newPosition)} : (newPosition: Position) => {return;},children: <></>, selected: active !== null ? active.row === rowIndex && active.col === col : false}
    
                            if(square.piece !== null && square.piece.color === "black"){
                                output.children = <span className="dot"/>
                                return CheckersSquare(output);
                            }
                            else if(square.piece !== null && square.piece.color === "red"){
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

