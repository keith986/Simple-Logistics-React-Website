import React from 'react'
import bgg from './components/bgg.jpg'
import page9 from './components/page9.jpg'

const airFreightServices = () => {
    return (
        <div className='container-fluid'>
               <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Air Freight Services</strong></h2>
       </div>         
            <div className='bars' id='brss'>
             <div className='pagebar'></div>
            </div> 
            <h2><strong>Air Freight Services</strong></h2>
            <div className='about-row'>
                  <img src={page9} alt='page_66' className='coverpages'/>              
                  <p style={{padding: '10px'}}>
                  We understand the critical importance of time-sensitive shipments and offer
comprehensive air freight services to meet your urgent logistics needs.
Whether you’re transporting high-value goods, perishable items, or time-critical consignments, our air freight services ensure that your cargo reaches its
destination quickly and safely.
                  </p>            
            </div>
            
            <br/>
            <h5><strong>Our Air Freight Services Include:</strong></h5>
            <br/>
    
      <div className='about-row'>
    
    <div className='cores'>
    <strong>Express Air Freight:</strong>
    <ul>
    <li>Express air freight is ideal for time-critical cargo, ensuring that goods are
    delivered within the shortest possible time frame.</li>
    <li>We provide door-to-door service, managing the entire logistics process from
    pick-up to final delivery.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Standard Air Freight:</strong>
    <ul>
    <li>For shipments that need to be delivered quickly but do not
require the fastest service, we offer standard air freight
options.</li>
    <li>This service provides a balance between speed and cost,
making it a cost-effective choice for many businesses.
-We ensure timely and reliable delivery, with flexible options
based on your specific requirements.</li>
    </ul>
    </div>

      </div>
    
      <div className='about-row'>  
    <div className='cores'>
    <strong>Consolidated Air Freight:</strong>
    <ul>
    <li>We offer consolidation services, combining multiple shipments into a single air freight shipment to reduce costs.</li>
    <li>Consolidated air freight is ideal for smaller shipments that do
not require a full aircraft load, offering significant savings
while maintaining timely delivery.</li>
     <li>Our team ensures that all goods are securely packed and
     efficiently managed throughout the consolidation process.</li>
    </ul>
    </div>
    <div className='cores'>
    <strong>Specialized Cargo Handling:</strong>
    <ul>
    <li>We have extensive experience in handling specialized cargo,
    including hazardous materials, oversized items, and high-value goods.</li>
    <li>Our team ensures compliance with all safety and regulatory
requirements, providing peace of mind that your specialized
cargo is handled with the utmost care.</li>
     <li>We offer customized solutions for transporting delicate, temperature-sensitive, or high-security items.</li>
    </ul>
    </div>
      </div>
    
        </div>
      )
}

export default airFreightServices
