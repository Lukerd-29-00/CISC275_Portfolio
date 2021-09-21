import {useState} from 'react'
import { moveEmitHelpers } from 'typescript';
import {Move, Piece, Square} from "../components/CheckersBoard"

export function useSquares(): [Array<Array<Square>>,(square: Square | null,move: Move) => void,(squares: Array<Square>,highlight: boolean) => void]{

    const newBoard = () => {
        let output = new Array<Array<Square>>(8);
        
        for(let row = 0;row < 8;row++){
            let newRow = new Array<Square>(8);
            for(let col = 0;col < 8;col++){
                let color: "black" | "white" = row % 2 !== col % 2 ? "black" : "white"
                let pieceColor: "black" | "red" = "red"
                if(row < 3){
                    pieceColor = "black";
                    let piece = color === "black" ? {color: pieceColor, king: false} : null;
                    newRow[col] = ({position: {row: row,col: col},piece: piece,color: color,highlighted: false});
                }
                else if(row > 4){
                    let piece = color === "black" ? {color: pieceColor, king: false} : null;
                    newRow[col] = ({position: {row: row,col: col},piece: piece,color: color,highlighted: false});
                }
                else{
                    newRow[col] = ({position: {row: row,col: col},piece: null,color: color,highlighted: false});
                }
            }
            output[row] = newRow;
        }
        
        return output;
    }
    

    const [squares, updateSquares] = useState(newBoard);


    const movePiece = (start: Square | null, move: Move) => {
        const newSquares = new Array<Array<Square>>().concat(squares);
        if(move.destination.piece !== null){
            throw Error("Tried to move to an occupied space!")
        }
        else if(start === null){
            return;
        }
        newSquares[move.destination.position.row][move.destination.position.col].piece = start.piece;
        newSquares[start.position.row][start.position.col].piece = null;
        if(move.deletes !== null){
            newSquares[move.deletes.position.row][move.deletes.position.col].piece = null;
        }
        for(const row of newSquares){
            for(const square of row){
                square.highlighted = false;
            }
        }
        updateSquares(newSquares);

    }
    
    const setSquaresHighlighted = (targetSquares: Array<Square>,highlight: boolean) => {
        const newSquares = new Array<Array<Square>>().concat(squares)
        for(const square of targetSquares){
            newSquares[square.position.row][square.position.col].highlighted = highlight;
        }
        updateSquares(newSquares);
    }

    return [squares, movePiece, setSquaresHighlighted]

}