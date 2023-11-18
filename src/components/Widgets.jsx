import { FiberManualRecord, InfoOutlined } from "@mui/icons-material";
import "./widgets.css";
const Widgets = () => {
const newsArticle = (heading, subtitle) => (
  <div className="widgets__article">
    <div className="widgets__articleLeft">
      <FiberManualRecord />
    </div>
    <div className="widgets__articleRight">
      <h4>{heading}</h4>
      <p>{subtitle}</p>
    </div>
  </div>
);


  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoOutlined />
      </div>
      {newsArticle(
        "Sam Altmen is fired from Open AI",
        "Top news - 999 readers"
      )}
      {newsArticle("Tesla hits new highs", "Car & auto - 400 readers")}
      {newsArticle("Is Redux good", "Code - 331 readers")}
      {newsArticle("SWho is new CEO of GOOGLE", "- 821 readers")}
    </div>
  );
};

export default Widgets;
