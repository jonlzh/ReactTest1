import React from 'react';
import './App.css';
import Main from './Main/Main';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      temp: [
        { user: "Paganini", message: "message1" },
        { user: "user2", message: "message2" },
      ],
    }
  }

  render() {
    // const {match} = this.props;
    //   console.log("test" + match.url);
    return (
      <Router>
        <div>
          <div className="Header">
            <h1>Hello Paganini, Welcome to Paga world</h1>
          </div>

          <div className="Body">
            <div className="LeftBody">
              {/* to call the navigation menu */}
              <NavigationBar />
            </div>

            <div className="RightBody">
              <div className="info">
                {/* to display the stuff that is selected based on the left navigation */}
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/contact" render={()=><Contact />} />
                <Route path="/topics/sub1" render={()=><Sub1 />} />
                <Route path="/topics/sub2" component={Sub2} />
                
              </div>
            </div>
            <div className="clear"></div>

            {/* 
          this.state.temp.map((main) => {
            
            <Main user={main.user} message={main.message} key={main.user}/> 
          
          
        })
          */ }
          </div>
        </div>

        <div>

        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>home content here</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>about us content here...</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>more info, contact us!</p>
    </div>
  );
}

function Sub1() {
  return (
    <div>
      <h2>Sub Topic 1</h2>
      <p>As a ....</p>
    </div>
  );
}

function Sub2() {
  return (
    <div>
      <h2>Sub Topic2</h2>
      <p>Long long time ago ....</p>
    </div>
  );
}

function Topic({ match }) {
  if (match.params.id === "sub1") {
    return <h3>sub1111</h3>
  }
  else {
    return (
      <h3>Requested Param: {match.params.id}</h3>
    );
  }
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      
      <Route path={`${match.path}/:id`} component={Topic} />
     
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function SubTopics() {
  return (
    <ul>
      <li>
        <Link to="/topics/sub1">sub1</Link>
      </li>
      <li>
        <Link to="/topics/sub2">sub2</Link>
      </li>
    </ul>
  )
}

function NavigationBar({ match }) {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
          {/* <SubTopics /> */}
          <ul>
          {/* <Route path={`${match.path}/sub1`} component={Sub1} /> */}
            <li>
              <Link to="/topics/sub1">sub1</Link>
              {/* <Link to={`${match.url}/components`}>Components</Link> */}
            </li>
            <li>
              <Link to="/topics/sub2">sub2</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;