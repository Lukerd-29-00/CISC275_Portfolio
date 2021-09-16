import { useState } from 'react';
import './App.scss';
import {Dashboard} from "./tic-tac-toe/components/Dashboard";
import {Changelog} from "./info/changelog/Changelog";
import { Todo } from './info/Todo/Todo';
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Board} from "./Checkers/components/Board"
export interface inactiveProps{
  enabler: () => void
}

function App() {
  const [viewing, updateViewing] = useState(() => {return new Array<(props: any) => JSX.Element>();});
  function addViewing(component: (props: any) => JSX.Element): void{
    updateViewing(viewing.concat([component]))
  }

  function stopViewing(component: (props: any) => JSX.Element): void{
    const i = viewing.indexOf(component);
    if(i !== -1){
      updateViewing(viewing.slice(0,i).concat(viewing.slice(i+1,viewing.length)));
    }
  }

  function viewNothing(): void{
    updateViewing(new Array<(props: any) => JSX.Element>());
  }

  async function setCookie(): Promise<void>{
    const cookies = new Cookies();
    cookies.set("test","this is a test");
  }

  function viewCookie(): void{
    const cookies = new Cookies();
    if(cookies.get("test")){
      alert("You have a cookie!");
    }
    else{
      alert("You are cookieless!");
    }
  }

  return (
  <>
  <section>
    <div>
      Hi! my name is Lucas Driscoll (email <a href = "mailto:lucasd@udel.edu">lucasd@udel.edu</a>), and this is the first page of my CISC 275-010 portfolio! this page is hosted on github pages using <a href="https://github.com/Lukerd-29-00/Portfolio">this repository</a>.
    </div>
    <hr/>
    {<Dashboard disable={() =>{stopViewing(Dashboard)}} enable={() =>{addViewing(Dashboard)}} active={viewing.includes(Dashboard)}/>}
    <hr/>
    <div>
    Click this button to get a cookie!
    </div>
    <div>
      <Button onClick = {setCookie}>get cookie</Button>
    </div>
    <br/>
    <div>
      <Button onClick={viewCookie}>see if cookie is present</Button>
    </div>
    <hr/>
    <Board />
    <hr/>
    <footer>
      <Changelog disable = {() => {stopViewing(Changelog)}} enable={() => {addViewing(Changelog)}} active={viewing.includes(Changelog)}/>
      {viewing.includes(Changelog) || viewing.includes(Todo) ? <hr/> : <></>}
      <Todo disable={() => {stopViewing(Todo)}} enable={() => {addViewing(Todo)}} active={viewing.includes(Todo)}/>
      {viewing.includes(Todo) ? <hr/> : <></>}
      <button className="link" onClick={viewNothing}>Hide all</button>
    </footer>
  </section>
  </>
    
  );
}

export default App;
