import "./feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        {/* INput options */}
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={Subscriptions} color="#e7a33e" />
          <InputOption title="Event" Icon={EventNote} color="#c0cbcd" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDay}
            color="#7fc15e"
          />
        </div>
      </div>

      {/* =============== Post ========================= */}
      <Post
        name="Deen Rakhimov"
        description="Software Engineering"
        message="I am happy to share that I am starting a new postition as Sofware engineering at Coupang"
      />
    </div>
  );
};

export default Feed;
