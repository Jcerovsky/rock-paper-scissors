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
      className={`p-6 rounded-full cursor-pointer hover:scale-105 duration-200 hover:ease-in-out 
      hover:shadow-[0px_0px_70px_50px_#4A5568] `}
      style={{ backgroundColor: bgColor }}
      onClick={() => {
        setUserSelection!(choice);
        setIsGameStarted!(true);
      }}
    >
      <img
        src={`/assets/icon-${choice}.svg`}
        className={`${
          choice === "rock" ? "p-6" : "p-5 pl-6 pr-6"
        } bg-white rounded-full shadow-xl `}
        alt={`${choice} icon`}
      />
    </div>
  );
}

export default GameChoice;
