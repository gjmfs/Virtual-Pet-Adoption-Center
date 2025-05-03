import { Typewriter } from "react-simple-typewriter";
import { Card } from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = ({ url }) => {
  const [cards, setCards] = useState();
  useEffect(() => {
    axios.get(`${url}pets`).then((data) => {
      console.log(data);
      setCards(data.data.map((card) => <Card key={card._id} card={card} />));
    });
  }, []);

  return (
    <div className="Home">
      <h2>Welcome to Virtual Pet Adoption Center</h2>
      <span>
        Here you can find your{" "}
        <Typewriter
          words={[
            "furry family member",
            "new best friend",
            "playful pal",
            " little shadow,",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <div className="AllCards">
        <div className="contaier">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 ">
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
};
