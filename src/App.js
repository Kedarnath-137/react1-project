// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './component/Navbar/Navbar';
// import About from './component/Navbar/About';
// import Program from './component/Navbar/Program';
// import Campus from './component/Navbar/Campus';
// import Testimonial from './component/Navbar/Testimonial';

// import Kedar from './component/Navbar/Kedar';

// function App() {
//   return (

//       <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" Component={Kedar} />
//           <Route path="/program" Component={Program} />
//           <Route path="/about" Component={About} />
//           <Route path="/campus" Component={Campus} />
//           <Route path="/testimonial" Component={Testimonial} />
//         </Routes>
//         </div>
//       </BrowserRouter>

//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import About from './component/Navbar/About';
import Program from './component/Navbar/Program';
import Campus from './component/Navbar/Campus';
import Testimonial from './component/Navbar/Testimonial';
import Kedar from './component/Navbar/Kedar';
import Contact from './component/Navbar/Contact';
import VideoPlayer from './component/Navbar/videoPlayer';
import UserAuth from './component/Navbar/userAuth';
import SignOut from './component/Navbar/signOut';

function App() {

  const [playState,setPlayState] = useState(false)

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <br />
        <br />
       <br></br>
        <Routes>
          <Route path="/" element={<Kedar />} />
          <Route path="/program" element={<Program />} />
          <Route path="/about" element={<About setPlayState={setPlayState}/>}   />
          <Route path="/campus" element={<Campus />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/userauth' element={<UserAuth />} />
          <Route path='/signout' element={<SignOut/>} ></Route>
        </Routes>
      
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './component/Navbar/Navbar';

// import About from './component/Navbar/About'
// import Campus from './component/Navbar/Campus'
// import Kedar from './component/Navbar/Kedar'
// import Testimonial from './component/Navbar/Testimonial'
// import Program from './component/Navbar/Program'

// import './App.css';

// function App() {
//   const [playState, setPlayState] = useState(false);

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Kedar />} />
//           <Route path="/program" element={<Program/>} />
//           <Route path="/about" element={<About />} />
//           <Route path="/campus" element={<Campus />} />
//           <Route path="/testimonials" element={<Testimonial />} />

//         </Routes>

//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './component/Navbar/Navbar';
// import About from './component/About/About';
// import Program from './component/Program/Program';
// import Campus from './component/Campus/Campus';
// import Testimonial from './component/Testimonial/Testimonial';
// import Home1 from './component/Home/Home';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home1 />} />                    {/* Updated to use element prop */}
//           <Route path="/program" element={<Program />} />             {/* Updated to use element prop */}
//           <Route path="/about" element={<About />} />                {/* Updated to use element prop */}
//           <Route path="/campus" element={<Campus />} />                  {/* Updated to use element prop */}
//           <Route path="/testimonial" element={<Testimonial />} />      {/* Updated to use element prop */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
// import Nv from "./component/react-route/navss"
// import A1 from "./component/react-route/a1";
// import A2 from "./component/react-route/a2";
// import A3 from "./component/react-route/a3";
// function App(){
//   return(
//     <div>
//       <BrowserRouter>
//       <Nv></Nv>
//     <Routes>
//       <Route path="/" Component={A1}></Route>
//       <Route path="/a2" Component={A2}></Route>
//       <Route path="/a3" Component={A3}></Route>

//     </Routes>

//       </BrowserRouter>

//     </div>
//   )
// }
// export default App;
