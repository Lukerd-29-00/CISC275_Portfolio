
import { DashboardProps } from "../../App";

export function Todo(props: DashboardProps): JSX.Element{
    if(props.active){
        let weeks = new Array<Array<string>>();
        let week_one = new Array<string>();
        let week_two = new Array<string>();
        let week_three = new Array<string>();
        weeks.push(week_one);
        weeks.push(week_two)
        weeks.push(week_three)
        week_one.push("Add a singleplayer mode with a basic AI to tic-tac-toe.");
        week_one.push("Add a game of checkers to the portfolio.");
        week_one.push("Add a cookie generator that puts a non-functional cookie in your browser.")

        week_two.push("Finish Checkers game")
        week_two.push("Create a bootstrap-styled page")
        
        week_three.push("Overhaul the page to make it more visually appealing, to hone my css skills (which is definitely my weakest area).")
        week_three.push("Add a check to see if the player has won checkers, and display whose turn it is in a similar fashion to tic-tac-toe.")
    
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
        </section>
    }
    else{
        return (
            <>
            </>
        )
    }

}