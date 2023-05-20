import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizData from "./QuizData";

const Quiz: React.FC = () => {
  const [quizText, setQuizText] = useState("");
  const [choices, setChoices] = useState<Array<string>>([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [usersAnswer, setUsersAnswer] = useState<string>();
  const [previousIssues, setPreviousIssues] = useState<Array<number>>([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    getAndSedQuizAndChoices();
  }, [numberOfQuestions]);

  function getAndSedQuizAndChoices() {
    let num = Math.floor(Math.random() * 10);
    if (previousIssues.includes(num)) {
      while (previousIssues.includes(num)) {
        num = Math.floor(Math.random() * 10);
      }
    }

    setQuizText(QuizData[num].quizText);
    setChoices(QuizData[num].choices);
    setCorrectAnswer(QuizData[num].correctAnswer);

    let issues = previousIssues;
    issues.push(num);
    setPreviousIssues(issues);
  }

  function onClickHandler() {
    setNumberOfQuestions(numberOfQuestions + 1);
    judgment();
    setUsersAnswer(undefined);
  }

  function judgment() {
    if (usersAnswer === correctAnswer) {
      setRecord((record) => {
        return record + 1;
      });
    }
  }

  return (
    <>
      {numberOfQuestions}問目
      <p>{quizText}</p>
      {choices.map((choice) => {
        return (
          <button
            onClick={() => {
              setUsersAnswer(choice);
            }}
          >
            {choice}
          </button>
        );
      })}
      {numberOfQuestions !== 4 ? (
        <button
          onClick={() => {
            onClickHandler();
          }}
          disabled={usersAnswer ? false : true}
        >
          次に進む
        </button>
      ) : (
        <button
          onClick={() => {
            judgment();
          }}
          disabled={usersAnswer ? false : true}
        >
          <Link to="/result" state={record}>
            結果を見る
          </Link>
        </button>
      )}
    </>
  );
};

export default Quiz;
