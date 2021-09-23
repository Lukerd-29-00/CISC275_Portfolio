import { useState } from 'react';
import './App.scss';
import {TicTacToeDashboard} from "./tic-tac-toe/components/TicTacToeDashboard";
import {Changelog} from "./info/changelog/Changelog";
import { Todo } from './info/Todo/Todo';
import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
import { CheckersDashboard } from './Checkers/components/CheckersDashboard';

export interface inactiveProps {
  enabler: () => void
}

export interface DashboardProps {
  enable: () => void
  disable: () => void
  active: boolean
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
    {<TicTacToeDashboard disable={() =>{stopViewing(TicTacToeDashboard)}} enable={() =>{addViewing(TicTacToeDashboard)}} active={viewing.includes(TicTacToeDashboard)}/>}
    <hr/>
    <div>
    Click this button to get a cookie! (This was created using the example in the readme of the universal-cookie github repository.) <a href="https://github.com/Lukerd-29-00/Portfolio/blob/master/src/App.tsx">click here</a> to view the source code.
    </div>
    <div>
      <button id="cookie" onClick = {setCookie}/>
    </div>
    <br/>
    <div>
      <Button onClick={viewCookie}>see if cookie is present</Button>
    </div>
    <hr/>
    <CheckersDashboard disable={() => {stopViewing(CheckersDashboard)}} enable={()=>{addViewing(CheckersDashboard)}} active={viewing.includes(CheckersDashboard)}/>
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
