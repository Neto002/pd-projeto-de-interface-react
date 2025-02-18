import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/background.jpeg')",
        backgroundSize: "cover",
      }}
    >
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
