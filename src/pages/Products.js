import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import classes from "./Products.module.css"

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id, name, description, price, categoryName, tagNames } = location.state.from;
  const product = {id, name, price, quantity: 1 };
  return (
    <Fragment>
      <div className={classes.wrapProduct}>
        <section className={classes.infobox}>
        <div className={classes.wrapHeading}>
          <div className={classes.heading} key={id}>{name}</div>
          </div>
          <div className={classes.description}>{description}</div>
          <div className={classes.infoContainer}>
          <div className={classes.price}>${price}</div>
          <button className={classes.btn} onClick={() => {dispatch(addToCart(product));}}>Add to cart</button>
        <div className={classes.catAndTag}>Category:{" "}<span className={classes.cat}>{categoryName}</span>
        <div>Tags:{" "}{tagNames.map((x) => (<span key={x} className={classes.tag}>{x}</span>))}</div> 
        </div>
        </div> 
        </section>
        </div>
    </Fragment>
    );
};
export default Products;
