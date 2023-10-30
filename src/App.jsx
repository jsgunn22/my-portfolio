import { Outlet } from "react-router-dom";
import Footer from "./components/global/Footer";
import Navbar from "./components/global/Navbar";
// import AboutMe from "./pages/about";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="bg-gradient min-h-screen">
      <Navbar />
      {/* <AboutMe /> */}
      {/* <Resume /> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
