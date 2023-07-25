import './App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Contact from "./pages/Contact/Contact";
import Presentation from "./pages/Presentation/Presentation";
import Prestation from "./pages/Prestation/Prestation";
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/prestation" element={<Prestation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
