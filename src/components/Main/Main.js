import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Join from './../Join/Join'

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Join}/>
      </Switch>
    </main>
  );
}

export default Main;