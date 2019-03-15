import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Join from './../Join/Join'
import styles from './Main.module.scss'

function Main() {
  return (
    <main className={styles.Main}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Join}/>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
