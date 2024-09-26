import "./App.css";
import category from "./data/category.json";
import { nanoid } from "nanoid";

function App() {
  return (
    <div className="App">
      <header>
        <a href="/">Main</a>
      </header>
      <nav>
        <ul>
          {Object.values(category).map((item) => (
            <li key={nanoid()}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default App;
