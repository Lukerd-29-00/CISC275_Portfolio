import { useState } from "react";
import { useRows } from "../hooks/useRows";
interface empty {

}

function isValidTurn(turn: string):turn is "X" | "O"{
    return turn == "X" || turn == "O";
}

export function Board(props: empty): JSX.Element{
    const [rows, updateSquare] = useRows();
    const [turn, changeTurn] = useState("X");

    return(
        <div className="game-board">
            {rows.map((row: Array<"X" | "O" | null>,i: number, array: Array<Array<"X" | "O" | null>>) => {
                return <div className="board-row">
                    {array[i].map((value: "X" | "O" | null,j: number) => {
                        if(isValidTurn(turn)){
                            return <button className="square" onClick={() => {updateSquare(j,i,turn); changeTurn(turn == "X" ? "O" : "X")}}>{value}</button>
                        }
                        else{
                            throw Error(`Invalid player ${turn}`);
                        }
                    })}
                </div>
            })}
        </div>

    )

}