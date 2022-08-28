import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hooks-store/useStore";

const ProductItem = (props) => {
  const dispatch = useStore(false)[1];
  const toggleFavoriteHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavoriteHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
