const ROUTES = {
    newQuizRoute: () => '/quizApp/quizzes/new',
    quizRoute: (id) => `/quizApp/quizzes/${id}`,
    quizzesRoute: () => '/quizApp/quizzes',
    newTopicRoute: () => '/quizApp/topics/new',
    topicRoute: (id) => `/quizApp/topics/${id}`,
    topicsRoute: () => '/quizApp/topics',
  };
  
  export default ROUTES;