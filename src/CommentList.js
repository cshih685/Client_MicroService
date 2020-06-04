// import React, {useState, useEffect } from 'react';
import React from 'react';
// import axios from 'axios';

export default ({ comments }) => {
  {/* now we passing comments here, don't need to catch comments from posts 
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

    setComments(res.data);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  */}
  const renderedCommnets = comments.map(comment => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedCommnets}</ul>;
}