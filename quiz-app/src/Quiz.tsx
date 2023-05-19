import React, { useState } from "react";
import { Link } from "react-router-dom";

const Quiz: React.FC = () => {
  const [quizText, setQuizText] = useState("");
  const [choices, setChoices] = useState<Array<string>>(["1", "2", "3", "4"]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [record, setRecord] = useState<number>();

  function getAndSedQuizAndChoices() {}

  function onClickHandler() {
    // numberOfQuestionsの数を増やす
    judgment();
  }

  function judgment() {
    // クイズの正誤を判定し、正解数を記録する
  }

  return (
    <>
      <p>{quizText}</p>
      {choices.map((choice) => {
        return <button>{choice}</button>;
      })}

      {numberOfQuestions !== 4 ? (
        <button
          onClick={() => {
            onClickHandler();
          }}
        >
          次に進む
        </button>
      ) : (
        <button
          onClick={() => {
            judgment();
          }}
        >
          <Link to="result">結果を見る</Link>
        </button>
      )}
    </>
  );
};

export default Quiz;
