import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import AboutMe from './routes/AboutMe';
import Commissions from './routes/Commissions';
import MyWork from './routes/MyWork';
import Shop from './routes/Shop';
import ContactMe from './routes/ContactMe';
import { useNavigate, useLocation } from "react-router-dom"
import Shopfullimage from './routes/Shopfullimage'

function App() {
  //Navigation for sliding nav bar. 
  //Each route path from line 58 directs the users to the appropriate page. 
  const navigation = useNavigate();
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">

        <Sidebar navigate={navigation} />
        {console.log(location.pathname)}

    <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/About-Me" element={<AboutMe />}></Route>
          <Route path="/Commissions" element={<Commissions />}></Route>
          <Route path="/My-Work" element={<MyWork />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Shop/:shop_item_url_path" element={<Shopfullimage />}></Route>
          <Route path="/Contact-Me" element={<ContactMe />}></Route>
        </Routes>


        
      </header>
    </div>
  );
}

export default App;
