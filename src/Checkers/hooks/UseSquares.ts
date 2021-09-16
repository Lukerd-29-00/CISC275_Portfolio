import {useState} from 'react'
import {Position, Square, Move} from "../components/Board"

export function useSquares(): any{

    const newBoard = () => {
        let output = new Array<Array<Square>>(8);
        
        for(let row = 0;row < 8;row++){
            let newRow = new Array<Square>(8);
            for(let col = 0;col < 8;col++){
                let color: "black" | "white" = row % 2 !== col % 2 ? "black" : "white"
                let pieceColor: "black" | "red" = "red"
                if(row < 3){
                    pieceColor = "black";
                    let piece = color == "black" ? {color: pieceColor, king: false} : null;
                    newRow[col] = ({piece: piece,color: color,highlighted: false});
                }
                else if(row > 4){
                    let piece = color == "black" ? {color: pieceColor, king: false} : null;
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
        let output = new Array<Array<Square>>().concat(squares);

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

    const setSquaresHighlighted = (positions: Array<Position>,highlight: boolean) => {
        let newSquares = new Array<Array<Square>>().concat(squares);
        for(const position of positions){
            newSquares[position.row][position.col].highlighted = highlight;
        }
        updateSquares(newSquares);
    }
    return [squares,movePiece,setSquaresHighlighted]

}