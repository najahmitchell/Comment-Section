import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Najah"
        timeAgo="Today at 4:30PM"
        commentText="this is my first comment section made"
        avatar={faker.image.image()}
      />

      <CommentDetail
        author="Litashi"
        timeAgo="A Week ago"
        commentText="This pretty cool to make and see finally work"
        avatar={faker.image.image()}
      />

      <CommentDetail
        author="Nick"
        timeAgo="Yesterday at 7:28AM"
        commentText="Now I have to make the the avatar image a prop now"
        avatar={faker.image.image()}
      />

      <CommentDetail
        author="Marvin"
        timeAgo="Last Year"
        commentText="Such a small project but I'm impressed"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
