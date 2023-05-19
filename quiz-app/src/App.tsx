import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Quiz from "./Quiz";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="quiz" Component={Quiz} />
          <Route path="result" Component={Result} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
