import GameRules from "./components/GameRules";
import { useEffect, useState } from "react";
import GameChoice from "./components/GameChoice";
import Match from "./components/Match";

function App() {
  const [areRulesShown, setAreRulesShown] = useState<boolean>(false);
  const [userSelection, setUserSelection] = useState<string>("");
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    const score = localStorage.getItem("score");
    if (score !== null) {
      setScore(JSON.parse(score));
    }
  }, []);

  const backgroundImgStyle = {
    background: "url(/assets/bg-triangle.svg) no-repeat center",
    backgroundSize: "70%",
  };

  return (
    <div
      className="bg-gradient-to-b from-slate-500 to-slate-700 flex flex-col h-screen text-white p-7
    "
    >
      <div className="flex justify-between font-bold text-xl border-2 rounded-md p-3">
        <div className="leading-4 mt-auto mb-auto">
          <img
            src="/assets/logo.svg"
            className="w-7/12"
            alt="logo with words rock paper scissors"
          ></img>
        </div>
        <div className="border-2 rounded-md bg-white text-black font-bold text-center p-2 pl-4 pr-4">
          <p className="text-xs">SCORE</p>
          <p className="text-3xl">{score}</p>
        </div>
      </div>
      {isGameStarted ? (
        <Match
          choice={userSelection as "rock" | "paper" | "scissors"}
          setScore={setScore}
          setIsGameStarted={setIsGameStarted}
        />
      ) : (
        <section
          style={backgroundImgStyle}
          className="m-auto flex flex-col gap-3 "
        >
          <div className="flex justify-between gap-10 items-center mb-3">
            <GameChoice
              choice={"paper"}
              bgColor={"blue"}
              setUserSelection={setUserSelection}
              setIsGameStarted={setIsGameStarted}
            />
            <GameChoice
              choice={"scissors"}
              bgColor={"yellow"}
              setUserSelection={setUserSelection}
              setIsGameStarted={setIsGameStarted}
            />
          </div>
          <div className="flex justify-center">
            <GameChoice
              choice={"rock"}
              bgColor={"red"}
              setUserSelection={setUserSelection}
              setIsGameStarted={setIsGameStarted}
            />
          </div>
        </section>
      )}

      <section className="flex justify-center tracking-widest mb-10">
        <span
          className="border-2 rounded-lg p-2 w-5/12 text-center md:ml-auto md:w-2/12 cursor-pointer
          hover:bg-zinc-200 hover:text-slate-500 duration-300"
          onClick={() => setAreRulesShown((prevState) => !prevState)}
        >
          RULES
        </span>
      </section>
      <div className="md:ml-auto md:w-1/2">
        <GameRules
          areRulesShown={areRulesShown}
          setAreRulesShown={setAreRulesShown}
        />
      </div>
    </div>
  );
}

export default App;
