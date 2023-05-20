import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Result: React.FC = () => {
  const location = useLocation();
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState<number>(location.state as number);

  return (
    <>
      <p>クイズにかかった時間</p>

      <p>{numberOfCorrectAnswers}問正解</p>
      <p>あなたは{numberOfCorrectAnswers >= 2 ? "合格" : "不合格"}です</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Result;
