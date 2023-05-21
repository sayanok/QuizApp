import React, { useEffect, useRef, useState } from "react";
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

  const [time, setTime] = useState<number>(0);
  let timerId = useRef<NodeJS.Timer>();

  useEffect(() => {
    getAndSedQuizAndChoices();
  }, [numberOfQuestions]);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }, []);

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

  function judgeAndStopStopwatch() {
    judgment();
    clearInterval(timerId.current);
  }

  function judgment() {
    if (usersAnswer === correctAnswer) {
      setRecord((record) => record + 1);
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
            judgeAndStopStopwatch();
          }}
          disabled={usersAnswer ? false : true}
        >
          <Link to="/result" state={[record, time]}>
            結果を見る
          </Link>
        </button>
      )}
      <p>
        中断してトップにもどる
        <Link
          to="/"
          onClick={() => {
            clearInterval(timerId.current);
          }}
        >
          Home
        </Link>
      </p>
    </>
  );
};

export default Quiz;
