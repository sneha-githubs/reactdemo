import React from 'react'
import '../../assets/style.css'
import about from '../../assets/images/2 (2).jpg'

export default function 
() {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div className='aboutus'>
                    <h2>Lorem Ipsum is simply dummy text of the printing</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since thatr simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since thatr simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since thatr simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since thatr simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text</p>
                         <img src={about}  style={{height:'400px',objectFit:'cover'}}/>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
