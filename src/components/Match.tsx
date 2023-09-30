import GameChoice from "./GameChoice";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  choice: "rock" | "paper" | "scissors";
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

function Match({ choice, setScore, setIsGameStarted }: Props) {
  const [isComputerChoiceRevealed, setIsComputerChoiceRevealed] =
    useState<boolean>(false);
  const [isWinnerRevealed, setIsWinnerRevealed] = useState<boolean>(false);

  useEffect(() => {
    const revealComputerTimeout = setTimeout(() => {
      setIsComputerChoiceRevealed(true);
    }, 2000);

    return () => clearTimeout(revealComputerTimeout);
  }, []);

  useEffect(() => {
    const winnerTimeout = setTimeout(() => {
      setIsWinnerRevealed(true);
      setScore((prevState) =>
        result === "YOU WIN"
          ? prevState + 1
          : result === "YOU LOSE"
          ? prevState - 1
          : prevState,
      );
    }, 2000);

    return () => clearTimeout(winnerTimeout);
  }, [isComputerChoiceRevealed]);

  console.log("rerender");

  const gameLogic = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      return "IT'S A TIE";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "YOU WIN";
    } else {
      return "YOU LOSE";
    }
  };

  const randomChoice = useMemo(() => {
    const possibleChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return possibleChoices[randomNum];
  }, []);

  const computerChoice = randomChoice as unknown as
    | "rock"
    | "paper"
    | "scissors";

  const result = gameLogic(choice, computerChoice);

  const getBgColor = (oponent: "rock" | "paper" | "scissors") => {
    return oponent === "rock" ? "red" : oponent === "paper" ? "blue" : "yellow";
  };

  return (
    <section className="mt-auto mb-auto gap-5  ">
      <div className="flex justify-center gap-2 md:gap-10">
        <div className="flex flex-col items-center gap-4 ">
          <GameChoice choice={choice} bgColor={getBgColor(choice)} />
          <p>YOU PICKED</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          {!isComputerChoiceRevealed ? (
            <div className="w-36 h-36 bg-slate-700 rounded-full self-center"></div>
          ) : (
            <GameChoice
              choice={computerChoice}
              bgColor={getBgColor(computerChoice)}
            />
          )}
          <p>THE HOUSE PICKED</p>
        </div>
      </div>

      {isWinnerRevealed && (
        <div className="flex flex-col justify-center items-center mt-12 gap-5">
          <p className="text-5xl font-bold">{result}</p>
          <button
            className="p-2 w-9/12 bg-white rounded-lg text-black text-2xl tracking-widest cursor-pointer hover:scale-90
            md:w-1/4 duration-300	"
            onClick={() => setIsGameStarted(false)}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </section>
  );
}

export default Match;
