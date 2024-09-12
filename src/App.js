import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Headers.js';
import Homepage from './Homepage';
import About from './About';
import MissionAndVision from './MissionAndVision';
import CoreValues from './CoreValues'
import ClearingandForwarding from './ClearingandForwarding';
import SeaFreightServices from './seaFreightServices';
import AirFreightServices from './airFreightServices';
import LandFreight from './LandFreight';
import Bulk from './Bulk';
import WarehousingandDistribution from './WarehousingandDistribution';
import Footer from './Footer';

function App() {
  return (
         <>
          <Header/> 
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/missionandvision' element={<MissionAndVision/>}/>
            <Route path='/corevalues' element={<CoreValues/>}/>
            <Route path='/services/clearingandforwarding' element={<ClearingandForwarding/>}/>
            <Route path='/services/seafreightservices' element={<SeaFreightServices/>}/>
            <Route path='/services/airfreightservices' element={<AirFreightServices/>}/>
            <Route path='/services/landfreight' element={<LandFreight/>}/>
            <Route path='/services/bulk' element={<Bulk/>}/>
            <Route path='/services/warehousinganddistribution' element={<WarehousingandDistribution/>}/>
          </Routes>
          <Footer/>
          
         </>
  );
}

export default App;
