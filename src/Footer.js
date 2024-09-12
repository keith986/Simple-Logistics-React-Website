import React from 'react'
import logo from './components/logo.jpg'
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container' style={{background: '#000', color : '#fff', marginTop: '0px'}}>
      <div className='about-row' style={{marginTop: '20px'}}>
      <div style={{maxWidth: '300px'}}>
      <img src={logo} className='logo' alt='logo_image'/>
      <p style={{opacity: '0.5'}}>When you choose our company you get the guarantee of the high quality services and reliability. We serve the unique needs of our customers from a variety of industries.</p>
      </div>

      <div>
        <h5>Quick links</h5>
        <ul className='quick'>
             <li><Link to='/' id='qck'> <Icon.ChevronRight /> Home</Link></li>
             <li><Link to='/about' id='qck'> <Icon.ChevronRight /> About Us</Link></li>
             <li><Link to='/missionandvision' id='qck'> <Icon.ChevronRight /> Our Mission and Vision</Link></li>      
             <li><Link to='/corevalues' id='qck'> <Icon.ChevronRight /> Our Core Values</Link></li>
        </ul>
      </div>

      <div>
        <h5>Offices Address</h5>
        <ul style={{listStyle: 'none', }}>
        <p style={{opacity: '0.6'}}>P.0. BOX 23018-80100, <br/>Mombasa Address. <br/> Ketty Plaza Moi Avenue Website </p>
        </ul>
          <br/>
          <ul>
          <span><Icon.TelephoneFill style={{fontSize: '25px', opacity: '0.7'}}/> +254727125885</span>
          </ul>
          <ul>
          <span><Icon.SendFill style={{fontSize: '25px', opacity: '0.7'}}/> rinacklimited@gmail.com</span>
          </ul>
          <br/>
      </div>
      </div>
    
      <div className='adv'>
      <hr/>
<p>&copy; Rinack Limited 2024. All Rights are Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
