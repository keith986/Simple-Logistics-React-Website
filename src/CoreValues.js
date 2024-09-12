import React from 'react'
import bgg from './components/bgg.jpg'
import integrity from './components/integrity.png'

const CoreValues = () => {
    return (
        <div className='container-fluid'>
      <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Our Core Values</strong></h2>
       </div>         
            <div className='bars' id='brss'>
             <div className='pagebar'></div>
            </div>
            <h2><strong>Our Core Values</strong></h2>
            <div className='about-row'>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px'}}/>
              <h3>Integrity</h3>
              <p>
              We conduct our business with honesty, transparency, and the highest ethical standards, earning the trust of our clients and partners.
              </p>
              </div>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px', }}/>
              <h3>Customer-Centricity</h3>
              <p>
              Our clients' success is our priority. We tailor our services to meet their unique needs and deliver solutions that drive their growth.
              </p>
              </div>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px', }}/>
              <h3>Excellence</h3>
              <p>We are committed to excellence in every aspect of our operations, continuously improving to provide the best service possible.</p>
              </div>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px', }}/>
              <h3>Innovation</h3>
              <p>We embrace innovation and technology, seeking out new ways to enhance our services and deliver value to our clients.</p>
              </div>
            </div>
            <div className='about-row'>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px'}}/>
              <h3>Teamwork</h3>
              <p>Our success is built on collaboration and mutual respect. We work together as a team to achieve our common goals and support each other in our endeavors.</p>
              </div>
              <div className='cores'>
              <img src={integrity} alt='page_66' style={{maxWidth: '100px', }}/>
              <h3>Responsibility</h3>
              <p>We take responsibility for our actions and decisions, ensuring that we deliver on our promises and contrib- ute positively to the communities we serve.</p>
              </div>
            </div>
        </div>
      )
}

export default CoreValues
