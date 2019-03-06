import React, { Component } from 'react'

class Join extends Component {
    state = {
        code: null
    }
  render() {
    return (
      <div className="Join">
          <button>new talk</button>
        <form >
            <label htmlFor="code"></label>
            <input type="text" id="code" maxLength="4"/>
            <button>join</button>
        </form>
      </div>
    )
  }
}

export default Join
