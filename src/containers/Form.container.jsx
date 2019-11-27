import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

  handleUserChange = (ev) => {
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
    const { getTweets, history } = this.props;
    let { user, startDate, endDate } = this.state;
    if (!user) return;
    startDate = startDate && startDate.format("MM/DD/YYYY");
    endDate = endDate && endDate.format("MM/DD/YYYY");
    getTweets({
      user,
      startDate,
      endDate,
    });
    history.push(`/${user}/tweets`);
  }

  render() {
    const { users, isLoading } = this.props;
    const { startDate, endDate, user } = this.state;
    return (
      <Fragment>
        {isLoading && <span>Fetching users please wait!</span>}
        {users && <Form
          users={users}
          selectedUser={user}
          startDate={startDate}
          endDate={endDate}
          handleDateChange={this.handleDateChange}
          handleUserChange={this.handleUserChange}
          formSubmit={this.onSubmit}
        />}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
  users: userReducer.users,
  isLoading: userReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  getTweets: data => dispatch(fetchTweets(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormContainer));