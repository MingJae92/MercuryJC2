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
import Bcs from './ImageRoutes/Bcs';
import Bts from './ImageRoutes/Bts';
import Cpsb from "./ImageRoutes/Cpsb";
import Cspsba from "./ImageRoutes/Cspsba";
import Cspsbb from "./ImageRoutes/Cspsbb";
import Ddhvs from "./ImageRoutes/Ddhvs";
import Gicvs from "./ImageRoutes/Gicvs";
import Giesb from "./ImageRoutes/Giesb";
import Gic from "./ImageRoutes/Gic"
import Gie from "./ImageRoutes/Gie"
import Gig from "./ImageRoutes/Gig"
import Gih from "./ImageRoutes/Gih"
import Gij from "./ImageRoutes/Gij"
import Gikam from "./ImageRoutes/Gikam"
import Gikaz from "./ImageRoutes/Gikaz";
import Gik from "./ImageRoutes/Gik";
import Gim from "./ImageRoutes/Gim"
import Giq from "./ImageRoutes/Giq";
import Giy from "./ImageRoutes/Giy"
import Giz from "./ImageRoutes/Giz"
import Jnsb from "./ImageRoutes/Jnsb";
import Kda from "./ImageRoutes/Kda";
import Lacspsb from "./ImageRoutes/Lacspsb";
import Mgsb from "./ImageRoutes/Mgsb";
import Mcsb from "./ImageRoutes/Mcsb";
import Mahvs from "./ImageRoutes/Mahvs";
import Sbspa from "./ImageRoutes/Sbspa";
import Sbspb from "./ImageRoutes/Sbspb";
import Sbsb from "./ImageRoutes/Sbsb";
import Sssb from "./ImageRoutes/Sssb";
import Upmsb from "./ImageRoutes/Upmsb";
import Vnmvs from "./ImageRoutes/Vnmvs";

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
              <Route path="/Homepage" element={<Homepage />}/>
              <Route path="/About-Me" element={<AboutMe />}></Route>
              <Route path="/Commissions" element={<Commissions />}></Route>
              <Route path="/My-Work" element={<MyWork />}></Route>
              <Route  path="/Shop" element={<Shop/>}></Route>
               <Route path="/Shop/Animal-Crossing-ACNH-Inspired-Leaf-Subscriber-Badges-Package" element={<Ac/>}/>
               <Route path="Shop/A5-Genshin-Impact-Weekly-Planner" element={<Giwp />} />
               <Route path="Shop/BTS-Permission-To-Dance-Metallic-Sticker" element={<Bts />} />
               <Route path="Shop/Butter-Cat-Stickers" element={<Bcs />} />
               <Route path="Shop/Candy-Paw-Subscriber-Badges" element={<Cpsb/>} />
               <Route path="Shop/Cat-Succulent-Planter-Subscriber-Badges-A" element={<Cspsba/>} />
               <Route path="Shop/Cat-Succulent-Planter-Subscriber-Badges-B" element={<Cspsbb/>}/>
               <Route path="Shop/Drunk-Dazed-Holographic-Vinyl-Sticker" element={<Ddhvs/>}/>
               <Route path="Shop/Genshin-Impact-Character-Vinyl-Stickers" element={<Gicvs/>}/>
               <Route path="Shop/Genshin-Impact-Elemental-Subscriber-Badges" element={<Giesb/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-CHILDE-TARTAGLIA" element={<Gic/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-EULA" element={<Gie/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-GANYU" element={<Gig/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-HUTAO" element={<Gih/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-JEAN" element={<Gij/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-KAMISATO-AYAKA" element={<Gikam/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-KAZUHA" element={<Gikaz/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-KLEE" element={<Gik/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-MONA" element={<Gim/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-QIQI" element={<Giq/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-YOIMIYA" element={<Giy/>}/>
               <Route path="Shop/Genshin-Impact-Music-Clear-Acrylic-Charm-ZHONGLI" element={<Giz/>}/>
               <Route path="Shop/K/DA-Inspired-Stream" element={<Kda/>}/>
               <Route path="Shop/LIMITED-ADD-ON-Cat-Succulent-Planter-Subscriber-Badge" element={<Lacspsb/>}/>
               <Route path="Shop/Jelly-Neko-Subscriber-Badges" element={<Jnsb/>}/>
               <Route path="Shop/Magic-Girl-Subscriber-Badges" element={<Mgsb/>}/>
               <Route path='Shop/Milk-Carton-Subscriber-Badges' element={<Mcsb/>}/>
               <Route path='Shop/Moonboat-Adventure-Holographic-Vinyl-Sticker' element={<Mahvs/>}/>
               <Route path='Shop/Sakura-Blossom-Stream-Package-A' element={<Sbspa/>}/>
               <Route path='Shop/Sakura-Blossom-Stream-Package-B' element={<Sbspb/>}/>
               <Route path='Shop/Sakura-Blossom-Subscriber-Badges' element={<Sbsb/>}/>
               <Route path='Shop/Strawberry-Shibe-Subscriber-Badges' element={<Sssb/>}/>
               <Route path='Shop/Usagi-Pastel-Moon-Subscriber-Badges' element={<Upmsb/>}/>
               <Route exact path='Shop/Vitasoy-Neko-Matte-Vinyl-Stickers' element={<Vnmvs/>}/>
              <Route path="/Contact-Me" element={<ContactMe />}></Route> 
          </Routes>  
        
      </header>
    </div>
  );
}

export default App;
