import { useContext } from "react";

// import MealItemForm from './MealItemForm';
// import classes from './MealItem.module.css';
// import CartContext from '../../../store/cart-context';
export interface Project {
  name: string;
  description: string;
}
const ProjectItem = (props: Project) => {
  //   const cartCtx = useContext(CartContext);

  //   const price = `$${props.price.toFixed(2)}`;

  //   const addToCartHandler = amount => {
  //     cartCtx.addItem({
  //       id: props.id,
  //       name: props.name,
  //       amount: amount,
  //       price: props.price
  //     });
  //   };

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
      </div>
      {/* <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div> */}
    </li>
  );
};

export default ProjectItem;
