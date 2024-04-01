import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewWords() {
  const [currentwordIndex, setCurrentWordIndex] = useState(0);

  const goToNextWord = () => {
    setCurrentWordIndex((prevIndex) => prevIndex + 1);
  };

  return <div></div>;
}
