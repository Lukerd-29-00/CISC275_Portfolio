import { useState } from 'react';
import './App.css';
import {Dashboard} from "./tic-tac-toe/components/Dashboard";
import {Changelog} from "./info/changelog/Changelog";
import { Todo } from './info/Todo/Todo';

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

  return (
  <>
  <section>
    <div>
      Hi! my name is Lucas Driscoll (email <a href = "mailto:lucasd@udel.edu">lucasd@udel.edu</a>), and this is the first page of my CISC 275-010 portfolio! this page is hosted on github pages using <a href="https://github.com/Lukerd-29-00/Portfolio">this repository</a>.
    </div>
    <hr/>
    {<Dashboard disable={() =>{stopViewing(Dashboard)}} enable={() =>{addViewing(Dashboard)}} active={viewing.includes(Dashboard)}/>}
    <hr/>
    <footer>
      <Changelog disable = {() => {stopViewing(Changelog)}} enable={() => {addViewing(Changelog)}} active={viewing.includes(Changelog)}/>
      <Todo disable={() => {stopViewing(Todo)}} enable={() => {addViewing(Todo)}} active={viewing.includes(Todo)}/>
      <button className="link" onClick={viewNothing}>Hide all</button>
    </footer>
  </section>
  </>
    
  );
}

export default App;
