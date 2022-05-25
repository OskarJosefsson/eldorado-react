import { Fragment, useEffect, useState, useCallback } from "react";
import classes from './ProductlList.module.css';
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
            <Link to="/Products" state={{from: item}} className={classes.heading}>{item.name}</Link>
            <div className={classes.description}>{item.description}</div>
            <hr></hr>
            <div className={classes.price}>${item.price}</div>
            <div>
              Category: <span className={classes.cat}>{item.categoryName}</span>
            </div>
            <div>
              Tags:{" "}
              {item.tagNames.map((x) => (
                <span key={x} className={classes.tag}>
                  {x}
                </span>
              ))}
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(addToCart(item));
                }}
              >
                {" "}
                Add
              </button>
            </div>
          </section>
        );
      })}
    </Fragment>
  );
};

export default ProductList;