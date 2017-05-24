import React from 'react';
import Header from '../head';
import Footer from '../foot';
import {Link} from 'react-router-dom';
 class Home extends React.Component{
	render(){
		return(	
			<div>
			<Header/>
			<h2>Home page</h2>
            <Footer/>
               
			</div>
		)
	}
}

export default Home;