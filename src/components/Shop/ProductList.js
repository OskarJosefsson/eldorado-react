import { Fragment, useEffect, useState, useCallback } from "react";
import classes from './ProductList.module.css';
import useHttpGet  from '../../hooks/useHttpGet';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const transformData = useCallback(async (Obj) => {
    const listOfProducts = [];
    Obj.forEach((element) => {
      listOfProducts.push(element);
    });

    setProducts(listOfProducts);
  }, []);

  const { isLoading, error, sendRequest } = useHttpGet(transformData);

  useEffect(() => {
    sendRequest({
      url: "https://eldorado-development.azurewebsites.net/api/products",
    });
  }, [sendRequest]);

  const dispatch = useDispatch();

  return (
    <Fragment>
      {isLoading && <LoadingSpinner/>}
      {products.map((item) => {
        return (
          <section className={classes.infobox} key={item.id}>
            <div className={classes.wrapHeading}>
            <Link to="/Products" state={{from: item}} className={classes.heading}>{item.name}</Link>
            </div>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.infoContainer}>
            <div className={classes.price}>${item.price}</div>
            <div className={classes.catAndTag}>Category: <span className={classes.cat}>{item.categoryName}</span>
            <div>Tags:{" "}{item.tagNames.map((x) => (<span key={x} className={classes.tag}>{x}</span>))}</div>
            </div>
            <div><button className={classes.btn}onClick={() => {dispatch(addToCart(item));}}>{" "}Add</button>
            </div>
            </div>
          </section>
        );
      })}
    </Fragment>
  );
};

export default ProductList;