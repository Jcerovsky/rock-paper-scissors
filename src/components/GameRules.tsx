import React from "react";
import "../index.css";

interface Props {
  areRulesShown: boolean;
  setAreRulesShown: React.Dispatch<React.SetStateAction<boolean>>;
}

function GameRules({ areRulesShown, setAreRulesShown }: Props) {
  return (
    <div
      className={`${
        areRulesShown ? "translate-y-0 " : "translate-y-full opacity-0"
      } rules p-4 bg-white z-20 absolute top-1/4 rounded-lg text-black text-center text-3xl hover:scale-105 
      duration-500 ease-in-out md:flex md:flex-col`}
    >
      <p className=" mb-10 font-bold md:bg-white ">RULES</p>
      <img src="/assets/image-rules.svg" alt="game rules" />
      <button
        className="m-8 opacity-50 hover:scale-95"
        onClick={() => setAreRulesShown(false)}
      >
        ×
      </button>
    </div>
  );
}

export default GameRules;
