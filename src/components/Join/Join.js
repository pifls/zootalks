import React, { Component } from 'react'
import styles from './Join.module.scss'

class Join extends Component {
    state = {
        code: null
    }
  render() {
    return (
      <div className={styles.Join}>
          <button className={styles.newTalkButton} >NEW TALK</button>
        <form >
            <label htmlFor="code"></label>
            <input className={styles.inputField} type="text" id="code" maxLength="4" autocomplete="off"/>
            <button className={styles.joinTalkButton}>JOIN</button>
        </form>
      </div>
    )
  }
}

export default Join
