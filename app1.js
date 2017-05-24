import React from 'react';

class Blog extends React.Component{
	render(){
		return(
		<div>
		<h1>Header</h1>
		</div>		
		);
	}
}

class App extends React.Component{
	
	   constructor() {
		      super();
				
		      this.state = {
		         data: 
		         [
		            {
		               "id":1,
		               "name":"Foo",
		               "age":"20"
		            },
						
		            {
		               "id":2,
		               "name":"Bar",
		               "age":"30"
		            },
						
		            {
		               "id":3,
		               "name":"Baz",
		               "age":"40"
		            }
		         ]
		      }
		   
	   }

	   
	render(){
		return(
		<div>
		<Blog/>
		<table>
		<thead>
		<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Age</th>
		</tr>
		</thead>
		<tbody>
		{this.state.data.map((per,i)=><TableRow key={i} data={per}/>)}
		</tbody>
		</table>
		</div>		
		);
	}
}

class TableRow extends React.Component{
	render(){
		return(
		<tr>
		<td>{this.props.data.id}</td>
		<td>{this.props.data.name}</td>
		<td>{this.props.data.age}</td>
		</tr>		
		
		)
	}
}

export default App;