import Emoji from "react-emojis";

export const emoji = (mood) => {
  console.log(mood);
  if (mood === "happy") {
    return <Emoji emoji="smiling-face-with-smiling-eyes" />;
  } else if (mood === "excited") {
    return <Emoji emoji="grinning-face-with-big-eyes" />;
  } else {
    return <Emoji emoji="pensive-face" />;
  }
};
