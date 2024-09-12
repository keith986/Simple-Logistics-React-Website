import React from 'react'
import bgg from './components/bgg.jpg'
import page7 from './components/page7.jpg'

const ClearingandForwarding = () => {
  return (
    <div className='container-fluid'>
           <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Clearing and Forwarding</strong></h2>
       </div>          
        <div className='bars' id='brss'>
         <div className='pagebar'></div>
        </div>
        <h2><strong>Clearing and Forwarding</strong></h2>
        <div className='about-row'>
              <img src={page7} alt='page_66' className='coverpages'/>              
              <p style={{padding: '10px'}}>
              We specialize in providing comprehensive clearing and forwarding services
              that simplify the complex procedures associated with global trade. Our expertise in this domain allows us to manage and expedite the movement of goods
              efficiently, ensuring timely delivery and compliance with all regulatory
              requirements.
              </p>            
        </div>
        
        <br/>
        <h5><strong>Our Clearing and Forwarding Services Include:</strong></h5>
        <br/>

  <div className='about-row'>

<div className='cores'>
<strong>Customs Documentation:</strong>
<ul>
<li>Preparation and submission of all necessary customs documentation.</li>
<li>Ensuring compliance with international trade regulations.</li>
<li>Handling documentation for various types of cargo, including hazardous
materials, perishable goods, and large-scale shipments.</li>
</ul>
</div>

<div className='cores'>
<strong>Customs Clearance:</strong>
<ul>
<li>Coordination with customs authorities to facilitate the clearance process.</li>
<li>Payment of import/export duties and taxes on behalf of our clients.</li>
<li>Resolving any issues that may arise during customs inspections to prevent delays.</li>
</ul>
</div>

<div className='cores'>
<strong>Tariff Classification:</strong>
<ul>
<li>Accurate classification of goods to ensure correct duty
payment and compliance with tariff regulations.</li>
<li>Advising clients on the best tariff codes to minimize costs
and ensure compliance.</li>
</ul>
</div>
  </div>

  <div className='about-row'>
  <div className='cores'>
<strong>Duty and Tax Management:</strong>
<ul>
<li>Calculation and management of duties, taxes, and other
charges associated with importing and exporting goods.</li>
<li>Assistance in applying for duty drawbacks or refunds where
applicable.</li>
</ul>
</div>

<div className='cores'>
<strong>Freight Forwarding:</strong>
<ul>
<li>Coordination of transportation from the port of entry to the
final destination</li>
<li>Arrangement of sea, air, or land transport based on the
client’s needs.</li>
<li>Real-time tracking of shipments to ensure timely delivery.</li>
</ul>
</div>

<div className='cores'>
<strong>Cargo Insurance:</strong>
<ul>
<li>Providing insurance options to cover the risks associated
with the transportation of goods.</li>
<li>Assistance with claims in the event of damage or loss during
transit.</li>
</ul>
</div>
  </div>

  <div className='about-row'>
  <div className='cores'>
<strong>Warehousing and Distribution:</strong>
<ul>
<li>Offering secure storage facilities for goods awaiting clearance or forwarding.</li>
<li>Organizing the distribution of goods to their final destination once they have cleared customs.</li>
</ul>
</div>

<div className='cores'>
<strong>Compliance and Advisory Services:</strong>
<ul>
<li>Advising clients on regulatory changes and compliance
requirements for international trade.</li>
<li>Providing guidance on the best practices for importing and
exporting goods to minimize risks and costs.</li>
</ul>
</div>

  </div>

    </div>
  )
}

export default ClearingandForwarding
