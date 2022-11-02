import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import QuestionDisplay from './component/QuestionDisplay';
import Form from './component/Form';
function App() {

  const [question, setQuestion] = useState(null)
  
  useEffect(()=>{
    getQuestion()
  },[])

  const getQuestion = async () => {
    try{
      const res = await fetch ("http://jservice.io/api/random")
      const data = await res.json()
      setQuestion(data)
    } catch (error) {

    }
  }
  
  return (
    <div className="App">
      {question && <Form getQuestion = {getQuestion} question={question} />}
      {/* {question && <QuestionDisplay question={question} />} */}
    </div>
  );
}

export default App;
