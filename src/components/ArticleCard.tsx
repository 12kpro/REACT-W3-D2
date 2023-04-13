import { Link } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";
interface ArticleComponentProps {
  article: IArticle;
}
const ArticleCard = ({ article }: ArticleComponentProps) => {
  return (
    <div className="card">
      <div className="ratio ratio-1x1">
        <img src={article.image_url} className="object-fit-cover" alt="..." />
      </div>

      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text text-truncate">{article.summary}</p>
        <Link to={`/details/${article.id}`} className="btn btn-primary">
          Read article
        </Link>
      </div>
    </div>
  );
};
export default ArticleCard;
