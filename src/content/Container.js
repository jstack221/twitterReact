import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions';

class Container extends React.Component {

	componentDidUpdate(){
		console.log( 'uuuuuuuuuuuuuuu', this.props.users )
	}

	handleClick = () => {
		console.log( 'ddddddddddddd', this.props )
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

// const mapStateToProps = state => ({ users: state.reducer.users } )

const mapStateToProps = state => ({  } )

const mapDispatchToProps = dispatch => (
	{
		getUsers: () => dispatch( fetchUsers() )
	}
)


export default connect( mapStateToProps, mapDispatchToProps )(Container)