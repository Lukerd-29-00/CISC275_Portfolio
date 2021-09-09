import { Board } from "./Board";
import { Inactive } from "../inactive/Inactive";

interface dashboardProps{
    disable: () => void,
    enable: () => void,
    active: boolean,
}

export function Dashboard(props: dashboardProps){
    return props.active ? (
        <section>
            <div>
                <Board />
            </div>
            <footer>
                <button className="small-link" onClick={props.disable}>description</button>
            </footer>
        </section>

    ) : (
        <Inactive enabler = {props.enable}/>
    )
}