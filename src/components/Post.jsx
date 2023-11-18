import {
  ChatBubbleOutline,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import InputOption from "./InputOption";
import "./post.css";
import { Avatar } from "@mui/material";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>

        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      {/* post body */}
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__button">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatBubbleOutline} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});

Post.displayName = "Post";
export default Post;
