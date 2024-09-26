import category from "./data/category.json";
import { nanoid } from "nanoid";

function Category() {
  return (
    <div>
      <h1>Category</h1>
      <nav>
        <ul>
          {Object.values(category).map((item) => (
            <li key={nanoid()}>
              <a href={`category/${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Category;
