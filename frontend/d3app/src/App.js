import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/home';
import BarChart from './views/bar-chart';
import AnimatedBarChart from './views/bar-chart/animated-chart';
import DonutChart from './views/donut-chart';
import MultiSeriesLineChart from './views/multi-series-line-chart';
import AnimatedMultiSeriesLineChart from './views/multi-series-line-chart/animated-chart';

import Logo from './vg.png';
import { msgChatMessageRequest } from "./store/actions";
import {connect} from "react-redux"; 
import './App.css';

 //chatbot integration 
 const headingStyle = {
  position: "fixed",
  top: 0,
  backgroundColor: "white",
  borderBottom: "1px solid"
};
const listStyle = {
  paddingTop: "60px",
  paddingBottom: "60px"
};
const formPosStyle = {
  position: "fixed",
  bottom: 0,
  marginBottom: 0,
  backgroundColor: "white"
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textToBeSent: ""
    };
  }
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleChange(e) {
    this.setState({ textToBeSent: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { textToBeSent } = this.state;
    const { sendMessage } = this.props;
    if (textToBeSent.trim() === "") {
      alert("Empty is not allowed! ");
      return;
    }
    sendMessage(textToBeSent);
    this.setState({ textToBeSent: "" });
  }

  render() {

    const { textToBeSent } = this.state;
    const { messages, onProcess } = this.props;
    return (
      <Router>
        <div className="App">



          <header className="App-header">
            
            <h1 className="App-title">VisGov</h1>
          </header>

          <h1 style={headingStyle}>Type in a Topic!</h1>
        {/* message thread */}
        <ul style={listStyle}>
          {messages.map(({ text, sender, isErrorMessage }, index) => (
            <li
              key={index}
              style={{ color: isErrorMessage ? "crimson" : "dodgerblue" }}
            >
              [{sender}]: {text}
            </li>
          ))}
        </ul>
        {/* form input to send chat message */}
        <form onSubmit={this.handleSubmit} style={formPosStyle}>
          <input
            ref={input => input && input.focus()}
            type="text"
            value={onProcess ? "Waiting..." : textToBeSent}
            onChange={this.handleChange}
            placeholder="Type here to chat!"
            disabled={onProcess}
          />
        </form>


          <nav className="App-nav">
            <Link to="/">Home</Link>{' '}
            
          </nav>


          <Route exact path="/" component={Home} />

          <Route exact path="/bar-chart" component={BarChart} />
          <Route
            exact
            path="/bar-chart/animated"
            component={AnimatedBarChart}
          />
          <Route exact path="/donut-chart" component={DonutChart} />
          <Route
            exact
            path="/multi-series-line-chart"
            component={MultiSeriesLineChart}
          />
          <Route
            exact
            path="/multi-series-line-chart/animated"
            component={AnimatedMultiSeriesLineChart}
          />
          <footer className="App-footer">
            &copy; 2018 <a href="https://github.com/jmularski/VisGov">VisGov Team</a>.
            VisGov 2018 dpa hackathon
          </footer>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => state;
const mapActionToProps = { sendMessage: msgChatMessageRequest };

export default connect(mapStateToProps, mapActionToProps)(App);