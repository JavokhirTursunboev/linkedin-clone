import { useDispatch, useSelector } from "react-redux";
import "./app.css";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { login, logout, selectUser } from "./feature/userSlice";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  // ! =========  Redux ========= //
  const user = useSelector(selectUser);

  //  =========== Firebase auto detect login or logout ============//
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //user Login
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
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
