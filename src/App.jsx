



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
import { Watch1 } from "./DigitalWatch.jsx";
import Shop from "./pages/Shop.jsx";
import May from "./pages/Mayhelp.jsx";
import Find from "./pages/Find.jsx";
import UsEffect from "./Revision.jsx";
import GithubUserSearch from "./Fetch.jsx";
import TodoList from "./components/TodoList.jsx";
import ComponentA from "./context/CompontA.jsx";
import Formm from "./Form.jsx";
import Calculate from "./Layout/Calculate.jsx";





function App() {

 
  return (
      
    <div className="allconatiner">
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


      <Calculate/>
      {/* <Thiss/>
      <CountEff/>
      <br /><br />
      <NewForm/> }
      <br />
      <br />
      {/* <Watch/> */}
      {/* <Watch1/><br /> */}
      <br />
      <Formm/>

      <TodoList/>

      <br /><br />
      <ComponentA/>
<UsEffect/>
<GithubUserSearch/>

      <div className="Footer">


        <Shop/>
        <May/>
        <Find/>
      </div>
             </div> 
 );
    
}

export default App
