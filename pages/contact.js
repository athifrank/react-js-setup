import React from 'react';
import Header from '../head';
import Footer from '../foot';
import {Link} from 'react-router-dom';


 class Contact extends React.Component{
	render(){
		return(
				<div>
	               <Header/>
	               <h2>Contact page</h2>
	               <Footer/>
				</div>		
		)
	}
}
export default Contact;