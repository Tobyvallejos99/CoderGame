import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import axios from 'axios';


const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { comment, name: user.name, email: user.email };

    setComments([...comments, newComment]);
    setComment("");
    try {
      await axios.post('http://localhost:3001/videogames/comentario', user.sub, newComment );
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);

  return (
    <div>
      {/* <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}</strong>: {comment.comment}
          </li>
        ))}
      </ul> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: {user.name} </label>
        </div>
        <div>
          <label>Email: {user.email}</label>
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
