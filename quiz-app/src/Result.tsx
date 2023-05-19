import React, { useState } from "react";
import { Link } from "react-router-dom";

const Result: React.FC = () => {
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  return (
    <>
      <p>クイズにかかった時間</p>
      <p>正解数{numberOfCorrectAnswers}</p>
      <p>合否{numberOfCorrectAnswers >= 2 ? "合格" : "不合格"}</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default Result;
