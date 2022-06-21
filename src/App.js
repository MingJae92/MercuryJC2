import Sidebar from "./Sidebar";
import { Routes, Route} from "react-router-dom";
import Homepage from "./routes/Homepage";
import AboutMe from './routes/AboutMe';
import Commissions from './routes/Commissions';
import MyWork from './routes/MyWork';
import Shop from './routes/Shop';
import ContactMe from './routes/ContactMe';    
import {useNavigate} from "react-router-dom"

function App() {
  const navigation = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mercury JC!!!</h1>
         <Sidebar navigate={navigation} />
    
          <Routes>
              <Route path="/Homepage" element={<Homepage />}></Route>
              <Route path="/About-Me" element={<AboutMe />}></Route>
              <Route path="/Commissions" element={<Commissions />}></Route>
              <Route path="/My-Work" element={<MyWork />}></Route>
              <Route path="/Shop" element={<Shop />}></Route>
              <Route path="/Contact-Me" element={<ContactMe />}></Route>
          </Routes>  
        
      </header>
    </div>
  );
}

export default App;
