import React from 'react'
import bgg from './components/bgg.jpg'
import page10 from './components/page10.jpg'

const LandFreight = () => {
    return (
        <div className='container-fluid'>
              <img src={bgg} className='coverpage' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='page1'/>
     <div className='wrap'>
        <h2><strong>Land Freight Services</strong></h2>
       </div>    
            <div className='bars' id='brss'>
             <div className='pagebar'></div>
            </div>
            <h2><strong>Land Freight Services</strong></h2>
            <div className='about-row'>
                  <img src={page10} alt='page_66' className='coverpages'/>              
                  <p style={{padding: '10px'}}>
                  We provide comprehensive land freight services, ensuring the safe and timely
delivery of your cargo through an extensive network of road and rail routes.
Whether you need to transport goods domestically or across borders, our land
freight solutions are designed to meet your specific requirements with
efficiency and precision.
                  </p>            
            </div>
            
            <br/>
            <h5><strong>Our Land Freight Services Include::</strong></h5>
            <br/>
    
      <div className='about-row'>
    
    <div className='cores'>
    <strong>Full Truckload Load</strong>
    <ul>
    <li>For large shipments that require the full capacity of a truck, we offer Full
    Truckload (FTL) services.</li>
    <li>
    FTL is ideal for businesses with high-volume or heavy cargo that needs to be
    transported directly to the destination without intermediate stops.
    </li>
    <li>
    We provide dedicated trucks and secure handling to ensure that your goods
    reach their destination safely and on time
    </li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Less than Truckload (LTL) Services:</strong>
    <ul>
    <li>For smaller shipments that do not require a full truck, we
    offer Less than Truckload (LTL) services</li>
    <li>LTL allows multiple clients to share truck space, reducing
transportation costs while maintaining reliable delivery
schedules.</li>
    <li>We carefully consolidate shipments to optimize truck capacity and ensure efficient handling of your cargo.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Cross-Border Transportation:</strong>
    <ul>
    <li>We specialize in cross-border land freight services, facilitating the movement of goods between countries.</li>
    <li>Our team manages all customs clearance processes, ensuring compliance with international regulations and smooth
    transit across borders.</li>
    <li>We offer both FTL and LTL options for cross-border shipments, providing flexibility based on your specific needs.</li>
    </ul>
    </div>

      </div>
    
    <div className='about-row'> 
    <div className='cores'>
    <strong>Rail Freight Services:</strong>
    <ul>
    <li>For long-distance transportation, we offer rail freight services
as an efficient and environmentally friendly alternative to
road transport.</li>
    <li>Rail freight is ideal for moving large volumes of goods over
extended distances, offering cost savings and reduced
carbon emissions.</li>
    <li>We provide intermodal solutions that combine rail and road
    transport, optimizing delivery times and costs</li>
    </ul>
    </div>
    
    <div className='cores'>
    <strong>Specialized Cargo Handling:</strong>
    <ul>
    <li>We have the expertise to handle specialized cargo, including oversized,
    heavy, or hazardous materials that require special attention.</li>
    <li>Our team ensures that all safety and regulatory requirements are met,
    providing peace of mind that your specialized cargo is in good hands.</li>
    <li>
    We offer customized solutions for transporting items such as machinery,
    construction materials, and industrial equipment.
    </li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Warehousing and Distribution:</strong>
    <ul>
    <li>We offer integrated warehousing and distribution services as part of our
    land freight solutions.</li>
    <li>Our strategically located warehouses enable efficient storage, consolidation, and distribution of goods, reducing lead times and costs.</li>
    <li>We provide inventory management, order fulfillment, and last-mile delivery
    services to ensure that your products reach their final destination efficiently.</li>
    </ul>
    </div>

    <div className='cores'>
    <strong>Real-Time Tracking and Reporting:</strong>
    <ul>
    <li>We provide real-time tracking of your land freight shipments, allowing you
    to monitor their progress and stay informed about expected delivery times</li>
    <li>Our detailed reporting services give you insights into the status of your
    shipment, ensuring transparency and accountability.</li>
    </ul>
    </div>

    </div>
    
        </div>
      )
}

export default LandFreight
