import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
const [questions, setQuestions] = useState([]);
useEffect(() => {
  fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => setQuestions(questions));
}, []);
function handleAddQuestions(newQuestions) {
  setQuestions([...questions, newQuestions])
}  
  return (
    <div>
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestions} questions={questions} setQuestions={setQuestions} /> : <QuestionList />}
    </main>
      );
      
      </div>)
}

export default App;
