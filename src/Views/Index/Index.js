import React, { Component } from "react";
import HomePageImage from "./home_page_img.jpg";
import section1 from "./home_page_section1.jpg";
import section2 from "./home_page_section2.jpg";
import section3 from "./home_page_section3.jpg";
import "../../index.css";
 
class Home extends Component {
  render() {
    return (
      <span>
        <img src={HomePageImage} alt="" />
        <div class="HomePageSection">
          <div class="title_row">
            SECURITY TRAINING FOR DEVELOPERS
          </div>
          <img src={section1} alt="" />      
          <div class="learnAbout_row">
            <p>SEE IT IN ACTION! LEARN ABOUT...</p>  
          </div>
          <img src={section2} alt="" />
        </div>
        <div class="learnAbout_row">
          <p><strong>529,000</strong> USERS AND COUNTING</p>  
        </div>        
        <img src={section3} alt="" />
      </span>
    );
  }
}
 
export default Home;