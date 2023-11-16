import { Avatar } from "@mui/material";
import "./headerOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function HeaderOption(props) {
  const { Icon, title, avatar, onClick } = props;
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" title={title} src={avatar}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
