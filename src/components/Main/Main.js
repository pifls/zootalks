import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Join from './../Join/Join'
import styles from './Main.module.scss'

function Main() {
  return (
    <main className={styles.Main}>
      <Switch>
        <Route exact path='/' component={Join}/>
      </Switch>
    </main>
  );
}

export default Main;