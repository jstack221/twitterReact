import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes';
import Header from './shared/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container  maxWidth="md">
            <Routes />
          </Container>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
