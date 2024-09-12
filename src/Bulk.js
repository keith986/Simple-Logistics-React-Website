import React from 'react'
import bgg from './components/bgg.jpg'
import page13 from './components/page13.jpg'

const Bulk = () => {
    return (
        <div className='container-fluid'>
               <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Bulk & Break-Bulk Cargo</strong></h2>
       </div>        
            <div className='bars' id='brss'>
             <div className='pagebar'></div>
            </div>
            <h2><strong>Bulk & Break-Bulk Cargo</strong></h2>
            <div className='about-row'>
                  <img src={page13} alt='page_66' className='coverpages'/>              
                  <p style={{padding: '10px'}}>
                  We we specialize in handling these complex shipments, providing customized solutions that ensure the safe and efficient transport of your cargo.
Whether you need to move raw materials, heavy machinery, or oversized
items, our bulk and break-bulk services are designed to meet your unique
logistics needs.
                  </p>            
            </div>
            
            <br/>
            <h5><strong>Our Services Include:</strong></h5>
            <br/>
    
      <div className='about-row'>
    
    <div className='cores'>
    <strong>Dry Bulk Cargo Handling:</strong>
    <ul>
    <li>We offer specialized handling and transportation services for dry bulk
cargo, ensuring that your goods are loaded, transported, and unloaded with
care.
</li>
    <li>Our team is experienced in managing a wide range of dry bulk commodities, including grains, minerals, and construction materials.</li>
    <li>We utilize state-of-the-art equipment and facilities to ensure efficient and
    safe handling of your dry bulk cargo.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Liquid Bulk Cargo Handling:</strong>
    <ul>
    <li>We provide comprehensive services for the transportation of liquid bulk
    cargo, including oil, chemicals, and other hazardous liquids.</li>
    <li>Our specialized tanks and vessels are designed to safely transport liquids,
    ensuring compliance with all safety and environmental regulations.</li>
    <li>We offer both short-haul and long-haul transportation options, depending
    on your specific needs.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Break-Bulk Cargo Handling:</strong>
    <ul>
    <li>Our team is equipped with the necessary tools and expertise to load, transport, and unload large and irregularly shaped items.</li>
    <li>We provide tailored solutions for each shipment, ensuring that your
    break-bulk cargo is handled with the utmost care.</li>
    </ul>
    </div>

      </div>
    
      <div className='about-row'> 
    <div className='cores'>
    <strong>Customized Transportation Solutions:</strong>
    <ul>
    <li>We offer customized routing, scheduling, and equipment options to meet
    the specific needs of your shipment.</li>
    <li>Whether you need to transport cargo by sea, land, or a combination of both,
    we provide flexible and efficient solutions.</li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Port and Terminal Services:</strong>
    <ul>
    <li>Our services extend to port and terminal operations, where we manage the
    loading, unloading, and storage of bulk and break-bulk cargo.</li>
    <li>We work closely with port authorities and terminal operators to ensure
    smooth and efficient operations.</li>
    <li>Our facilities are equipped to handle large volumes of cargo, reducing turnaround times and minimizing delays.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Cargo Insurance:</strong>
    <ul>
    <li>We offer comprehensive insurance options to protect your bulk and
    break-bulk cargo against loss, damage, or unforeseen events during transit.</li>
    <li>Our insurance solutions are tailored to the unique risks associated with bulk
    and break-bulk shipments, providing peace of mind.</li>
    </ul>
    </div>

      </div>

      <div className='about-row'> 
    <div className='cores'>
    <strong>Customs Clearance and Documentation:</strong>
    <ul>
    <li>We manage all customs clearance processes for bulk and break-bulk shipments, ensuring compliance with international trade regulations.</li>
    <li>Our team prepares and submits all necessary documentation, including
    bills of lading, cargo manifests, and customs declarations.</li>
    <li>We work closely with customs authorities to expedite the clearance
    process, minimizing delays and ensuring smooth transit.</li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Real-Time Tracking and Reporting:</strong>
    <ul>
    <li>We provide real-time tracking of your bulk and break-bulk shipments,
allowing you to monitor their progress and stay informed about expected
delivery times.</li>
    <li>Our detailed reporting services give you insights into the status of your
    shipment, ensuring transparency and accountability.</li>
     </ul>
    </div>


      </div>
    
        </div>
      )
}

export default Bulk
