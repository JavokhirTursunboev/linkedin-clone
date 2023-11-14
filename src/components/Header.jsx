import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./header.css";
import HeaderOption from "./HeaderOption";
function Header() {
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
          <input type="text"  placeholder="Search"/>
        </div>
      </div>

      {/* ============== Header Right ====================== */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
