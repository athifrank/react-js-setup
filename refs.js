import React from 'react';
import ReactDOM from 'react-dom';

class Refs extends React.Component{
	
 constructor(props){
	 super(props);
	 this.state={
			 data:'Initial state'
	 }
	 this.updateValue=this.updateValue.bind(this);
	 this.clearInput=this.clearInput.bind(this);
 }
	
	updateValue(e){
		this.setState({data:e.target.value});
	}
	clearInput(){
		this.setState({data:'None'});
		   ReactDOM.findDOMNode(this.refs.myInput);
	}
	render(){
		return(
		<div>
		<Childvalue metData={this.state.data} onData={this.updateValue} onClear={this.clearInput}/>
		</div>		
		)
	}
}

class Childvalue extends React.Component{
	render(){
		return(
				
				<div>
				<input type='text' value={this.props.metData} onChange={this.props.onData} ref='myInput'/>
					<button onClick={this.props.onClear}>clear</button>
				<h3>{this.props.metData}</h3>
				</div>
		)
	}
}

export default Refs;