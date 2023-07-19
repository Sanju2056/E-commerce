import "./App.css";
import Header from "./components/Header";
import "./components/Global/Item.css";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer /> 
    </div>
  );
}

export default App;
