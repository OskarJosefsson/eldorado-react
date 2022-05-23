import classes from './NavbarTop.module.css';
import { Link } from "react-router-dom";
const NavbarTop = () => {

  return (
    <div className={classes.navtop}>

          <div>
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/Shop" className={classes.link}>Shop</Link>
          <Link to="/Products" className={classes.link}>Products</Link>
          <Link to="/Shoppingcart" className={classes.link}>Shoppingcart</Link>
          </div>
          
    </div>
  );
};

export default NavbarTop;
