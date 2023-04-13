import { useEffect, useState } from "react";
import { IArticle } from "../interfaces/IArticle";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";

  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const { results } = await response.json();
        setArticles(results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-3 gy-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
