import { useSelector } from "react-redux";
import "./sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "../feature/userSlice";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  // ! ========== redux ========
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      {/* ============== SIDEBAR TOP ==================================== */}
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile viewers</p>
          <p className="sidebar__stateNum">2334</p>
        </div>
        <div className="sidebar__stat">
          <p>View all analytics</p>
          <p className="sidebar__stateNum">1732</p>
        </div>
      </div>

      {/* ========================= Sidebar Bottom ============================= */}
      <div className="sidebar__bottom">
        <p>Recently</p>
        {recentItem("react.js")}
        {recentItem("next.js")}
        {recentItem("programming")}
        {recentItem("design")}
      </div>
    </div>
  );
};

export default Sidebar;
