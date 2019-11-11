import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Can you remember where the cards are?</h2>
      <Nav />
      <Header />
      <Main>
      <Card
        id={1}
        width={100}
        height={10}
        back={}
      </Main>
      
    </div>
  );
}

export default App;
