import React from 'react'
import '../../assets/style.css'
import Top from '../../assets/images/1 (2).jpg'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
    <section className='home'>
        <div className='container'>
            <div className='row align-items'>
                <div className='topContent'>
                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thatr</p>
                    <button>About us</button>
                </div>
                <div className='topImage'>
                    <img src={Top} />
                </div>
            </div>
        </div>
    </section>
    <About />
    <Services />
    <Contact />
    </>
  )
}

export default Home