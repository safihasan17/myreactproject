import { Outlet } from "react-router";
import Footer from "./views/layout/Footer";
import Navbar from "./views/layout/Navbar";
import Sidebar from "./views/layout/Sidebar";


function App() {
  return (
    <>
      <div id="overlay" className="overlay"></div>

     <Navbar/>

     <Sidebar/>

      <main id="content" className="content py-10">
        <div className="container-fluid">
          <Outlet/>
          <Footer/>
        </div>
      </main>

      
    </>
  );
}

export default App;
