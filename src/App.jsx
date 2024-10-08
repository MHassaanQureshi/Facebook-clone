import Landingpage from "./Landing-page/Landingpage";
import Homepage from "./Home/Homepage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Home(){

  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Homepage />} />
        
      </Routes>
    </Router>
   
    </>
  )
}