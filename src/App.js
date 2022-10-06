import React, {Component} from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Rules from './components/Rules';
import Home from './components/Home';
import Bracket from './components/Bracket';
import News from './components/News';
import Footer from './components/Footer';



class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div className='app'>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/rules" element={<Rules />} />
              <Route exact path="/bracket" element={<Bracket />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </main>      
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
