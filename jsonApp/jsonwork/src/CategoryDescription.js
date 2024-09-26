import { useParams } from "react-router-dom";
import goods from "./data/goods.json";
import category from "./data/category.json";
import { nanoid } from "nanoid";

function CategoryDescription() {
  const { categoryId } = useParams();
  const goodsArr = Object.values(goods).filter(
    (item) => item.category === Number(categoryId)
  );
  return (
    <div>
      <h1>Категория: {category[categoryId].name}</h1>
      <ul>
        {goodsArr.map((item) => (
          <li key={nanoid()}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryDescription;
