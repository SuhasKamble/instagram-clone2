import { Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./MessageSender.css";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      text: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="messageSender__input"
          placeholder="Enter a caption..."
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image Url.."
        />
        <Button type="submit" disabled={!input} onClick={handlePost}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default MessageSender;
