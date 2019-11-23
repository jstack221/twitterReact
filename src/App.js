import React from 'react';
import './App.css';
import Header from './shared/Header';
import Container from './content/Container';


function App() {
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   users: state.users
// }

export default App;
