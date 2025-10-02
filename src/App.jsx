import React from "react";
import NewsItem from "./NewsItem";

function App() {
  const news = [
    { title: "Nouvelle 1", content: "Contenu de la nouvelle 1" },
    { title: "Nouvelle 2", content: "Contenu de la nouvelle 2" },
    { title: "Nouvelle 3", content: "Contenu de la nouvelle 3" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bienvenue sur mon site de news</h1>
      {news.map((item, index) => (
        <NewsItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default App;
