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
        week_one.push("Created page and basic description for its purpose.");
        week_one.push("Added interface to show or hide components to view different projects.")
        week_one.push("Updated tic-tac-toe game to tie when the game can no longer be won.")
        weeks.push(week_one);
    
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
                <hr/>
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