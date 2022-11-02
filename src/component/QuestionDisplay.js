// import { useState } from "react";

// export default function QuestionDisplay (props) { 
//     const {question} = props
//     //The crazy path to the props of question
//     const qPath = {question}.question[0]
//     const hi = 'hi'
//     console.log()
    
//     const [showAnswer, setShowAnswer] = useState(null)
    
//     const handleShow = () =>{

//         setShowAnswer(!showAnswer)
//     }
//     return(
//         <div>
//             <h1>Question: {qPath.question}</h1>
//             <h2>Category: {qPath.category.title}</h2>
//             <h3>Point: {qPath.value}</h3>
//         <h1>{showAnswer ? qPath.answer : null}</h1>
//         <button title="Show Answer" onClick={handleShow}>Show Answer!</button>
//         </div>
//     )
// }