import Landingpage from "./Landing-page/Landingpage";
import Homepage from "./Home/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./profile-page/Profile";
export default function Home(){

  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
   
    </>
  )
}