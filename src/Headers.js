import React from 'react'
import logo from './components/logo.jpg'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import * as Icon from 'react-bootstrap-icons'

const Header = () => {

  const handleToggleOpen = () => {
     $('.toggle-services').show();
  }

  
  const handleToggleClose = () => {
    $('.toggle-services').hide();
  }

  const handleToggle = () => {
    $('.togg-services').toggle('show');
  }

  const handleSideBar = () => {
    $('.sidebar').animate({
      width : "toggle"
    },'slow')
  }

  
  return (
    <div className='container' style={{position: 'absolute', top: '0', left: '0', right: '0', color : '#fff', zIndex: '900'}}>
    <div className='sidebar'>
    <Icon.XLg style={{fontSize: '30px', margin: '5px'}} onClick={handleSideBar}/>
    <ul className='sidebar-nav'>
    <li><Link to='/' style={{textDecoration: 'none', color: '#fff'}}  onClick={handleSideBar}>Home</Link></li>
             <li><Link to='/about' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>About Us</Link></li>
             <li><Link to='/missionandvision' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Our Mission and Vision</Link></li>      
             <li onClick={handleToggle}>Our Services <Icon.PlusCircleDotted/></li> 
             <div className='togg-services'>
              <ul>
               <li><Link to='/services/clearingandforwarding' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Clearing & Forwarding</Link></li>
               <li><Link to='/services/seafreightservices' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Sea Freight Services</Link></li>
               <li><Link to='/services/airfreightservices' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Air Freight Services</Link></li>
               <li><Link to='/services/landfreight' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Land Freight</Link></li>
               <li><Link to='/services/bulk' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Bulk & Break-Bulk Cargo</Link></li>
               <li><Link to='/services/warehousinganddistribution' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Warehousing and Distribution</Link></li>
              </ul>
             </div>
             <li><Link to='/corevalues' style={{textDecoration: 'none', color: '#fff'}} onClick={handleSideBar}>Our Core Values</Link></li>
    </ul>  
    </div>
      
    <div id='row'>
      
        <div className='logo-details'>
         <img src={logo} className='logo' alt='logo_image'/>
         <div className='logo-name'>
           <h4>RINACK LIMITED</h4>
         </div>
          <button className='btn' onClick={handleSideBar}>
           <div className='bar1'></div>
           <div className='bar2'></div>
           <div className='bar3'></div>
          </button>
        </div>        
        <ul className='links'>
             <li><Link to='/' style={{textDecoration: 'none', color: '#fff'}}>Home</Link></li>
             <li><Link to='/about' style={{textDecoration: 'none', color: '#fff'}}>About Us</Link></li>
             <li><Link to='/missionandvision' style={{textDecoration: 'none', color: '#fff'}}>Our Mission and Vision</Link></li>      
             <li onMouseOver={handleToggleOpen} onMouseOut={handleToggleClose}>Our Services</li>
             <div className='toggle-services'>
              <ul onMouseOver={handleToggleOpen} onMouseOut={handleToggleClose}>
               <li><Link to='/services/clearingandforwarding' style={{textDecoration: 'none', color: '#fff'}}>Clearing & Forwarding</Link></li>
               <li><Link to='/services/seafreightservices' style={{textDecoration: 'none', color: '#fff'}}>Sea Freight Services</Link></li>
               <li><Link to='/services/airfreightservices' style={{textDecoration: 'none', color: '#fff'}}>Air Freight Services</Link></li>
               <li><Link to='/services/landfreight' style={{textDecoration: 'none', color: '#fff'}}>Land Freight</Link></li>
               <li><Link to='/services/bulk' style={{textDecoration: 'none', color: '#fff'}}>Bulk & Break-Bulk Cargo</Link></li>
               <li><Link to='/services/warehousinganddistribution' style={{textDecoration: 'none', color: '#fff'}}>Warehousing and Distribution</Link></li>
              </ul>
             </div>
             <li><Link to='/corevalues' style={{textDecoration: 'none', color: '#fff'}}>Our Core Values</Link></li>
             
        </ul>

    </div>
    </div>
  )
}

export default Header
