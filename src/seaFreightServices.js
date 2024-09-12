import React from 'react'
import bgg from './components/bgg.jpg'
import page8 from './components/page8.jpg'

const seaFreightServices = () => {
    return (
        <div className='container-fluid'>
              <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
       <div className='wrap'>
        <h2><strong>Sea Freight Services</strong></h2>
       </div>        
            <div className='bars' id='brss'>
             <div className='pagebar'></div>
            </div>
            <h2><strong>Sea Freight Services</strong></h2>
            <div className='about-row'>
                  <img src={page8} alt='page_66' className='coverpages'/>              
                  <p style={{padding: '10px'}}>
                  We offer comprehensive sea freight services tailored to meet the diverse
needs of businesses, whether you are importing or exporting goods. Our
expertise in handling sea freight allows us to manage the entire process
efficiently, from booking cargo space to final delivery, ensuring that your
goods reach their destination on time and in perfect condition.
                  </p>            
            </div>
            
            <br/>
            <h5><strong>Our Sea Freight Services Include:</strong></h5>
            <br/>
    
      <div className='about-row'>
    
    <div className='cores'>
    <strong>Full Container Load (FCL):</strong>
    <ul>
    <li>We handle all aspects of container logistics, from booking and loading to
    shipping and unloading at the destination port.</li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Less than Container Load (LCL):</strong>
    <ul>
    <li>For smaller shipments that do not require a full container,
    we offer LCL services.</li>
    <li>Your goods are consolidated with other shipments, sharing
    container space and reducing costs</li>
    <li>We ensure that LCL shipments are securely packed and
    carefully handled to prevent damage during transit.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Specialized Cargo Handling:</strong>
    <ul>
    <li>Our team ensures compliance with all safety and regulatory
requirements, providing peace of mind that your cargo is in
safe hands.</li>
    <li>We offer customized solutions for transporting items such as
    machinery, vehicles, and industrial equipment.</li>
    </ul>
    </div>

      </div>
    
      <div className='about-row'> 
    <div className='cores'>
    <strong>Port-to-Port and Door-to-Door Services:</strong>
    <ul>
    <li>We offer flexible shipping options, including port-to-port
    services for clients who want to handle the last mile themselves.</li>
    <li>For a seamless experience, we also provide door-to-door
    services, managing the entire logistics chain from your location to the final destination.</li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Cargo Tracking and Reporting:</strong>
    <ul>
    <li>We provide real-time tracking of your sea freight shipments,
allowing you to monitor their progress and stay informed
about expected delivery times.</li>
    <li>Our detailed reporting services give you insights into the
    status of your shipment, ensuring transparency and accountability.</li>
    </ul>
    </div>
      </div>
    
        </div>
      )
}

export default seaFreightServices
