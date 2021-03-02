import React from 'react';
import { Link } from 'react-router-dom';
import { changeColor,changeText } from "../changeColor.js";

export class Clock_2 extends React.Component{
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
		const h = this.state.time.getHours();
		const m = this.state.time.getMinutes();
      const s = this.state.time.getSeconds();
		return (
			<div className="wrapper">
			<Link to="/simple-clock/clock_3" className="clock clock_2" onClick={() => { changeColor(); changeText();}}>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'AM' : 'PM'}</Link>
			<h1 className="text">Click on the clock to change its mode. 
         	<br/><span className="text_sec">Now mode 2</span> is enabled.</h1>
			</div>
		)
	}
}
