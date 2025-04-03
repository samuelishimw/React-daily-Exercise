



import { Routes,Route, Form } from "react-router-dom";
import Timer from "./Timer.jsx";
import CounterUseEffect from "./CounterUseEffect.jsx";
import Lists from "./Lists.jsx";
import Switch from "./Switch.jsx";
import MyComponents from "./MyComponents.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import SignUp from "./components/SignUp.jsx";
import NotFound from "./Layout/NotFound.jsx";
import Thiss from "./Thiss.jsx";
import CountEff from "./CountEff.jsx";
import NewForm from "./components/NewForm.jsx";
import Watch from "./Watch.jsx";





function App() {

 
  return (
      
    <div >
        <Navbar />
   <div className="container">
        
     <Routes>
              
              <Route path="/"element={<Home/>}/>
              <Route path="/Contact"element={<Contact/>}/>
              <Route path="/About"element={<About/>}/>
              <Route path="/Profile"element={<Profile/>}/>
              <Route path="/sign up" element={<SignUp/>}/>
              <Route path="*" element={<NotFound/>}/>
             
              
      
      
      
      
      </Routes>   </div>
      <Thiss/>
      <CountEff/>
      <br /><br />
      <NewForm/>
      <br />
      <br />
      <Watch/>
             </div> 
 );
    
}

export default App
