// import { useState } from "react";
import { Navbar } from "./components/Navbar"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  // const [route, routeState] = useState ('home') 
  // onRouteChange = event => {
  //   console.log("asd");
  //   this.setState({ route: event });
  // };
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/login'
              element={<Login />}
            />
            <Route 
              path='/signup'
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    {/* <Navbar /> */}
    </div>
  );
}

export default App;
