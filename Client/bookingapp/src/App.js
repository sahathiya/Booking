
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegistrationPage from './Pages/Home/Register';
import PasswordForm from './Pages/Home/Password';
import Login from './Pages/Home/Login';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LogEmail from './Pages/Home/LogEmail';
import PartnerHome from './PartnerHub/PartnerHome';
import RegistrationP from './PartnerHub/RegistrationP';
import ContactDetailes from './PartnerHub/ContactDetailes';
import PasswordPartner from './PartnerHub/PasswordPartner';
import LoginEmail from './PartnerHub/LoginEmail';
import LoginPassword from './PartnerHub/LoginPassword';
import PropertyListing from './PartnerHub/Property';
import ForgottPassword from './PartnerHub/ForgottPassword';
import PersonalDetails from './Pages/Home/PersonalDetailes';
import ListProperty from './PartnerHub/Property/ListProperty';
import AllProperties from './PartnerHub/Property/AllProperties';
import EditProperty from './PartnerHub/Property/EditProperty';
import { useSelector } from 'react-redux';
import ProfileImageUploader from './Pages/Home/Profileimage';
import TroubleP from './PartnerHub/TroubleP';
import ContactSupport from './PartnerHub/ContactSupport';
import PropertyDetails from './PartnerHub/Property/PropertyDetails';
import ResetPassword from './PartnerHub/ResetPassword';
import Checkinbox from './PartnerHub/Checkinbox';


function App() {
  // const user=useSelector((state)=>state.user.user)
  // console.log("useruser",user.role);
  
  // // const partner=useSelector((state)=>state.partner.partner)
  // // console.log("userapp",partner.role);
  
 
  return (

    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/password' element={<PasswordForm/>}/>
        <Route path='/log' element={<LogEmail/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/profileimage' element={<ProfileImageUploader/>}/>


        <Route path='/homepartner' element={<PartnerHome/>}/>
        <Route path='/registerp' element={<RegistrationP/>}/>
        <Route path='/detailespartner' element={<ContactDetailes/>}/>
        <Route path='/passwordpartner' element={<PasswordPartner/>}/>
        <Route path='/loginemail' element={<LoginEmail/>}/>
        <Route path='/troubleP' element={<TroubleP/>}/>
        <Route path='/contact-support' element={<ContactSupport/>}/>
        <Route path='/loginpassword' element={<LoginPassword/>}/>
        <Route path='/personaldetailes/:id' element={<PersonalDetails/>}/>
        <Route path='/forgot-password' element={<ForgottPassword/>}/>
        <Route path='/checkinbox' element={<Checkinbox/>}/>
        <Route path='/reset-password/:id/:token' element={<ResetPassword/>}/>
        <Route path='/property' element={<PropertyListing/>}/>
        <Route path='/listproperty/:id' element={<ListProperty/>}/>
        <Route path='/allproperties/:id' element={<AllProperties/>}/>
        <Route path='/editproperty/:id' element={<EditProperty/>}/>
        <Route path='/propertydetails/:id' element={<PropertyDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
