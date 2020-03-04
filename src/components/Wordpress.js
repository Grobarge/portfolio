import React from "react";

// Message Component
function Message(props) {
  if (props.isLoggedIn)
    return (
      <div>
        <section id="portfolio">
          <h1>Projects</h1>
          <div className="cards">
            <a
              className="card"
              id="dropurspot"
              href="https://github.com/Grobarge/dropurspot"
            ></a>
            <a
              className="card"
              id="bidmycrib"
              href="https://www.bidmycrib.com"
            ></a>
            <a
              className="card"
              id="todoapp"
              href="https://github.com/Grobarge/react-native-todo"
            ></a>
            <a
              className="card"
              id="jamstack"
              href="https://jamstackstore.netlify.com/"
            ></a>
            <a
              className="card"
              id="tableapp"
              href="https://simpletableapp.netlify.com"
            ></a>
            <a
              className="card"
              id="houser"
              href="https://github.com/Gaje-Robarge/houser"
            ></a>
            <a
              className="card"
              id="shelfie"
              href="https://github.com/Gaje-Robarge/shelfie"
            ></a>
          </div>
        </section>
      </div>
    );
  else
    return (
      <div>
        {" "}
        <h1>Wordpress Projects</h1>
        <p>Skyline Solar</p>
        <p>PaulMitchell</p>
        <p>CSA Heating & Air</p>
        <p>BidmyCrib</p>
      </div>
    );
}

// Login Component
function Login(props) {
  return <button onClick={props.clickFunc}>Full Stack </button>;
}

// Logout Component
function Logout(props) {
  return <button onClick={props.clickFunc}>Wordpress</button>;
}

// Parent Homepage Component
export default class Wordpress extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoggedIn: false };

    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked() {
    this.setState({ isLoggedIn: true });
  }

  ifLogoutClicked() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <Logout clickFunc={this.ifLogoutClicked} />
        ) : (
          <Login clickFunc={this.ifLoginClicked} />
        )}

        <Message isLoggedIn={this.state.isLoggedIn} />
      </div>
    );
  }
}
