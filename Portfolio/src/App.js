import React, { Component } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ThirdChild from './ThirdChild';
import FourthChild from './FourthChild';
import FifthChild from './FifthChild';
import SixthChild from './SixthChild';
import ZeroChild from './ZeroChild';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <ZeroChild />
        <FirstChild />
          <SecondChild />
            <ThirdChild />
              <FourthChild />
            <FifthChild />
          <SixthChild />
      </div>
      );
    }
  }
export default App;
