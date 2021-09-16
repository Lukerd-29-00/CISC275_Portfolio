import { TicTacToeBoard } from "./TicTacToeBoard";
import { Inactive } from "../inactive/Inactive";
import { DashboardProps } from "../../App";

export function TicTacToeDashboard(props: DashboardProps){
    return props.active ? (
        <section>
            <div>
                <TicTacToeBoard />
            </div>
            <footer>
                <button className="small-link" onClick={props.disable}>description</button>
            </footer>
        </section>

    ) : (
        <Inactive enabler = {props.enable}/>
    )
}