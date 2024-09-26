import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Category from "./Category";
import CategoryDescription from "./CategoryDescription";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="ref" href="/">
          Main
        </a>
        <a className="ref" href="/category">
          Category
        </a>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryId" element={<CategoryDescription />} />
      </Routes>
    </div>
  );
}

export default App;
