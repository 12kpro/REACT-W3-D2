import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";

const Details = () => {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/";
  const params = useParams();
  const [details, setDetails] = useState<null | IArticle>(null);

  const fetchDetails = async () => {
    try {
      const response = await fetch(`${URL}${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setDetails(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          {details && (
            <>
              <h1 className="fs-1">{details.title}</h1>
              <img className="img-fluid" src={details.image_url} alt="" />
              <p>{details.published_at}</p>
              <p>{details.summary}</p>

              <Link className="" aria-current="page" to={details.url}>
                Go to original article
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Details;
