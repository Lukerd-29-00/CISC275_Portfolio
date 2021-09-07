
import { Inactive } from "./inactive/Inactive";

interface TodoProps{
    disable: () => void,
    enable: () => void,
    active: boolean,
}

export function Todo(props: TodoProps): JSX.Element{
    if(props.active){
        let output = new Array<string>();
        output.push("Add an AI to the tic-tac-toe game for a singleplayer mode");
        output.push("Add a checkers game to the portfolio");
        return (
            <div>
                <hr/>
                <ul>
                    {output.map((content: string, i: number) => {
                        return <li key={i}><p>{content}</p></li>;
                    })}
                </ul>
                <button className="small-link" onClick={props.disable}>collapse</button>
                <hr/>
            </div>
        )
    }
    else{
        return <Inactive enabler = {props.enable}/>
    }
}