import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RegistrationPage from "./Pages/Home/Register";
import PasswordForm from "./Pages/Home/Password";
import Login from "./Pages/Home/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LogEmail from "./Pages/Home/LogEmail";
import PartnerHome from "./PartnerHub/PartnerHome";
import RegistrationP from "./PartnerHub/RegistrationP";
import ContactDetailes from "./PartnerHub/ContactDetailes";
import PasswordPartner from "./PartnerHub/PasswordPartner";
import LoginEmail from "./PartnerHub/LoginEmail";
import LoginPassword from "./PartnerHub/LoginPassword";
import PropertyListing from "./PartnerHub/Property";
import ForgottPassword from "./PartnerHub/ForgottPassword";
import PersonalDetails from "./Pages/Home/PersonalDetailes";
import ListProperty from "./PartnerHub/Property/ListProperty";
import AllProperties from "./PartnerHub/Property/AllProperties";
import EditProperty from "./PartnerHub/Property/EditProperty";
import ProfileImageUploader from "./Pages/Home/Profileimage";
import TroubleP from "./PartnerHub/TroubleP";
import ContactSupport from "./PartnerHub/ContactSupport";
import PropertyDetails from "./PartnerHub/Property/PropertyDetails";
import ResetPassword from "./PartnerHub/ResetPassword";
import Checkinbox from "./PartnerHub/Checkinbox";
import Saved from "./Components/Saved/Saved";
import DetailesPage from "./Components/DetailesProperty/DetailesPage";
import BookingDetailes from "./Components/Booking/BookingDetailes";
import SearchingProperty from "./Components/Search/SearchingProperty";
import SearchDetailes from "./Components/Search/SearchDetailes";
import ListPage from "./Components/Saved/ListPage";
import BookingFinish from "./Components/Booking/BookingFinish";
import RoomDetails from "./Components/DetailesProperty/RoomDetailes";
import Bookings from "./Components/Booking/Bookings";
import ConformPage from "./Components/Booking/ConformPage";
import AllReviews from "./Components/Review/AllReviews";
import Sidebar from "./Components/AdminPart/Sidebar";
import AdminLogin from "./Components/AdminPart/AdminLogin";
import Userslist from "./Components/AdminPart/Users/Userslist";
import { useSelector } from "react-redux";
import Partnerlist from "./Components/AdminPart/Partners/Partnerlist";
import PropertyLists from "./Components/AdminPart/Properties/PropertyLists";
import UserDetailes from "./Components/AdminPart/Users/UserDetailes";
import Allbookings from "./Components/AdminPart/Bookings/Allbookings";
import PartnerDetailes from "./Components/AdminPart/Partners/PartnerDetailes";
import AccountSettings from "./Components/AdminPart/Admin/AccountSettings";
import AccountEdit from "./Components/AdminPart/Admin/AccountEdit";
import DashboardChart from "./Components/AdminPart/Dashboard/DashboardChart";
import Reviews from "./Components/AdminPart/Reviews/Reviews";
import Detailes from "./Components/AdminPart/Properties/Detailes";
import RefundPage from "./Components/AdminPart/Inbox/RefundPage";
import NotificationPage from "./Components/Notification/NotificationPage";
import Hotels from "./Components/Types/Hotels";
import Resorts from "./Components/Types/Resorts";
import Houses from "./Components/Types/Houses";
import Apartments from "./Components/Types/Apartments";
import Villas from "./Components/Types/Villas";
import Help from "./Components/HelpandSupport/Help";
function App() {
  const admin = useSelector((state) => state.admin.admin);
  console.log("admin", admin);

  return (
    <div className="App">
      {!admin ? (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/password" element={<PasswordForm />} />
            <Route path="/log" element={<LogEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/personaldetailes" element={<PersonalDetails />} />
            <Route path="/profileimage" element={<ProfileImageUploader />} />

            <Route path="/saved" element={<Saved />} />
            <Route path="/saved/:listName" element={<ListPage />} />
            <Route path="/detailespage/:id" element={<DetailesPage />} />
            <Route path="/roomdetailes/:id/:type" element={<RoomDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route
              path="/bookingdetailes/:id/:bookingId"
              element={<BookingDetailes />}
            />
            <Route
              path="/bookingfinish/:id/:bookingId"
              element={<BookingFinish />}
            />
            <Route
              path="/conform-page/:id/:bookingid"
              element={<ConformPage />}
            />
            <Route path="/searching" element={<SearchingProperty />} />
            <Route path="/searchdetailes" element={<SearchDetailes />} />
            <Route path="/allreviews" element={<AllReviews />} />

            <Route path="/homepartner" element={<PartnerHome />} />
            <Route path="/registerp" element={<RegistrationP />} />
            <Route path="/detailespartner" element={<ContactDetailes />} />
            <Route path="/passwordpartner" element={<PasswordPartner />} />
            <Route path="/loginemail" element={<LoginEmail />} />
            <Route path="/troubleP" element={<TroubleP />} />
            <Route path="/contact-support" element={<ContactSupport />} />
            <Route path="/loginpassword" element={<LoginPassword />} />

            <Route path="/forgot-password" element={<ForgottPassword />} />
            <Route path="/checkinbox" element={<Checkinbox />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route path="/property" element={<PropertyListing />} />
            <Route path="/listproperty" element={<ListProperty />} />
            <Route path="/allproperties/:id" element={<AllProperties />} />
            <Route path="/editproperty/:id" element={<EditProperty />} />
            <Route path="/propertydetails/:id" element={<PropertyDetails />} />
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/resorts" element={<Resorts/>}/>
            <Route path="/houses" element={<Houses/>}/>
            <Route path="/apartments" element={<Apartments/>}/>
            <Route path="/villas" element={<Villas/>}/>
             <Route path="/notification" element={<NotificationPage/>}/>
             <Route path="/help" element={<Help/>}/>
            <Route path="/loginadmin" element={<AdminLogin />} />
          </Routes>
        </div>
      ) : (
        <div className="flex h-screen">
          <Sidebar />
          <div className=" flex-1  overflow-auto p-10">
            <Routes>
              <Route path="/userslist" element={<Userslist />} />
              <Route path="/partnerslist" element={<Partnerlist />} />
              <Route path="/allpropertylists" element={<PropertyLists />} />
              <Route path="/Detailes/:id" element={<Detailes />} />
              <Route path="/userdetailes/:id" element={<UserDetailes />} />
              <Route path="/allbookings" element={<Allbookings />} />
              <Route
                path="/partnerdetailes/:id"
                element={<PartnerDetailes />}
              />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/account-edit" element={<AccountEdit />} />
              <Route path="/dashboardchart" element={<DashboardChart />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/inbox" element={<RefundPage />} />

            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
