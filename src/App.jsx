import { useSelector } from "react-redux";
import "./app.css";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { selectUser } from "./feature/userSlice";

const App = () => {
  // ! =========  Redux ========= //
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
};

export default App;
