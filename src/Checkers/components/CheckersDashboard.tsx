import { DashboardProps } from "../../App";
import { Inactive } from "../inactive/Inactive";
import { CheckersBoard } from "./CheckersBoard";

export function CheckersDashboard(props: DashboardProps){
    if(props.active){
        return (
            <section>
                <CheckersBoard/>
                <footer>
                    <button className="link" onClick={props.disable}>description</button>
                </footer>
            </section>
        )
    }
    else{
        return <Inactive enabler={props.enable}/>
    }
}