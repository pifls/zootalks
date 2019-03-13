import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import styles from './App.module.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar/>
        <Main/>
      </div>
    );
  }
}
export default App;
