import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Result: React.FC = () => {
  const location = useLocation();
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState<number>(location.state[0] as number);
  const [time, setTime] = useState<number>(location.state[1] as number);

  return (
    <>
      <p>クイズにかかった時間: {time}秒</p>
      <p>{numberOfCorrectAnswers}問正解</p>
      <p>あなたは{numberOfCorrectAnswers >= 2 ? "合格" : "不合格"}です</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Result;
