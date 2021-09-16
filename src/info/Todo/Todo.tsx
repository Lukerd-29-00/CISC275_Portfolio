
import { Inactive } from "./inactive/Inactive";

interface TodoProps{
    disable: () => void,
    enable: () => void,
    active: boolean,
}

export function Todo(props: TodoProps): JSX.Element{
    if(props.active){
        let weeks = new Array<Array<string>>();
        let week_one = new Array<string>();
        let week_two = new Array<string>();
        weeks.push(week_one);
        weeks.push(week_two)
        week_one.push("Add a singleplayer mode with a basic AI to tic-tac-toe.");
        week_one.push("Add a game of checkers to the portfolio.");
        week_one.push("Add a cookie generator that puts a non-functional cookie in your browser.")

        week_two.push("Finish Checkers game")
        week_two.push("Create a bootstrap-styled page")
        
    
        return <section>
            <div>
                {weeks.map((week: Array<string>, i: number) => {
                    return <div>
                        <h1 className="large-bold">Week {i+2}</h1>
                        <ul>
                            {week.map((value: string, j: number) => {
                            return <li key = {j}><p>{value}</p></li>
                            })}
                        </ul>
                    </div>
                })}
                </div>
                <footer>
                    <button className="small-link" onClick={props.disable}>collapse</button>
                </footer>
        </section>
    }
    else{
        return (
            <div>
                <Inactive enabler={props.enable}/>
            </div>
        )
    }

}