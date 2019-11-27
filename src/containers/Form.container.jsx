import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchTweets } from '../actions';
import Form from '../components/Form';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      startDate: null,
      endDate: null,
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handeUserChange = (ev) => {
    const { value } = ev.target;
    this.setState({
      user: value,
    });
  }

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    });
  }

  onSubmit = () => {
    const { getTweets } = this.props;
    let { user, startDate, endDate } = this.state;
    startDate = startDate && startDate.format("MM/DD/YYYY");
    endDate = endDate && endDate.format("MM/DD/YYYY");
    getTweets({
      user,
      startDate,
      endDate,
    });
  }

  render() {
    const { users } = this.props;
    const { startDate, endDate, user } = this.state;
    return (
      <Form
        users={users}
        selectedUser={user}
        startDate={startDate}
        endDate={endDate}
        handleDateChange={this.handleDateChange}
        handeUserChange={this.handleUserChange}
        formSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  getTweets: data => dispatch(fetchTweets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);