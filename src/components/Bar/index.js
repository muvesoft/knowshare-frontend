import React, { Component } from 'react';
import io from 'socket.io-client';
import './Bar.css';

export default class Bar extends Component {
  state = {
    green: 0,
    red: 0
  };
  componentDidMount() {
    this.registerToSocket();
    this.calcBar();
  }

  registerToSocket = () => {
    const socket = io(process.env.REACT_APP_URL);

    socket.on('like', itemLiked => {
      this.calcBar();
    });
    socket.on('dislike', itemLiked => {
      this.calcBar();
    });
  };

  calcBar = () => {
    const { green, red } = this.props;
    const totalVotes = green + red;
    let redWidth = (red / totalVotes) * 100;
    let greenWidth = (green / totalVotes) * 100;

    if (!isFinite(redWidth)) {
      redWidth = 0;
    }
    if (!isFinite(greenWidth)) {
      greenWidth = 0;
    }
    this.setState({
      green: greenWidth,
      red: redWidth
    });
  };
  render() {
    return (
      <>
        {this.state.green === 0 && this.state.red === 0 ? (
          <div className="bar">
            <div>
              <div className="barGrey" />
            </div>
          </div>
        ) : (
          <div className="bar">
            <div
              className="barGreen"
              style={{ width: `${this.state.green}%` }}
            />
            <div className="barRed" style={{ width: `${this.state.red}%` }} />
          </div>
        )}
      </>
    );
  }
}
