import React, { useEffect, useState } from "react";
import Post from "./Post";
import StoryReels from "./StoryReels";
import "./Feed.css";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  });
  return (
    <div className="feed">
      <StoryReels />
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          postId={id}
          profilePic={post.profilePic}
          image={post.image}
          username={post.username}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Feed;
