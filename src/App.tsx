import { useState } from 'react';
import './App.scss';
import {Changelog} from "./info/changelog/Changelog";
import { Todo } from './info/Todo/Todo';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import NavBar from "react-bootstrap/NavBar"
import Nav from "react-bootstrap/Nav"
import {NavDropdown } from 'react-bootstrap';

export interface DashboardProps {
  active: boolean
}



function App(): JSX.Element {
  const [viewing, updateViewing] = useState<number | null>(null);

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
      <h4>Hi! my name is Lucas Driscoll (email <a href = "mailto:lucasd@udel.edu">lucasd@udel.edu</a>), and this is the homepage of my CISC 275-010 portfolio!</h4>
      <Changelog active={viewing === 0}/>
      <Todo active={viewing === 1}/>
    </div>
    <footer className="app-body">
    <NavBar bg="light" expand="lg" className="fixed-top">
        <Container id="chooser">
          <NavBar.Brand>projects</NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-navbar-nav"/>
          <NavBar.Collapse id="basic-navbar-nav"/>
          <Nav className="me-auto">
            <Nav.Link href="https://lukerd-29-00.github.io/Tic-Tac-Toe/">Tic-Tac-Toe</Nav.Link>
            <Nav.Link href="https://lukerd-29-00.github.io/Checkers/">Checkers</Nav.Link>
            <Nav.Link href="https://lukerd-29-00.github.io/Bakery/">Bakery</Nav.Link>
            <NavDropdown title="info" id="basic-nav-dropdown" onSelect = {(eventKey: string | null) => {updateViewing(eventKey === null ? eventKey : parseInt(eventKey,10))}}>
              <NavDropdown.Item eventKey={0}>Changelog</NavDropdown.Item>
              <NavDropdown.Item eventKey={1}>Todo</NavDropdown.Item>
              <NavDropdown.Item>Hide info</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="https://github.com/Lukerd-29-00/Portfolio" eventKey={viewing === null ? undefined : viewing.toString()}>Source code</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </NavBar>

    </footer>
  </section>
  </div>
    
  );
}

export default App;
