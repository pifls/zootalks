import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Link to='/'>zootalks</Link>
    </div>
  )
}

export default Navbar;