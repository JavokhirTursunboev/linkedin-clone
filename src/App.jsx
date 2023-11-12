import "./app.css";
import Feed from "./components/Feed";
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

        {/* ============== FEED =============== */}
        <Feed />
       
      </div>
      {/* ============== WIDGETS =============== */}
    </div>
  );
};

export default App;
