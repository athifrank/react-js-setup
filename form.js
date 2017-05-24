import React from 'react';

class Form extends React.Component{
	
 constructor(props){
	 super(props);
	 this.state={
			 data:'Initial value'
	 }
	 this.updateValue=this.updateValue.bind(this);
 }
	
	updateValue(e){
		this.setState({data:e.target.value})
	}
	render(){
		return(
		<div>
		<Childvalue metData={this.state.data} onData={this.updateValue}/>
		</div>		
		)
	}
}

class Childvalue extends React.Component{
	render(){
		return(
				
				<div>
				<input type='text' value={this.props.metData} onChange={this.props.onData}/>
				<h3>{this.props.metData}</h3>
				</div>
		)
	}
}

export default Form;