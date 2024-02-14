import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import All_Services from './Pages/All Services/All_Services';
import AC_Services from './Pages/AC Services/AC_Services';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all_services" element={<All_Services />} />
          <Route path="/ac_services" element={<AC_Services />} />
        </Routes>
    </Router>
  );
}

export default App;
