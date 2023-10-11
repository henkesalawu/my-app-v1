import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
// import addTopic
import { addTopic } from "../features/topics/topicsSlice";
import { Container } from "semantic-ui-react";
import '../app/styles.css'
import QuizAppLayout from "../app/QuizAppLayout";

export default function TopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }
    
    dispatch(addTopic({id: uuidv4(), name: name, icon}))
    // dispatch new topic
    navigate(ROUTES.topicsRoute());
  };

  return (
    <Container className="main">
    <section className="quiz-section">
    <QuizAppLayout />
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
          className="quiz-input"
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            onChange={(e) => setIcon(e.currentTarget.value)}
            required
            defaultValue="default"
          >
            <option value="default" disabled hidden>
              Choose an icon
            </option>
            {ALL_ICONS.map(({ name, url }) => (
              <option key={url} value={url}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="quiz-center button" type="submit">Add Topic</button>
      </form>
    </section>
    </Container>
  );
}