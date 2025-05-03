import { useEffect, useState } from "react";

export const Profile = () => {
  const [card, setCard] = useState();
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("pet"));
    console.log(data);
    setCard(data);
  }, []);
  if (!card) {
    return <p>No user data available.</p>;
  }

  return (
    <div>
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
        <strong>Mood:</strong> {card.mood || "Not Found"}
      </div>
      <div>
        <strong>Adoped:</strong> {card.adopted ? "Adopted" : "Not Adopted"}
      </div>
      {card.adopted ? (
        <div>
          <strong>Adoped:</strong> {card.adoption_date || "Not Found"}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
