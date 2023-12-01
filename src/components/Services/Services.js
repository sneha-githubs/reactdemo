import React from 'react'
import '../../assets/style.css'

function Services(props) {
    const service =[{
        title:'Web Designing',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thatr"
    },
    {
        title:'Web Development',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thatr"
        
    },
    {
        title:'App Designing',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thatr"
        
    },
    {
        title:'Branding',
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thatr"
        
    }]
  return (
    <section className='service'>
        <div className='container'>
            
        <h2>Our services</h2>
            <div className='row'>
                
                {service.map((item,index)=>(
                    <div className='oneDiv' key={index}>
                        <div className='divBorder'>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
                </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services