import React from 'react'
import blogimg from '../../assets/images/2 (2).jpg'
import '../../assets/style.css'

function Blog() {
  return (
    <section>
        <div className='container'>
            <div className='row'>
                <div>
                    <h2>title</h2>
                    <img src={blogimg}/>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog