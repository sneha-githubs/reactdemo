import React from 'react'
import '../../assets/style.css'

function Contact() {
  return (
    <section className='contact'>
        <div className='container'>
            <div className='row'>
                <div className='forms'>
                    <form>
                        <div>
                            <input type='text' placeholder='name' />
                        </div>
                        <div>
                            <input type='text' placeholder='email'/>
                        </div>
                        <div>
                            <input type='text' placeholder='number'/>
                        </div>
                        <div>
                            <input type='submit' value='submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact