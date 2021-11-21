import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import HeaderComponent from './HeaderComponent';
import BackToTopComponent from './Footer/BackToTopComponent';
import TableComponent from './TableComponent/TableComponent';
import FooterComponent from './Footer/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import './App.css';

function App() {
  return (
     <Router path="/" basename={'/FindYourTeammates'} >
      <div className="App">
        <Container fluid>
          <HeaderComponent />
          <TableComponent />
          <BackToTopComponent />
          <FooterComponent />
        </Container>
      </div>
    </Router>
  );
}

export default App;
