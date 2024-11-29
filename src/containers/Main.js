import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Error404 from "../pages/errors/error404/Error";

class Main extends Component {
  render() {
    const { theme } = this.props; // Destructure theme for cleaner code

    return (
      <BrowserRouter basename="/">
        <Switch>
          {/* Redirect "/" to "/home" */}
          <Route exact path="/" render={() => <Redirect to="/home" />} />

          {/* Define all routes */}
          <Route path="/home" render={(props) => <Home {...props} theme={theme} />} />
          <Route path="/experience" render={(props) => <Experience {...props} theme={theme} />} />
          <Route path="/education" render={(props) => <Education {...props} theme={theme} />} />
          {/* <Route path="/opensource" render={(props) => <Opensource {...props} theme={theme} />} /> */}
          <Route path="/contact" render={(props) => <Contact {...props} theme={theme} />} />
          <Route path="/projects" render={(props) => <Projects {...props} theme={theme} />} />

          {/* Fallback for unmatched routes */}
          <Route path="*" render={(props) => <Error404 {...props} theme={theme} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Main;
