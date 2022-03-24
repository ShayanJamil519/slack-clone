import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core'
import { AccessTime, Search, HelpOutline } from '@material-ui/icons'
import { useStateValue } from './StateProvider'

function Header() {
  const [{ user }] = useStateValue()

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTime />
      </div>

      <div className="header__search">
        <Search />
        <input type="text" placeholder="Search Clever Programmer" />
      </div>

      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  )
}

export default Header
