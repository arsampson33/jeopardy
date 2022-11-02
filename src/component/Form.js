import { useState } from "react";
import "../Form.css"
import {BsXLg, BsCheckLg, BsArrowCounterclockwise} from 'react-icons/bs'

export default function Form(props) {
  const { getQuestion, question } = props;
  // let score = 0;
  const qPath = { question }.question[0];
  const [showAnswer, setShowAnswer] = useState(null);
  const points  = qPath.value
  const [score, setScore] = useState(0)

  const handleShow = () => {
    setShowAnswer(!showAnswer);
  };
  const handleHide = () => {
    setShowAnswer(showAnswer == null);
  };
 
  const questionHandle = (e) =>{
    
    getQuestion()
    handleHide()
  }
  const increase = (e) => {
    setScore(score+points)

  };
  const decrease = (e) => {
    setScore(score-points)

  };
  const reset = (e) => {
    setScore(0)
  }
 
  return (
    <div className="body">
      <h1 id="heading">Jeopardy</h1>
      <h2 id="score">${score}</h2>
      <div className="scoreBtn">
      <button title="increase" onClick={increase} id="increaseBtn" > <BsCheckLg /> </button>
      <button title="decrease" onClick={decrease} id="decreaseBtn">
      <BsXLg/>
      </button>
      <button title='reset' onClick={reset} id="resetBtn"> <BsArrowCounterclockwise /></button>
      </div>
      <button value="Get Question" onClick={questionHandle} name="getQuestion" id="questionBtn">
        Get Question
      </button>
      <div className="textBox">
      <h2 className="label" id="category">Category  <br/> {qPath.category.title.toUpperCase()} </h2>
      <h3 className="label" id="point">${qPath.value}</h3>
      <h1 className="label" id="question">Question: {qPath.question}</h1>
      <h1 className="label" id="answer">{showAnswer ? qPath.answer : null}</h1>
      </div>
      <button id="showBtn" title="Show Answer" onClick={handleShow}>
        Show Answer!
      </button>
    </div>
  );
}
