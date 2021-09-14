import {useState} from 'react'
import { useSquares } from './hooks/UseSquares'
export interface Position {
    row: number,
    col: number
}

//red pieces are on the bottom, black are on the top. Top row is zero, bottom row is 7.
export interface Piece {
    color: "black" | "white"
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

export function Board(props: any){
    const [squares, movePiece] = useSquares();

    return (
        <div className="container">
        {squares.map((row: Square[]) => {
            return (
                <div className="board-row">
                    {row.map((square: Square,i: number) => {
                        return <div key={i} className="col-sm"><button className = {square.color == "white" ? "square" : "square dark"} disabled={square.piece == null}>{square.piece != null ? "O" : ""} </button></div>
                    })
                }
            </div>
            )
        })}
        </div>
    )
    
}