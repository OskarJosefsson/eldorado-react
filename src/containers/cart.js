import { increment, clear, decrement, removeItem } from "../store/cartSlice";
import { cartTotalPriceSelector } from "../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useMsal, useAccount } from "@azure/msal-react";
import classes from './cart.module.css';
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const flatRate = Number(20);
  const localPickup = Number(25);
  const postOrder = async (id) => {
    const detailsList = [];
    cart.forEach((element) => {
      const prodId = {
        productId: element.id,
        quantity: element.quantity,
      };
      detailsList.push(prodId);
    });
    const customerId = account.idTokenClaims.emails[0];
    let addressId = id;
    
    let customer = {
      customerId: customerId,
      addressId: addressId,
      details: detailsList,
    };
    await fetch("https://eldorado-development.azurewebsites.net/api/orders", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const CheckOut = async () => {
    const req = await fetch(
      `https://eldorado-development.azurewebsites.net/api/Address/(id)(customerId)?customer=${account.username}`
    );

    if (req.status === 204) {
      const { username } = account;
      const { streetAddress, postalCode, city } = account.idTokenClaims;
      const address = {
        customerId: username,
        street: streetAddress,
        city,
        postalCode,
      };
      await fetch(
        "https://eldorado-development.azurewebsites.net/api/Address",
        {
          method: "POST",
          body: JSON.stringify(address),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newAddress = await fetch(
        `https://eldorado-development.azurewebsites.net/api/Address/(id)(customerId)?customer=${account.username}`
      );
      const response = await newAddress.json();

      postOrder(response.id);
      dispatch(clear());
    } else {
      const res = await req.json();

      postOrder(res.id);
      dispatch(clear());
    }
  };
      
  return (
    <>
    <div className={classes.container}>
      <main className={classes.cartItems}> 
      <table>
        <thead>
          <tr>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.id}>
              <td><button disabled={cartItem.quantity === 0} onClick={() => { dispatch(removeItem(cartItem.id)); }} className={classes.removeItem}>X</button></td>
              <td>{cartItem.name}</td>
              <td >${cartItem.price}</td>
              <td><button disabled={cartItem.quantity === 1} onClick={() => { dispatch(decrement(cartItem.id)); }} className={classes.decrement}>-</button>{cartItem.quantity}
              <button disabled={cartItem.quantity === 0} onClick={() => { dispatch(increment(cartItem.id)); }} className={classes.increment}>+</button></td>
              <td className={classes.priceColor}>${cartItem.price * cartItem.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
      <aside className={classes.sidebar}>
        <div className={classes.totalsBar}>Cart Totals</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.font}>Subtotal</td>
              
              
            </tr>
            <tr>
              <td className={classes.font}>Shipping </td>
              <td>Flat rate: <span className={classes.priceColor}>${flatRate}.00</span> <input type="radio" name="shipping" value={flatRate}></input>
              <br></br> Free shipping <input type="radio" name="shipping" value={flatRate}></input>
              <br></br>Local pickup: <span className={classes.priceColor}>${localPickup}.00</span> <input type="radio" name="shipping" value={flatRate}></input>
              <br></br> Shipping to<br></br> 
               Change address</td>
            </tr>
            <tr>
              <td className={classes.font}>Total </td>
              <td className={classes.priceColor}>${totalPrice}</td>
              
            </tr>
            
          </tbody>
        </table>
        <button className={classes.checkoutbtn} onClick={CheckOut}>Proceed to checkout</button>
      </aside>
    </div>
     
         
          </>
          
  );
};

export default Cart;
