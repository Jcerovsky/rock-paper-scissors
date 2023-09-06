import React from "react";

interface Props {
  choice: "rock" | "paper" | "scissors";
  bgColor: string;
  setUserSelection?: React.Dispatch<React.SetStateAction<string>>;
  setIsGameStarted?: React.Dispatch<React.SetStateAction<boolean>>;
}

function GameChoice({
  choice,
  bgColor,
  setUserSelection,
  setIsGameStarted,
}: Props) {
  return (
    <div
      className={`p-6 rounded-full shadow-lg cursor-pointer hover:shadow-inner hover:scale-105 transition-transform\t hover:ease-in-out`}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setUserSelection!(choice);
        setIsGameStarted!(true);
      }}
    >
      <img
        src={`../public/icon-${choice}.svg`}
        className={`${
          choice === "rock" ? "p-6" : "p-5 pl-6 pr-6"
        } bg-white rounded-full shadow-xl`}
        alt={`${choice} icon`}
      />
    </div>
  );
}

export default GameChoice;
