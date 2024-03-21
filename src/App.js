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
          {/* <Route path="/homepage" element={<Homepage />} /> */}
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/commissions" element={<Commissions />}></Route>
          <Route path="/mywork" element={<MyWork />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/:shop_item_url_path" element={<Shopfullimage />}></Route>
          <Route path="/contactme" element={<ContactMe />}></Route>
        </Routes>


        
      </header>
    </div>
  );
}

export default App;
