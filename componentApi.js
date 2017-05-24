import React from 'react';

class App1 extends React.Component{
	
constructor(){
	super();
	this.state={
		data:[]
	}
	
	this.setStateHandler=this.setStateHandler.bind(this);
}

setStateHandler(){
	var item='state';
	var myArray=this.state.data;
	myArray.push(item);
	
	this.setState({data:myArray})
}

	render(){
		
	return(
			<div>
			<button onClick={this.setStateHandler}>Set state</button>
			<h4>Set Array:{this.state.data}</h4>
			</div>		
	)
		
	}
}

export default App1;