import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  return (
    <div className="page post">
      <h1>文章 {id}</h1>
      <p>這是一篇示範文章內容。</p>
      <Link to="/" className="btn">回到首頁</Link>
    </div>
  );
}

export default Post;