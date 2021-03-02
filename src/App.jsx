import React from 'react';
import { Clock_1 } from "./components/Clock_1";
import { Clock_2 } from "./components/Clock_2";
import { Clock_3 } from "./components/Clock_3";
import { Clock_4 } from "./components/Clock_4";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss'

export class App extends React.Component{
  constructor(props) {
    super(props);
		this.state = {activeIndex: 1}
	}


  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/simple-clock" component={Clock_1}/>
            <Route exact path="/simple-clock/clock_2" component={Clock_2} />
            <Route exact path="/simple-clock/clock_3" component={Clock_3} />
            <Route exact path="/simple-clock/clock_4" component={Clock_4} />
          </Switch>
        </Router>
      </div>
    );
  }
}
