import {useState} from 'react'
import {Position, Square, Move} from "../Board"

export function useSquares(): any{

    const newBoard = () => {
        let output = new Array<Array<Square>>(8);
        
        for(let row = 0;row < 8;row++){
            let newRow = new Array<Square>(8);
            for(let col = 0;col < 8;col++){
                let color: "black" | "white" = row % 2 !== col % 2 ? "black" : "white"
                if(row < 3){
                    let piece = color == "black" ? {color: color, king: false} : null;
                    newRow[col] = ({piece: piece,color: color,highlighted: false});
                }
                else if(row > 4){
                    let piece = color == "black" ? {color: color, king: false} : null;
                    newRow[col] = ({piece: piece,color: color,highlighted: false});
                }
                else{
                    newRow[col] = ({piece: null,color: color,highlighted: false});
                }
            }
            output[row] = newRow;
        }
        
        return output;
    }
    

    const [squares, updateSquares] = useState(newBoard);

    const movePiece = (currentPosition: Position,newPosition: Position) => {
        let output = new Array<Array<Square>>(8).concat(squares);

        const piece = output[currentPosition.row][currentPosition.col].piece;
        const destination = output[newPosition.row][newPosition.col]
        if(output[newPosition.row][newPosition.col] == null){
            output[newPosition.row][newPosition.col] = {piece: piece,color: destination.color,highlighted: destination.highlighted}
            updateSquares(output);
        }
        else{
            throw new Error("Tried to move a piece into an occupied square!")
        }
    }
    return [squares,movePiece]

}