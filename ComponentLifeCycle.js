import React from 'react';

class Life extends React.Component{
	constructor(props){
		super(props);
		this.state={
				data:0
		}
		this.setNewnumber=this.setNewnumber.bind(this);
		this.setNewnumber1=this.setNewnumber1.bind(this);
	}
	setNewnumber(){
		this.setState({data:this.state.data+1});
	}
	setNewnumber1(){
		this.setState({data:this.state.data-1});
	}
	render(){
		return(
		<div>
		<button onClick={this.setNewnumber}>Increment</button>
		<button onClick={this.setNewnumber1}>Decrement</button>
		<Content data={this.state.data}/>
		</div>
		
		);
	}
}

class Content extends React.Component{
	componentWillMount(){
		console.log('componentWillMount');
	}
	componentDidMount(){
		console.log('componentDidMount');
	}
	componentWillReceiveProps(newPropse){
		console.log('componentWillReceiveProps');
	}
	shouldComponentUpdate(newPropse,newState){
		return true;
	}
	
	componentWillUpdate(nextPropse,nextState){
		console.log('componentWillUpdate');
	}
	componentDidUpdate(prevPropse,prevState){
		console.log('componentDidUpdate');
	}
	
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}
	
	render(){
		return(
			<div>
		        {this.props.data}
			</div>
		)
	}
}

export default Life;