import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const Comments = ({ id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/videogames/comentario`, {
        sub: user.sub,
        idVideogame: parseInt(id),
        comentario: comment,
      });
      setComments([...comments, comment]);
      setComment("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <label>Review : </label>
            <p></p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit">Submit</button>{" "}
          </div>
        </form>
      ) : (
        <p>Please log in to leave a comment</p>
      )}
    </div>
  );
};
export default Comments;
