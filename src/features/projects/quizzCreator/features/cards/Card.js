import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectCardById } from "./cardsSlice";
import '../../app/styles.css'

export default function Card({ id }) {
  const card = useSelector(selectCardById(id));
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="quiz-card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
