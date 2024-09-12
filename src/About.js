import React from 'react'
import bgg from './components/bgg.jpg'

const About = () => {
  
  return (
    <div className='container-fluid'>
     <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h1><strong>About Us</strong></h1>
       </div>

       <div className='bars' id='brss'>
       <div className='pagebar'></div>
       </div>

       <h2>What about us?</h2>

       <div className='about-rows'>
         <p style={{padding: '10px', marginTop : '30px'}}>
<p>Established in 2019, RINACK LIMITED has quickly become a trusted
name in the logistics and freight forwarding industry.</p>
<p>With a strong foundation and a commitment to excellence, we specialize in providing
comprehensive logistics solutions that cater to the diverse needs of our
clients worldwide. Our team of experts, with years of experience in the
industry, ensures that every consignment is handled with the utmost
care and efficiency.</p>
<p>We believe that every successful shipment starts with a commitment to
quality and service. Our dedicated team works tirelessly to ensure that
your logistics needs are met with precision, reliability, and efficiency.
Your success is our priority, and we are here to deliver excellence every
step of the way.</p>
         </p>
        </div>
     
    </div>
  )
}

export default About
