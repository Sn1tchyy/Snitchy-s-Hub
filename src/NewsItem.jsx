import React from "react";

function NewsItem({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default NewsItem;
