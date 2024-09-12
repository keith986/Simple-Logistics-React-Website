import React from 'react'
import bgg from './components/bgg.jpg'
import page55 from './components/page55.png'

const MissionAndVision = () => {
    return (
        <div className='container-fluid'>
          <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Our Mission and Vision</strong></h2>
       </div>
           <div className='bars' id='brss'>
           <div className='pagebar'></div>
           </div>
           <div className='about-row'>
            <img src={page55} className='coverpages' alt='img_display'/>
<div>
<h2>Our Mission</h2>
<ul>
To provide reliable efficient, and cost-effective
logistics solutions that exceed our clients' expectations. We aim to simplify the complexities of
global freight forwarding, ensuring that every
shipment reaches its destination safely, on time,
and within budget.
</ul>
</div>

<div>
<h2>Our Vision</h2>
<ul>
To be a leading global logistics company, recognized for our innovative solutions, exceptional
service, and unwavering commitment to quality.
</ul>
</div>
            </div>
         
        </div>
      )
}

export default MissionAndVision
