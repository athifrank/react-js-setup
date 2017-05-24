import React from 'react';
import ReactDOM from 'react-dom';

class Keys extends React.Component{
	
 constructor(props){
	 super(props);
	 this.state={
			 data:[
				 
				 {
					 component:'First',
					 id:1
				 },
				 {
					 component:'second',
					 id:2
				 },
				 {
					 component:'third',
					 id:3
				 }
			 ]
	 }

 }

	render(){
		return(
		<div>
		{this.state.data.map((dataComponent,i)=><Childvalue  key={i} dataCom={dataComponent}/>)}
		</div>		
		)
	}
}

class Childvalue extends React.Component{
	render(){
		return(
				
				<div>
				<h3>{this.props.dataCom.component}</h3>
				<h4>{this.props.dataCom.id}</h4>
				</div>
		)
	}
}

export default Keys;