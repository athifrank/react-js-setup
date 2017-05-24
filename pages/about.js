import React from 'react';
import Header from '../head';
import Footer from '../foot';
import {Link} from 'react-router-dom';
class About extends React.Component{
	render(){
		return(
				<div>
				<Header/>
				<h2>About page</h2>
				
	               <Footer/>
	               
				</div>	
		)
	}
}

export default About;