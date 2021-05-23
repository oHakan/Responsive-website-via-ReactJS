import React from 'react';
import Header from './components/Header';
import Information from './components/Information';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='f-heading'>
          <h1>Information</h1>
          <p>Some information for my work style</p>
        </div>
        <Information/>
        <Portfolio/>
        <Contact/>
      </div>
  );
}

export default App;
