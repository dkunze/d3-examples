import React, { Component } from 'react'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ChartWrapper from './components/ChartWrapper';
import GenderDropdown from './components/GenderDropdown';

//import LineChart from './components/LineChart';
//import Chart from './components/ResponsiveBar';

class App extends Component {
  state = {
    gender: "men"
  }

  genderSelected = (gender) => {
    this.setState({ gender })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Chart</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown genderSelected={this.genderSelected} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}><ChartWrapper gender={this.state.gender} /></Col>
          </Row>

        </Container>
      </div>
    );
  }
}
export default App;
