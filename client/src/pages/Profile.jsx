import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import Emoji from "react-emojis";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const Profile = ({ url }) => {
  const [card, setCard] = useState();
  const navigate = useNavigate();
  //get pet data from session storage
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("pet"));
    console.log(data);
    setCard(data);
  }, []);
  if (!card) {
    return <p>No user data available.</p>;
  }
  //adpot a pet
  const handleAdoped = () => {
    axios.patch(`${url}pets/${card._id}/adopt`).then((data) => {
      setCard(data.data);
    });
    toast("Pet Adopted!");
  };
  //delete a pet
  const handleDelete = () => {
    axios.delete(`${url}pets/${card._id}`).then(async () => {
      await toast("Pet Deleted Successfully!");
      navigate("/");
    });
  };

  //emoji
  let emojiComponent;
  console.log(card.mood);
  if (card.mood === "Happy") {
    emojiComponent = <Emoji emoji="smiling-face-with-smiling-eyes" />;
  } else if (card.mood === "Excited" || "excited") {
    emojiComponent = <Emoji emoji="grinning-face" />;
  } else {
    emojiComponent = <Emoji emoji="pensive-face" />;
  }
  return (
    <div className="Profile container mt-4">
      <ToastContainer />
      <h1>Pet Profile</h1>
      <div>
        <strong>Name:</strong> {card.name || "Not Found"}
      </div>
      <div>
        <strong>Age:</strong> {card.age || "Not Found"}
      </div>
      <div>
        <strong>Species:</strong> {card.species || "Not Found"}
      </div>
      <div>
        <strong>Personality:</strong> {card.personality || "Not Found"}
      </div>
      <div>
        <strong>Mood:</strong> {emojiComponent || "Not Found"}
      </div>
      <div>
        <strong>Adoped:</strong> {card.adopted ? "Adopted" : "Not Adopted"}
      </div>
      {card.adopted ? (
        <div>
          <strong>Adoped:</strong>{" "}
          {formatDistanceToNow(card.adoption_date, { addSuffix: true }) ||
            "Not Found"}
        </div>
      ) : (
        ""
      )}
      <div className="row col-1 d-flex justify-content-between gap-2">
        <input
          type="button"
          value="Edit"
          className="btn btn-secondary"
          onClick={() => navigate("/update")}
        />
        <input
          type="button"
          value="Adopt"
          className="btn btn-success"
          onClick={handleAdoped}
        />
        <input
          type="button"
          value="Delete"
          className="btn btn-danger"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};
