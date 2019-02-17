import React,{Component} from 'react';

class Form extends Component {

	constructor(){
		super();
		this.initialState = {
			product:'',
			inflow:''
		};

		this.state = this.initialState;
	}


	handleChange = event => {
		const {name,value} = event.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.addMetrics(this.state);
		this.setState(this.initialState);
	}

	render() {
		const {product,inflow} = this.state;
		const inputStyle = {
			paddingLeft: '40px'
		}
		return(
			<form onSubmit={this.handleSubmit} className="form form-horizontal">
				<label style={inputStyle}>Product</label>
				<input type='text' name='product' value={product} onChange={this.handleChange}/>
				&nbsp;&nbsp;&nbsp;
				<label style={inputStyle}>Inflow</label>
				<input type='text' name='inflow' value={inflow} onChange={this.handleChange}/>
				<button>+</button>
			</form>
		);
	}

}

export default Form;
