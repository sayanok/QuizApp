import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <button>
        <Link to="/quiz">クイズスタート</Link>
      </button>
    </>
  );
};

export default Home;
