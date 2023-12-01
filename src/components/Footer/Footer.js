import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-light.png'
import '../../assets/style.css'

function Footer() {
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
    <>
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='footerDiv'>
                    <img src={logo} cl/>
                    <p>lorem ipsum</p>
                </div>
                <div className='footerDiv'>
                    <ul>
                      { menus.map((menu,index)=>(<li><Link to={menu.path}>{menu.display}</Link></li>)) }
                    </ul>
 
                </div>
                <div className='footerDiv'>
                    <h3>4567890987</h3>
                </div>
            </div>
            
        </div>
        
    </footer>
    <div className='copyright'>
    <p>&copy; Design & Developed By Sneha {new Date().getFullYear()}</p>
</div>
</>
  )
}

export default Footer