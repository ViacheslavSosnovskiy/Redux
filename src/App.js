import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TodoPage from "./pages/TodoPage/TodoPage";
import CounterPage from "./pages/CounterPage/CounterPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="counter" element={<CounterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
