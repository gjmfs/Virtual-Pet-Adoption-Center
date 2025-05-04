import { useNavigate } from "react-router-dom";
import { emoji } from "../utils/emoji";

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
          <h5 className="card-title">Species: {card.species}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> Mood: {emoji(card.mood)}</li>
            <li
              className="list-group-item"
              style={{
                background: card.adopted ? "#ef233c" : "#007f5f",
                color: "white",
                borderRadius: "12px",
                margin: "12px 0px",
              }}
            >
              {card.adopted ? "Adopted" : "Not Adopted"}
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
