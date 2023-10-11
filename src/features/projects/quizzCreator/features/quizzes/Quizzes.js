import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "./quizzesSlice";
import { Container, Segment } from "semantic-ui-react";
import '../../app/styles.css'
import QuizAppLayout from "../../app/QuizAppLayout";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  return (
    <Container className="main" textAlign="center">
    <section className='quiz-section' >
    <QuizAppLayout />
      <h1>Quizzes</h1>
      <Segment textAlign="center">
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      </Segment>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
    </Container>
  );
}