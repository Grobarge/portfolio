import React, { Component } from 'react';
import '../App.css';


export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Projects</h1>
        <div className="cards">

          <a className="card" id="dropurspot" href="https://github.com/Grobarge/dropurspot">
          </a>
          <a className="card" id="bidmycrib" href="https://www.bidmycrib.com">
          </a>
          <a className="card" id="todoapp" href="https://github.com/Grobarge/react-native-todo">
          </a>
          <a className="card" id="houser" href="https://github.com/Gaje-Robarge/houser">
          </a>
          <a className="card" id="shelfie" href="https://github.com/Gaje-Robarge/shelfie">
          </a>
          <a className="card" id="tableapp" href="https://simpletableapp.netlify.com">

          </a>


        </div>


      </section>
    );
  }
}


