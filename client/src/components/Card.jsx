import { useNavigate } from "react-router-dom";

export const Card = ({ card }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.setItem("pet", JSON.stringify(card));
    navigate("/profile");
  };
  return (
    <div className="col">
      <div className="card  m-1">
        <h5 className="card-header">{card.name}</h5>
        <div className="card-body">
          <h5 className="card-title">{card.species}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> Mood:{card.mood}</li>
            <li className="list-group-item">
              {card.adopted ? "adopted" : "not adopted"}
            </li>
          </ul>
          <a className="btn btn-primary" onClick={() => handleClick(card)}>
            view
          </a>
        </div>
      </div>
    </div>
  );
};
