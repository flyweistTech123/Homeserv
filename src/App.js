import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import All_Services from './Pages/All Services/All_Services';
import AC_Services from './Pages/AC Services/AC_Services';
import Air_Coller_Services from './Pages/Air coller & Repair/Air_Cooler_Repair'
import Air_Purifier from './Pages/Air Purifier/Air_Purifier';
import Chimney_Repair from './Pages/Chimney Repair/Chimney_Repair';
import Laptop_Repair from './Pages/Laptop Repair/Laptop_Repair';
import Inverter_Repair from './Pages/Inverter Repair/Inverter_Repair';
import Mixer from './Pages/Mixer & Grinder Repair/Mixer';
import Television_Repair from './Pages/Television Repair/Television_Repair';
import Refrigerator_Repair from './Pages/Refrigerator Repair/Refrigerator_Repair';
import Washing_Machine from './Pages/Washing Machine/Washing_Machine';
import Water_purifier from './Pages/Water_purifier/Water_purifier';
import Geyser from './Pages/Geyser/Geyser';
import Microwave from './Pages/Microwave/Microwave';
import Bathroom_Kitchen_Cleaning from './Pages/Bathroom & Kitchen Cleaning/Bathroom_Kitchen_Cleaning';
import Full_home_Cleaning from './Pages/Full home Cleaning/Full_home_Cleaning';
import Sofa_Cleaning from './Pages/Sofa & Carpet Cleaning/Sofa_Cleaning';
import Cockroach_Control from './Pages/Cockroach, ant & general pest Control/Cockroach_Control';
import Termite_Control from './Pages/Termite Control/Termite_Control';
import Electrician from './Pages/Electrician/Electrician';
import LandingPage from './Pages/LandingPage/LandingPage';
import Home from './Pages/Home/Home.jsx';
import Air_Conditioner from './Pages/Air Conditioner/Air_Conditioner.jsx';
import Booking from './Pages/Booking/Booking.jsx';
import Shopping from './Pages/Shopping/Shopping.jsx';
import Products_shopping from './Pages/Shopping/Products_shopping.jsx';
import Prdoct_Detail from './Pages/Shopping/Prdoct_Detail.jsx';
import Order from './Pages/Bill & Ordere details/Order.jsx';
import Bill from './Pages/Bill & Ordere details/Bill.jsx';
import Scan from './Pages/Scan QR/Scan.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import MyProfile from './Pages/Profile/MyProfile.jsx';
import MyWallet from './Pages/Wallet/MyWallet.jsx';
import History from './Pages/History/History.jsx';
import Servce_history from './Pages/History/Servce_history.jsx';
import History_Order from './Pages/History/History_Order.jsx';
import Cancel_history from './Pages/History/Cancel_history.jsx';
import Shoppingl_history from './Pages/History/Shoppingl_history.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Signup/Login.jsx';
import OTP from './Pages/Signup/OTP.jsx';
import City from './Pages/Select city/City.jsx';
import About from './Pages/About/About.jsx';



function App() {

  return (
    <Router> 
        <Routes>
          <Route path="/landingpage" element={<LandingPage/>} />
          <Route path="/all_services" element={<All_Services />} />
          <Route path="/ac_services" element={<AC_Services />} />
          <Route path="/air_coller_services" element={<Air_Coller_Services />} />
          <Route path="/air_purifier" element={<Air_Purifier />} />
          <Route path="/chimney_repair" element={<Chimney_Repair />} />
          <Route path="/laptop_repair" element={<Laptop_Repair />} />
          <Route path="/inverter_repair" element={<Inverter_Repair />} />
          <Route path="/mixer_repair" element={<Mixer />} />
          <Route path="/television_repair" element={<Television_Repair />} />
          <Route path="/refrigerator_repair" element={<Refrigerator_Repair />} />
          <Route path="/washing_machine" element={<Washing_Machine />} />
          <Route path="/water_purifier" element={<Water_purifier />} />
          <Route path="/geyser_repair" element={<Geyser />} />
          <Route path="/microwave_repair" element={<Microwave />} />
          <Route path="/bathroom_kitchen_cleaning" element={<Bathroom_Kitchen_Cleaning />} />
          <Route path="/full_home_cleaning" element={<Full_home_Cleaning/>} />
          <Route path="/Sofa_cleaning" element={<Sofa_Cleaning />} />
          <Route path="/cockroach_Control" element={<Cockroach_Control />} />
          <Route path="/termite_control" element={<Termite_Control />} />
          <Route path="/electrician" element={<Electrician />} />
          <Route path="/air_conditioner" element={<Air_Conditioner />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/bookings" element={<Booking/>} />
          <Route path="/shopping" element={<Shopping/>} />
          <Route path="/products_shopping" element={<Products_shopping/>} />
          <Route path="/prdoct_detail" element={<Prdoct_Detail/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/bill_details" element={<Bill/>} />
          <Route path="/scan" element={<Scan/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/myprofile" element={<MyProfile/>} />
          <Route path="/mywallet" element={<MyWallet/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/servce_history" element={<Servce_history/>} />
          <Route path="/history_Order" element={<History_Order/>} />
          <Route path="/cancel_history" element={<Cancel_history/>} />
          <Route path="/shoppingl_history" element={<Shoppingl_history/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/otp" element={<OTP/>} />
          <Route path="/city" element={<City/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
  );
}

export default App;
