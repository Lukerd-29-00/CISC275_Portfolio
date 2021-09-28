import { useState } from 'react';
import './App.scss';
import {Changelog} from "./info/changelog/Changelog";
import { Todo } from './info/Todo/Todo';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

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

  return (
  <div className="page-default">
    <Helmet>
      <style>{'body { background-color: antiquewhite }'}</style>
    </Helmet>
  <section className="page-default">
    <header id="app-header">
      <div id="title">
        <h1>Lucas's Portfolio</h1>
      </div>
    </header>
    <div className="app-body">
      <h4>Hi! my name is Lucas Driscoll (email <a href = "mailto:lucasd@udel.edu">lucasd@udel.edu</a>), and this is the first page of my CISC 275-010 portfolio! this page is hosted on github pages using <a href="https://github.com/Lukerd-29-00/Portfolio">this repository</a>.</h4>
      <hr/>

      <Container id="chooser">
        <Row>
          <Col>
            <p><a href="https://lukerd-29-00.github.io/Tic-Tac-Toe/">Tic-Tac-Toe</a></p>
          </Col>
          <Col>
            <p><a href="https://lukerd-29-00.github.io/Checkers/">Checkers</a></p>
          </Col>
          <Col>
            <a href="https://lukerd-29-00.github.io/Bakery/">Bakery</a>
          </Col>
        </Row>
      </Container>
      <hr/>
    </div>
    <footer className="app-body">
      <Changelog disable = {() => {stopViewing(Changelog)}} enable={() => {addViewing(Changelog)}} active={viewing.includes(Changelog)}/>
      {viewing.includes(Changelog) || viewing.includes(Todo) ? <hr/> : <></>}
      <Todo disable={() => {stopViewing(Todo)}} enable={() => {addViewing(Todo)}} active={viewing.includes(Todo)}/>
      {viewing.includes(Todo) ? <hr/> : <></>}
      <button className="link" onClick={viewNothing}>Hide all</button>
    </footer>
  </section>
  </div>
    
  );
}

export default App;
