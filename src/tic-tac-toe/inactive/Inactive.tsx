import { inactiveProps } from "../../App"

export function Inactive(props: inactiveProps){
    return (
    <div>
        <h2><button className="link" onClick={props.enabler}>Tic-Tac-Toe</button></h2>
        <p>This is based on this <a href="https://reactjs.org/tutorial/tutorial.html">React tutorial</a>, but it uses hooks and function components instead of the class-based approach. The stying is copied directly from the tutorial.</p>
    </div>
    )
}