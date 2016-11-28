import React, { Component } from 'react';
import './App.css';
import Iframe from 'react-iframe';

class FirstChild extends Component {


  render(){
  return (
    <div className="jumbotron">
      <div className="container-fluid">
        <div className="video">
        <Iframe url="http://fast.wistia.net/embed/iframe/zx49quiira"></Iframe>
        </div>

      </div>
    </div>
    )
  }
}

export default FirstChild;
