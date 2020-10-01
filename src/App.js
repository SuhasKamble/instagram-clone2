import React from "react";
import Feed from "./Feed";
import Header from "./Header";

import "./App.css";
import MessageSender from "./MessageSender";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <login>
          <Header />
          <Feed />
          <MessageSender />
        </login>
      )}
    </div>
  );
}

export default App;
