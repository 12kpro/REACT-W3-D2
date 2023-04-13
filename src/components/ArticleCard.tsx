import { Link } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";
interface ArticleComponentProps {
  article: IArticle;
}
const ArticleCard = ({ article }: ArticleComponentProps) => {
  return (
    <div className="card">
      <img src={article.image_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.summary}</p>
        <Link to={`/details/${article.id}`} className="btn btn-primary">
          Read article
        </Link>
      </div>
    </div>
  );
};
export default ArticleCard;
