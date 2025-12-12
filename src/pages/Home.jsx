import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home">
      <h1>歡迎來到我的部落格</h1>
      <p>這是一個柔和顏色、圓角風格的部落格網站。</p>
      <Link to="/post/1" className="btn">查看文章</Link>
    </div>
  );
}

export default Home;