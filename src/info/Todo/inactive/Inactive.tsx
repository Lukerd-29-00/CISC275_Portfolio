import { inactiveProps } from "../../../App";

export function Inactive(props: inactiveProps){
    return ( 
        <div>
            <button className="link" onClick={props.enabler}>Todo</button>
        </div>
    );
}