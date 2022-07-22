import Sidebar from "./Sidebar";
import { Routes, Route} from "react-router-dom";
import Homepage from "./routes/Homepage";
import AboutMe from './routes/AboutMe';
import Commissions from './routes/Commissions';
import MyWork from './routes/MyWork';
import Shop from './routes/Shop';
import ContactMe from './routes/ContactMe';    
import {useNavigate, useLocation} from "react-router-dom"
import Giwp from "./ImageRoutes/Giwp";
import Ac from './ImageRoutes/Ac';
// import ShopItems from "./routes/ShopItems";
// import ShopItems from "./routes/ShopItems";


function App() {
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mercury JC!!!</h1>
         <Sidebar navigate={navigation} />
         {console.log(location.pathname)}

          <Routes>
              <Route path="/Homepage" element={<Homepage />}/>
              <Route path="/About-Me" element={<AboutMe />}></Route>
              <Route path="/Commissions" element={<Commissions />}></Route>
              <Route path="/My-Work" element={<MyWork />}></Route>
              <Route  path="/Shop"  element={<Shop/>}>
                <Route path="A5-Genshin-Impact-Weekly-Planner" element={<Giwp />} image={Giwp}/>
                <Route path="Animal-Crossing-ACNH-Inspired-Leaf-Subscriber-Badges-Package" element={<Ac/>}/>
              </Route>
              
              <Route path="/Contact-Me" element={<ContactMe />}></Route>
          </Routes>  
        
      </header>
    </div>
  );
}

export default App;
