import React, { Component } from 'react';
import '../App.css';


export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1>Projects</h1>
        <div className="row">
          <h2><a href="https://www.bidmycrib.com">BidMyCrib</a></h2>
          <h2><a href="https://github.com/Gaje-Robarge/biskue">Biskue</a></h2>
          <h2><a href="https://github.com/Grobarge/react-native-practice"> ReactNative</a></h2>
          <h2><a href="https://github.com/Gaje-Robarge/Simulation2">Houser</a></h2>
          <h2><a href="https://github.com/Gaje-Robarge/NoDB-Project"> Gifs</a></h2>

        </div>
      </section>
    );
  }
}