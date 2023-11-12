import './app.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      {/* ============== HEADER =============== */}
      <Header />
      {/* ============== APP BODY =============== */}
      <div className="app__body">
        {/* ============== SIDEBAR =============== */}
        <Sidebar />
      </div>
      {/* ============== FEED =============== */}
      {/* ============== WIDGETS =============== */}
    </div>
  );
};

export default App;
