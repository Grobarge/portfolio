import React, { Component } from 'react';
export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">

               <div className="three columns">

                  <img className="profile-pic" src="https://avatars3.githubusercontent.com/u/54858806?s=460&v=4" alt="" />

               </div>

               <div className="nine columns main-col">

                  <h2>About Me</h2>
                  <p>
                     {
                        resumeData.aboutme
                     }
                  </p>

                  <div className="row">
                     <h2>Contact Me</h2>
                     <p>
                        {
                           resumeData.aboutme2
                        }
                        <br />
                        {
                           resumeData.email
                        }
                     </p>

                  </div>
               </div>
            </div>
         </section>
      );
   }
}

