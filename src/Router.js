import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";

// 라우터를 위한 컴포넌트, 레이아웃도 가져와 배치 시켜줬음
// 이전에 레이아웃을 이곳에 배치했지만, 다른 페이지는 적용되지 않아서 TodoList에 옮김

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
