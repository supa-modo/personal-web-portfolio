import Footer from "./components/Footer";
import PortfolioPage from "./components/Homepage";
import Navbar from "./components/Navbar";
import bgImage from "./assets/background.jpg";

import "./index.css";
function App() {
  return (
    <div
      className="h-screen bg-cover bg-fixed bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <PortfolioPage />
      
    </div>
  );
}

export default App;
