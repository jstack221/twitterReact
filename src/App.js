import React from 'react';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Content from './main/Content';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div>
      <Header />
      <React.Fragment>
        <CssBaseline />
        <main>
          <Container  maxWidth="md">
            <Content />
            </Container>
          </main>
        </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
