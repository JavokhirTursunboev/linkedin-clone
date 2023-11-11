import { Avatar } from "@mui/material";
import "./headerOption.css";

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" title={title} src={avatar} />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
