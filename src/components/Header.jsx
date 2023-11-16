import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./header.css";
import HeaderOption from "./HeaderOption";
import { useDispatch,  } from "react-redux";
import { logout, } from "../feature/userSlice";
import { getAuth } from "firebase/auth";
import "firebase/auth";

function Header() {
  const dispatch = useDispatch();

  // !=============== Logout func ================= //
  const auth = getAuth();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  // ! redux
  
  return (
    <div className="header ">
      {/* ============== Header Left ====================== */}
      <div className="header__left ">
        <img
          src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png"
          alt=""
        />
        <div className="header__search ">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* ============== Header Right ====================== */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
