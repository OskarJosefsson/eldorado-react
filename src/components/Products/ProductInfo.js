import { Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import classes from './ProductInfo.module.css';
import { fetchProducts } from '../../store/productsSlice';
import {addToCart} from '../../store/cartSlice';
import { useEffect } from 'react';

const ProductInfo = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch((fetchProducts()));
    // console.log(products.list);
  }, [dispatch]);

  return (
    <Fragment>
      <section className={classes.infobox}>
     {products.loading && <div>loading...</div>}
     <div>
       {products.list.map((product) => (
         <div key={product.id}>
           <div className={classes.description}>{product.name}</div>
           <span>{product.price}</span>
           <button onClick={()=>{
          dispatch(addToCart(product))}}> Add</button>
          </div>
       ))}
     </div>
     </section>
    </Fragment>
  );
};

export default ProductInfo;

/* <section className={classes.infobox}> */
/* <div className={classes.heading} key={products.list.id}>{products.list.name}</div>
        <div className={classes.description}>{products.list.description}</div>
        <hr></hr>
        <div className={classes.price}>${products.list.price}</div>
        <button className={classes.btn} onClick={() => {
                dispatch(addToCart(products));
              }}>Add to cart</button>
        <div>
          Category:{" "}
          <span className={classes.cat}>{products.list.categoryName}</span>
        </div> */
        /* <div>Tags:{" "}
        {products.list.tagNames.map((x) => (<span key={x} className={classes.tag}>{x}</span>))}
        </div> */