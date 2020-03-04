// import React from "react";

// import Portfolio from "./Portfolio";

// function selectFullStack(props) {
//   return <button onClick={props.clickFunc}>Full Stack</button>;
// }

// function selectWordpress(props) {
//   return <button onClick={props.clickFunc}>Wordpress</button>;
// }

// export default class Gaje extends React.Compponent {
//   constructor(props) {
//     super(props);

//     this.state = { fullStackSelected: true };

//     this.ifFullStackSelected = this.ifFullStackSelected.bind(this);
//     this.ifWordpressSelected = this.ifWordpressSelected.bind(this);
//   }

//   ifWordpressSelected() {
//     this.setState({ fullStackSelected: false });
//   }

//   ifFullStackSelected() {
//     this.setState({ fullStackSelected: true });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.fullStackSelected ? (
//           <selectFullStack clickFunc={this.ifFullStackSelected} />
//         ) : (
//           <selectWordpress clickFunc={this.ifWordpressSelected} />
//         )}
//       </div>
//     );
//   }
// }
