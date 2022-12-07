import { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [route, routeState] = useState ('home') 
  onRouteChange = event => {
    console.log("asd");
    this.setState({ route: event });
  };
  
  return (
    <>
    <Navbar />
    </>
  );
}

export default App;
