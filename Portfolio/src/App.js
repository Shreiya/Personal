import React, { Component } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ThirdChild from './ThirdChild';
import FourthChild from './FourthChild';

import './App.css';


class App extends Component {
  render () {
    return (
      <div>

        <FirstChild FirstChild={this.props.FirstChild} />
                <SecondChild SecondChild={this.props.SecondChild} />

        <ThirdChild ThirdChild={this.props.ThirdChild} />

        <FourthChild FourthChild={this.props.FourthChild} />
      </div>
      );
    }
  }
export default App;
