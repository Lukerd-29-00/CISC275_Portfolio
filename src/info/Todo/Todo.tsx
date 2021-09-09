
import { Inactive } from "./inactive/Inactive";

interface TodoProps{
    disable: () => void,
    enable: () => void,
    active: boolean,
}

export function Todo(props: TodoProps): JSX.Element{
    if(props.active){
        let output = new Array<string>();
        output.push("Add a singleplayer mode with a basic AI to tic-tac-toe.");
        output.push("Add a game of checkers to the portfolio.");
        output.push("Add a cookie generator that puts a non-functional cookie in your browser.")
        return (
            <div>
                <ul>
                    {output.map((content: string, i: number) => {
                        return <li key={i}><p>{content}</p></li>;
                    })}
                </ul>
                <button className="small-link" onClick={props.disable}>collapse</button>
            </div>
        )
    }
    else{
        return <Inactive enabler = {props.enable}/>
    }
}