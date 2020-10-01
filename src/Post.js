import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Post.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";

function Post({ profilePic, postId, username, image, text }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let unsubscribe;

    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__headerInfo">
          <strong>{username}</strong>
        </div>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <FavoriteBorderOutlinedIcon fontSize="large" />
        </div>
        <div className="post__option">
          <ChatBubbleOutlineRoundedIcon fontSize="large" />
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon fontSize="large" />
        </div>
      </div>

      <div className="post__caption">
        <p>
          <strong>{username} </strong>
          {text}
        </p>
      </div>
      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <b>{comment.username}</b>: {comment.text}
          </p>
        ))}
      </div>
      <form className="post__commentBox">
        <input
          className="post__input"
          placeholder="Enter comment..."
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={postComment}
          className="post__comment"
          type="submit"
          disabled={!comment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
