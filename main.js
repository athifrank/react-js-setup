import React from 'react';
import ReactDOM from 'react-dom';
import App from './app1.js';
import App1 from './componentApi';
import Life from './ComponentLifeCycle';
import Form from './form';
import Refs from './refs';
import Keys from './keys';
import { BrowserRouter as Router,Route,Switch,browserHistory,IndexRoute } from 'react-router-dom';
import Rou from './router';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

//ReactDOM.render(<div><App /><App1 /></div>, document.getElementById('app'));
//ReactDOM.render(<div><Life/></div>, document.getElementById('app1'));
//setTimeout(()=>{	
//	ReactDOM.unmountComponentAtNode(
//		document.getElementById('app1'));
//	},10000);

//ReactDOM.render(<div><Keys/></div>, document.getElementById('app'));

ReactDOM.render((
		<Router history = {browserHistory} >
		<Switch >
			<Route exact path="/" component={Rou} />    
			<Route path="/home" component={Home} />    
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			</Switch >
		    </Router>
),document.getElementById('app'))