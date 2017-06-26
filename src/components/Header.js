import React from 'react'

const Header = props =>
  <header className='o-container--full o-container--center u-py5 u-px2'>
    <div className='Ball' />
    <h1 className='h6 u-w500 u-inbl'>{props.name}</h1>
  </header>

Header.defaultProps = {
  name: 'Rendering Obsidian.css from React'
}

export default Header