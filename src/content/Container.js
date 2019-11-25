import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';
import Form from './Form';

class Container extends React.Component {
  
	componentDidUpdate(){
		console.log( 'propspropspropspropsprops', this.props )
	}

	handleClick = () => {
		this.props.getUsers()
	}

	render() {
		return (
			<div>
				<h1>Container</h1>
				<button onClick={this.handleClick}>SUBMIT</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({ users: state.users } )

const mapDispatchToProps = dispatch => (
	{
		getUsers: () => dispatch( fetchUsers() )
	}
)


export default connect( mapStateToProps, mapDispatchToProps )(Container)