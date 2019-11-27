import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import UserDetail from '../components/UserDetail';

class UserDetailContainer extends Component {
  componentDidMount() {
    const { getUser, userId } = this.props;
    getUser(userId);
  }

  render() {
    const { user } = this.props;
    return user && <UserDetail user={user} />;
  }
}

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailContainer);