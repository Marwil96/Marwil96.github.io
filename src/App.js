import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { spring, AnimatedRoute } from 'react-router-transition';
import LandingPage from './components/LandingPage';
import About from './components/About';
import ProjectPage from './components/ProjectPage';
import ProjectPortfolio from './components/projects/ProjectPortfolio';
import ProjectInfographic from './components/projects/ProjectInfographic';
import ProjectStarvation from './components/projects/ProjectStarvation';
import ProjectReporter from './components/projects/ProjectReporter';
import ProjectThrive from './components/projects/ProjectThrive';
import ProjectKnowel from './components/projects/projectKnowel';

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      nav: "navigation",
      app: "App",
    };
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  navigationOn() {
    this.setState({nav:"navigation navigationActive", app:"App dark"})
  }
  navigationOff() {
    this.setState({nav:"navigation", app:"App"})
  }
  whatLink(url) {
    console.log(url, "YO")
    if(url === "http://localhost:3000/" || "http://localhost:3000/#Home" || "http://localhost:3000/#Projects" ) {
              return (
                <a href="#About" className="navigationClose" onClick={this.navigationOff.bind(this)}>About</a>)
            }
            else {
             return (<Link to="/" className="navigationClose" onClick={this.navigationOff.bind(this)}>About</Link>)  
            }
  }
  pageRender(loading, url) {
    console.log(loading)
    if(loading === true) {
      console.log("Loading")
      return(<div className="animationContainer"> <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div></div>);
    }
    return (
       <div>
     <div onClick={this.navigationOn.bind(this)} id="menuToggle" style={{position:"fixed"}}>
    <input type="checkbox" />
    <span style={{background:"black"}}></span>
    <span style={{background:"black"}}></span>
    <span style={{background:"black"}}></span>
    </div>
     <div className={this.state.nav}> 
        <div className="navigationProjectContainer">
            <div onClick={this.navigationOff.bind(this)} id="menuToggle">
              <input type="checkbox" />
              <span style={{background:"white", transform: "rotate(45deg) translate(-2px, -1px)"}}></span>
              <span style={{background:"white", opacity:"0"}}></span>
              <span style={{background:"white", transform: "rotate(-45deg) translate(0, -4px)"}}></span>
              </div>
            <h2 className="navigationProjectSubHeader" >Projects</h2>
            <Link to="/projectKnowel" className="navigationProject" onClick={this.navigationOff.bind(this)}>Knowel</Link>
            <Link to="/projectThrive" className="navigationProject" onClick={this.navigationOff.bind(this)}>Thrive</Link>
            <Link to="/projectStarvation" className="navigationProject" onClick={this.navigationOff.bind(this)}>Concept</Link>
          </div>
          <div className="navigationButtons">
            <Link to="/#Home" className="navigationClose" onClick={this.navigationOff.bind(this)}>Home</Link>
            {this.whatLink(url)}
            <a href="https://williammartinsson.typeform.com/to/grsvRk" className="navigationClose" onClick={this.navigationOff.bind(this)}>Contact</a>
          </div>
        </div>
    <Main />
    </div>
     )
  }
  render() {

    return(
      <div>
     {this.pageRender(this.state.loading, window.location.href)}
     </div>
      )
  }
  };

const Home = () => (
  <div>
    <LandingPage/>
  </div>
  )

const Abouter = () => (
  <ProjectThrive/>
  )
const Main = () => (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/projectThrive" component={ProjectThrive}/>
      <Route path="/projectKnowel" component={ProjectKnowel}/>
      <Route path="/projectStarvation" component={ProjectStarvation}/>
    </Switch>
)



// class App extends Component {
//   render() {
//     return (	
//     <Router>
//     <div>
//     <Switch>
//     <div>
//       <Route path="/" component={landingPage}/>
//       <Route path="/about" component={About}/>
//       <Route path="/projectKnowel" component={ProjectKnowel}/>
//       <Route path="/projectPage" component={ProjectPage} />
//     </div>
//       </Switch>
//       <Switch>
//       <AnimatedRoute path="/projectPortfolio" component={ProjectPortfolio} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectInfographic" component={ProjectInfographic} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectStarvation" component={ProjectStarvation} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectReporter" component={ProjectReporter} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       <AnimatedRoute path="/projectThrive" component={ProjectThrive} atEnter={{ offset:0 }}
//       atLeave={{ offset: -100 }}
//       atActive={{ offset: 0 }} />
//       </Switch>
//       </div>
//   	</Router>
//     );
//   }
// }

export default App;
