import { Fragment } from 'react';

import classes from './ProductInfo.module.css';

const ProductInfo = (props) => {
  console.log(props.prod);
  return (
    <Fragment>
      <section className={classes.infobox}>
        <div className={classes.heading}>{props.prod.name}</div>
        <div className={classes.description}>{props.prod.description}</div>
        <hr></hr>
        <div className={classes.price}>${props.prod.price}</div>
        <button className={classes.btn}>Add to cart</button>
        <div>
          Category:{" "}
          <span className={classes.cat}>{props.prod.categoryName}</span>
        </div>
        <div>Tags:{" "}
        {props.prod.tagNames.map((x) => (<span key={x} className={classes.tag}>{x}</span>))}
        </div>
      </section>
    </Fragment>
  );
};

export default ProductInfo;