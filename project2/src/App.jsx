import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import JS from "./screens/JS";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
