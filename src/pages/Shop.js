import { Fragment} from "react";
import ProductList from "../components/Shop/ProductList";
import classes from './Shop.module.css';


const Shop = () => {
  return (
    <Fragment>
      <div className={classes.container}>
      <ProductList/>
      </div>
    </Fragment>
  );
};
export default Shop;
