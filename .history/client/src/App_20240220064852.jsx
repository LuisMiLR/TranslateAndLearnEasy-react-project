import { BrowserRouter, Routes, Route } from "React-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}
