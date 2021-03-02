import React from 'react';
import { Link } from 'react-router-dom';
import { changeColor,changeText } from "../changeColor.js";

export class Clock_4 extends React.Component{
   constructor(props) {
      super(props)
		this.state = {
			time: new Date()
		}
   }

   componentDidMount() {
		setInterval(this.update, 1000)	
	}
   
   update = () => {
		this.setState({
			time: new Date()
		})
	};

   render() {	
		const date = this.state.time.toDateString();
		return (
			<div className="wrapper">
			<Link to="/simple-clock/" className="clock clock_4" onClick={() => { changeColor(); changeText();}}>{date}</Link>
			<h1 className="text">Click on the clock to change its mode. 
         	<br/><span className="text_sec">Now mode 4</span> is enabled.</h1>
			</div>
		)
	}
}
