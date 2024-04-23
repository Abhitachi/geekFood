import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar";
// import Quote from "./components/quote/Quote.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* {<Quote />} */}
      <Footer />
    </div>
  );
}

export default App;
