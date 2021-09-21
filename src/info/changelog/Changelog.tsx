import { Inactive } from "./inactive/inactive";

interface ChangelogProps {
    disable: () => void,
    enable: () => void,
    active: boolean,
}

export function Changelog(props: ChangelogProps){
    if(props.active){
        let weeks = new Array<Array<string>>();
        let week_one = new Array<string>();
        let week_two = new Array<string>();
        let week_three = new Array<string>();
        weeks.push(week_one);
        weeks.push(week_two);
        weeks.push(week_three);
        week_one.push("Created this page for the portfolio and added my name, email, and the repository this page is being hosted from to it.");
        week_one.push("Created the tic-tac-toe game and added it to this page (see the game above for the description.)");
        week_one.push("Added the changelog and the todo list to this page.")
        week_one.push("Added a button to hide all open apps to this page.")
        week_one.push("Added interface to show or hide react components to view different projects.")
        week_one.push("Updated tic-tac-toe game to tie when the game can no longer be won.")

        week_two.push("Added checkers board that the pieces can move in (The project is still a work in progress.")
        week_two.push("Added the cookie module with a button to add a cookie to the browser and a button to detect if the cookie has been issued.")

        week_three.push("Added the ability to defeat rival pieces in checkers (including eliminating a chain of them).")
        week_three.push("Added functionality to keep track of whose turn it is in checkers.");
    
        return <section>
            <div>
                {weeks.map((week: Array<string>, i: number) => {
                    return <div>
                        <h1 className="large-bold">Week {i+1}</h1>
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
                <Inactive func={props.enable}/>
            </div>
        )
    }

}