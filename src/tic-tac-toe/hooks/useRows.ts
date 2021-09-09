import { useState } from "react";

function emptySquares(){
    const output = Array<Array<"X" | "O" | null>>(3);
    for(let i = 0;i < output.length;i++){
        let row = new Array<null>(3);
        for(let j = 0;j < row.length;j++){
            row[j] = null;
        }
    output[i] = row;
    }
    return output;
}

export function useRows(): [Array<Array<"X" | "O" | null>>,(column: number, row: number, turn: "X" | "O") => undefined, () => void]{
    const [rows, updateRows] = useState(emptySquares);
    const updateSquare = (column: number,row: number,turn: "X" | "O") => {
        let newRows = new Array<Array<"X" | "O" | null>>(3);
        let newRow = new Array<"X" | "O" | null>(3);
        for(let i = 0;i < newRow.length;i++){
            if(i !== column){
                newRow[i] = rows[row][i]
            }
            else{
                newRow[i] = turn;
            }
        }
        for(let i = 0;i < newRows.length;i++){
            if(i !== row){
                newRows[i] = rows[i]
            }
            else{
                newRows[i] = newRow;
            }
        }
        updateRows(newRows);
        return undefined;
        
    }
    const emptyAll = () => {
        updateRows(emptySquares());
    }
    return [rows, updateSquare, emptyAll];

}