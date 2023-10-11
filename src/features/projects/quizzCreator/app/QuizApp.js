import React from "react";
import QuizAppLayout from "./QuizAppLayout";
import { Container } from "semantic-ui-react";
import './styles.css'

export default function QuizApp() {
  return (
    <Container className="main">
    <div className="quizz_app">
      <QuizAppLayout/>
      </div>
      </Container>
  )
}