import React from 'react'
import { Link } from 'react-router-dom'
//import page33 from './components/page33.jpg' 
import page13 from './components/page13.jpg'
import bg3 from './components/bg3.jpg'
import bg4 from './components/bg4.jpg'
//import page9 from './components/page9.jpg'
//import page10 from './components/page10.jpg'
//import page11 from './components/page11.jpg'
//import page12 from './components/page12.jpg'
import bg_1 from './components/bg_1-1.jpg'
import bg_square_1 from './components/bg_square_1.jpg'
import * as Icon from 'react-bootstrap-icons'

const Homepage = () => {

const myStyle = {
  backgroundImage:
      `url(${bg3})`,
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: '10px'
};

const myStyles = {
  backgroundImage:
      `url(${bg4})`,
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  padding: '10px'
};

/*
<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={page1} className='coverpaged' alt='page1' text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={page2} className='coverpaged' alt='page2' text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={page3} className='coverpaged' alt='page3' text="Third slide" />
      </Carousel.Item>
    </Carousel>
*/

 
  return (
    <div className='container'>
       
       <img src={bg_1} className='coverpaged' style={{position: 'absolute', left: '0', right: '0' , top: '0'}} alt='logo_src'/> 
       <div className='wrap'>
        <span>We are commited to be the leading</span>
        <h1><strong>WORLD CLASS</strong></h1>
        <strong className='type' id='type'>LOGISTICS, FREIGHT & BROKEAGE</strong>
        <span>End to End Logistics</span>
       </div>

<div className='bars' id='brs'></div>  

<div className='adv'>
  <h6 style={{fontFamily: 'Sans', opacity: '0.6'}}>WHO WE ARE</h6>
  <h1>Our Advantanges</h1>
  <div className='col-md-4'>
     <div className='col4'>
      <Icon.Globe style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
       <h5>Cargo Tracking</h5>
       <p style={{opacity: '0.5'}}>As a market leader in freight forwarding and providing tailored services.</p>
     </div>
     <div className='col4'>
      <Icon.BroadcastPin style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
       <h5>Perfect Communication</h5>
       <p style={{opacity: '0.5'}}>We can provide you with a customized freight solution tailored to your needs.</p>
     </div>
     <div className='col4'>
      <Icon.HandThumbsUp style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
       <h5>Reliability & Punctuality</h5>
       <p style={{opacity: '0.5'}}>Our freight company has a consultative and personalized approach to hiring.</p>
     </div>
  </div>
</div>

<div className='adv' style={myStyle} >
  <h1 style={{color: '#fff', fontWeight: 'bold', marginTop: '150px'}}>Be sure your cargo is in good hands <br/> 100% responsibility</h1>
  <p style={{fontSize: '16px', color: '#fff', marginTop: '70px', marginBottom: '150px'}}>Thousands of projects have made our company a leader in construction area. We stand behind our promise to deliver timely <br/> and quality service to our customers.</p>
</div>

<div className='adv'>
<h6 style={{fontFamily: 'Sans', opacity: '0.6'}}>WHAT WE DO</h6>
<h1 style={{marginBottom: '50px'}}>Our Services</h1>
  <div className='flt'>
    <div className='about-rows'>
    <div className='cores' id='corm'>
    <Link to='/services/clearingandforwarding' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.FastForwardFill style={{fontSize: '50px', padding: '5px', borderRadius: '50%', color: 'red'}}/> 
    <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Clearing & Forwarding</h5>
      <p style={{ opacity: '0.7'}}>
      We specialize in providing comprehensive... 
      </p>
      </Link>
    </div>
    <div className='cores' id='corm'>
    <Link to='/services/seafreightservices' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.Water style={{fontSize: '50px', padding: '5px', borderRadius: '50%', color: 'red'}}/> 
      <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Sea Freight Services</h5>
      <p style={{opacity: '0.7'}}>
      We offer comprehensive sea freight services tailored to meet the diverse needs...
      </p>
    </Link>
    </div>
    </div>
    <div className='about-rows'>
    
    <div className='cores' id='corm'>
    <Link to='/services/airfreightservices' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.Airplane style={{fontSize: '50px', padding: '5px', borderRadius: '10%', color: 'red'}}/> 
      <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Air Freight Services</h5>
      <p style={{opacity: '0.7'}}>We understand the critical importance of time-sensitive shipments...</p>
    </Link>
    </div>
  
    <div className='cores' id='corm'>
    <Link to='/services/landfreight' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.Truck style={{fontSize: '50px', padding: '1px', borderRadius: '10%', color: 'red'}}/> 
      <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Land Freight Services</h5>
      <p style={{opacity: '0.7'}}>We provide comprehensive land freight services...</p>
      </Link>
    </div>

    </div>
    <div className='about-rows'>
    <div className='cores' id='corm'>
    <Link to='/services/bulk' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.Boxes style={{fontSize: '50px', padding: '1px', borderRadius: '10%', color: 'red'}}/> 
      <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Bulk & Break-Bulk Cargo</h5>
      <p style={{opacity: '0.7'}}>We specialize in handling these complex shipments...</p>
    </Link>
    </div>
    <div className='cores' id='corm'>
    <Link to='/services/warehousinganddistribution' style={{textDecoration: 'none', color : '#000'}}>
    <Icon.HousesFill style={{fontSize: '50px', padding: '1px', borderRadius: '10%', color: 'red'}}/> 
    <h5 style={{marginTop: '20px', marginBottom: '30px'}}>Warehousing and Distribution</h5>
      <p style={{opacity: '0.7'}}>We offer comprehensive warehousing services designed to meet...</p>
    </Link>
    </div>
    </div>
    <img src={bg_square_1} id='sis' alt='photo_png'/>
  </div> 
</div>

    <div className='bars' id='abt'></div>

    <div className='container' style={{marginTop: '50px', background: '#b7a5a5'}}> 
      <div className='col-md-4'>
        <div className='col4'>
           <h4>Interested in working with Rinack?</h4>
        </div>
        <div className='col4'>
           <p style={{opacity: '0.4'}}>We don’t just manage suppliers, we micro-manage them. We have a consultative and personalized approach.</p>
        </div>
        <div className='col4' id='intouch'>
           <Link to='/contact' id='touch'>Get In Touch</Link>
        </div>
      </div>
    </div>

    <div className='bars'></div>

    <div className='adv'>
     <h3 style={{fontFamily: 'Sans', opacity: '0.6', fontWeight: 'bold'}}>Why Choose us?</h3>
     <div className='about-row'>
                  <img src={page13} alt='page_66' className='coverpages'/> 
                  <div style={{margin: '10px'}}>            
                  <p style={{padding: '10px'}}>
                  <h4><Icon.PiggyBankFill style={{fontSize: '50px', padding: '5px', borderRadius: '10%', color: 'purple'}}/> Affordable Cost:</h4>
                  <p style={{opacity: '0.6'}}>
                  We offer competitive pricing without compromising on
                  the quality of our services, ensuring that you receive the
                  best value for your investment.
                  </p>
                  </p> 
                  <p style={{padding: '10px'}}>
                  <h4><Icon.RocketTakeoffFill style={{fontSize: '50px', padding: '5px', borderRadius: '10%', color: 'purple'}}/>  Global Shipments:</h4>
                  <p style={{opacity: '0.6'}}>
                  With offices overseas, we have the capability to serve you
                  from any country, whether you are importing or exporting.
                  </p>
                  </p>  
                   </div> 
                  <div style={{margin: '10px'}}>
                  <p style={{padding: '10px'}}>
                  <h4><Icon.HourglassSplit style={{fontSize: '50px', padding: '5px', borderRadius: '10%', color: 'purple'}}/> Shortest Time:</h4>
                  <p style={{opacity: '0.6'}}>
                  Our priority is efficiency. We ensure that your goods are
                  cleared and delivered within the shortest time possible.
                  </p>
                  </p> 
                  <p style={{padding: '10px'}}>
                  <h4><Icon.Reception4 style={{fontSize: '50px', padding: '5px', borderRadius: '10%', color: 'purple'}}/> Experience</h4>
                  <p style={{opacity: '0.6'}}>With years of industry experience, our skilled personnel
                  ensure that your shipments and consignments are in
                   capable hands.</p>
                  </p> 
                  </div>            
     </div>
    </div> 

<div className='adv' style={myStyles} >
  <h1 style={{color: '#fff', fontWeight: 'bold', marginTop: '150px'}}>Transportation your cargo <br/><span className='chng'>as soon as possible</span></h1>
   <div className='col-md-4'>
     <div className='col4'>
      <Icon.Clock style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
      <p style={{fontSize: '40px', color: '#fff', fontWeight: 'bold'}}>5</p>
      <p style={{color: '#fff', opacity: '0.7', fontSize: '12px'}}>NO. OF YEARS</p>
     </div>
     <div className='col4'>
      <Icon.PeopleFill style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
      <p style={{fontSize: '40px', color: '#fff', fontWeight: 'bold'}}>---</p>
       <p style={{color: '#fff', opacity: '0.7', fontSize: '12px'}}>SATISFIED CLIENT</p>
     </div>
     <div className='col4'>
      <Icon.TruckFlatbed style={{fontSize: '70px', color: 'red', borderRadius: '50%', padding: '10px', background: '#fff', marginBottom: '30px'}}/> 
      <p style={{fontSize: '40px', color: '#fff', fontWeight: 'bold'}}>---</p>
       <p style={{color: '#fff', opacity: '0.7', fontSize: '12px'}}>TONNES TRANSPORTED</p>
     </div>
   </div>
 </div>

    </div> 
  )
}

export default Homepage
