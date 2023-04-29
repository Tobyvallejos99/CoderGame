import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ id }) => {
    const [comments, setComments] = useState([]);
    console.log(id)

    useEffect(() => {
        const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/comentarios/${id}`);
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
        };
        fetchComments();
    }, [id]);

    return (
        <div>
        {comments.map((comment, i) => (
            <div key={i}>{comment.comentario}</div>
        ))}
        </div>
    );
    };

export default CommentList;