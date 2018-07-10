import React, { Component } from 'react';
import './Components.css';
import {
  Link
} from 'react-router-dom';
import {Helmet} from "react-helmet";
import firstImage from '../img/KnowelMacbookMockup.png';
import * as Scroll from 'react-scroll';
import secondImage from '../img/ThriveMobilMockup.png';
import thirdImage from '../img/KnowelMacbookMockup.png';
import icon  from '../img/Icon.png';
var data = [
  {projectBoxRubrik:"Knowel", projectBoxText:"A completely new identity & website.",color:"#FDD8BB", backgroundColor:"#5345E4", image:firstImage, link:"/projectKnowel#1", subject:"Development & Design", id:"dator"},
  {projectBoxRubrik:"Akademiska Hus", projectBoxText:"A mobile interface that assists  throughout the day.", color:"#AEF2F0", backgroundColor:"#263776", image:secondImage, link:"/projectAkademiskaHus", subject:"Design", id:"mobil"},
  {projectBoxRubrik:"Cryptotracker", projectBoxText:"A app that tracks the cryptocurrencys you are interested in.", color:"#172AD8", backgroundColor:"#80BBE5", image:thirdImage, link:"/projectCryptoTracker", subject:"Development & Design", id:"dator"},
]
var showMoreProjectsData = [
  {projectBoxRubrik:"Starvation Concept", projectBoxText:"Learning flinto animation",color:"#FDD8BB", backgroundColor:"#5345E4", image:firstImage, link:"/projectStarvation", subject:"Design", id:"dator"},
  {projectBoxRubrik:"Thrive", projectBoxText:"A campaign site for a ecological fashion store",color:"#FDD8BB", backgroundColor:"#5345E4", image:firstImage, link:"/projectThrive", subject:"Design", id:"dator"}
]
let dragging = false;
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}
let ScrollerLink      = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1.3,
      swipe: true,
      swipeToSlide: true,
       beforeChange: () => dragging = true,
      afterChange: () => dragging = false,
      responsive: [ { breakpoint: 768, settings: { slidesToShow: 1, centerMode:true, infinite: true, initialSlide: 0 } }, { breakpoint: 360, settings: { slidesToShow: 1,centerMode:true, infinite: true, initialSlide: 0 } }]
    };

console.log("project")
let classer = "sliderContainer projectx1";
class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      projectBox:"sliderContainer projectx1",
      showMoreProject: false,
      newProjectContainer: "sliderContainer newSliderContainer",
      moreProjectsButtonClass: "moreProjectsButton"

    };
     this.moreProjectsRender = this.moreProjectsRender.bind(this);
  };
  showSettings (event) {
    event.preventDefault();
  }
  componentWillMount(){
    setTimeout(() => {
  this.setState({projectBox:"slideUp projectPageContainer"});
}, 0)
  }
  toProjectPage() {
    <Link to="/somewhere"/>
    console.log("toProjectPage")
  }
  moreProjectsRender() {
    console.log("moreProjectsRender")
    this.setState({showMoreProject: true})
    setTimeout(() => {
      this.setState({newProjectContainer:"sliderContainer", moreProjectsButtonClass:"moreProjectsButton displayNone"});
    }, 100);
  }
  sliderContainerCreator(data) {
    var i;
      return(
         <div className="sliderContainer projectx1 slideUp">
              <Link to={data.link} style={{backgroundColor:data.backgroundColor}} className="slideContainerColor">
                <h3 style={{color:data.color}} className="projectBoxMinorRubrik"> {data.subject} </h3>
                <h1 style={{color:data.color}} className="projectBoxRubrik">{data.projectBoxRubrik}</h1>
                <h2 style={{color:data.color}} className="projectBoxUnderRubrik">Show my self</h2>
                <h3 style={{color:data.color}} className="projectBoxText">{data.projectBoxText}</h3>
              </Link>
              <img className="projectPageImage" id={data.id} src={data.image}/>
              <div className="compMockup">
               </div>
            </div>
      
        )
    }
  moreProjectsLoop(showMoreProjectsData) {
    var i;
    return (
    <div className={this.state.newProjectContainer}>
              <Link to={showMoreProjectsData.link} style={{backgroundColor:showMoreProjectsData.backgroundColor}} className="slideContainerColor">
                <h3 style={{color:showMoreProjectsData.color}} className="projectBoxMinorRubrik"> {showMoreProjectsData.subject} </h3>
                <h1 style={{color:showMoreProjectsData.color}} className="projectBoxRubrik">{showMoreProjectsData.projectBoxRubrik}</h1>
                <h2 style={{color:showMoreProjectsData.color}} className="projectBoxUnderRubrik">Show my self</h2>
                <h3 style={{color:showMoreProjectsData.color}} className="projectBoxText">{showMoreProjectsData.projectBoxText}</h3>
              </Link>
              <img className="projectPageImage" id={showMoreProjectsData.id} src={showMoreProjectsData.image}/>
              <div className="compMockup">
               </div>
            </div>
            )
  }

  render() {
    return (
      <div className={this.state.projectBox}>
            <Helmet>
              <title>William Martinsson - Digital Designer</title>
              <link rel="shortcut icon" href={icon} type="image/png"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Helmet>
          <h1 className="projectSubheaderText ">
          <span className="projectSubheader projectSubheaderColor2" onClick={this.toProjectPage}> Projects </span></h1>

         
            {data.map(data => (this.sliderContainerCreator(data)))}
          <h1 className={this.state.moreProjectsButtonClass} onClick={this.moreProjectsRender}> Want to see more projects? </h1>
          {this.state.showMoreProject ?
          showMoreProjectsData.map(showMoreProjectsData => (this.moreProjectsLoop(showMoreProjectsData))) :
           null
        }
        </div>
    );
  }
}

export default ProjectPage;