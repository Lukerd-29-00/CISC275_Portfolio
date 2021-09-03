import { useState } from "react";

export function useRows(): [Array<Array<"X" | "O" | null>>,(column: number, row: number, turn: "X" | "O") => undefined]{
    let init = new Array<Array<"X" | "O" | null>>(3);
    for(let i = 0;i < init.length;i++){
        let row = new Array<null>(3);
        for(let j = 0;j < row.length;j++){
            row[j] = null;
        }
        init[i] = row;
    }
    const [rows, updateRows] = useState(init);
    const updateSquare = (column: number,row: number,turn: "X" | "O") => {
        if(rows[row][column] == null){
            let newRows = new Array<Array<"X" | "O" | null>>(3);
            let newRow = new Array<"X" | "O" | null>(3);
            for(let i = 0;i < newRow.length;i++){
                if(i != column){
                    newRow[i] = rows[row][i]
                }
                else{
                    newRow[i] = turn;
                }
            }
            for(let i = 0;i < newRows.length;i++){
                if(i != row){
                    newRows[i] = rows[i]
                }
                else{
                    newRows[i] = newRow;
                }
            }
            updateRows(newRows);
            return undefined;
        }
    }
    return [rows, updateSquare];

}