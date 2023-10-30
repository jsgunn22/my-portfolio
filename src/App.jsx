import Footer from "./components/global/Footer";
import Navbar from "./components/global/navbar";
import AboutMe from "./pages/about";

function App() {
  return (
    <div className="bg-gradient min-h-screen">
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
