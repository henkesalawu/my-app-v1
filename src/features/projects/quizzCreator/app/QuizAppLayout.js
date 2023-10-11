import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import ROUTES from "./routes";
import './styles.css'


export default function QuizAppLayout() {
    return (
        <div>
            <nav className="quizz_nav">
                <ul>
                <li>
                <Link to={ROUTES.topicsRoute()}>
                    Topics
                    </Link>
                </li>
                <li>
                    <NavLink to={ROUTES.quizzesRoute()} >
                    Quizzes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.newQuizRoute()} >
                    New Quiz
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
      

    );
}
