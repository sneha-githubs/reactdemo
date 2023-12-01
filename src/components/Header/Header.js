import React from 'react'
import '../../assets/style.css'
import logo from '../../assets/images/logo-light.png'
import { Link } from 'react-router-dom'

function Header() {
    const menus =[{
        path :'/',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/blog',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
]
  return (
    <header className='header'>
      <div className='container'>
        <div className='row align-items'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='menus'>
                <ul>
                   {menus.map((menu,index)=>(<li key={index}><Link to={menu.path}>{menu.display}</Link></li>)) }
                </ul>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header