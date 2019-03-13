import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'
import logo from './../../assets/logo.png'
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Link className={styles.Logo} to='/'>
        <img src={ logo } alt="logo with a lion"/>
      </Link>
    </div>
  )
}

export default Navbar;