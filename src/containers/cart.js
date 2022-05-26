import { increment, clear, decrement,removeItem } from "../store/cartSlice";
import { cartTotalPriceSelector } from "../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import { useMsal, useAccount } from "@azure/msal-react";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  
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
    await fetch("https://eldoradoapi-production.azurewebsites.net/api/orders", {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const CheckOut = async () => {
    const req = await fetch(
      `https://eldoradoapi-production.azurewebsites.net/api/Address/(id)(customerId)?customer=${account.username}`
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
      await fetch("https://eldoradoapi-production.azurewebsites.net/api/Address", {
        method: "POST",
        body: JSON.stringify(address),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newAddress = await fetch(
        `https://eldoradoapi-production.azurewebsites.net/api/Address/(id)(customerId)?customer=${account.username}`
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
      <div>
        {cart.length > 0 ? (
          <button onClick={CheckOut}>Check Out</button>
        ) : (
          <div>Your Cart is empty.</div>
        )}
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
            <div>
              <span>{cartItem.name}</span>
              <span>Amount: {cartItem.quantity * cartItem.price} SEK</span>
              <div>
                <button
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartItem.id));
                  }}
                >
                  -
                </button>
              </div>
              <span>{cartItem.quantity}</span>{" "}
              <span>
                {" "}
                <button
                  disabled={cartItem.quantity === 0}
                  onClick={() => {
                    dispatch(removeItem(cartItem.id));
                  }}
                >
                  {" "}
                  X Remove item
                </button>
              </span>
              <div>
                <button
                  disabled={cartItem.quantity === 0}
                  onClick={() => {
                    dispatch(increment(cartItem.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(clear());
                  }}
                >
                  clear cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {totalPrice > 0 && <span>{totalPrice} SEK</span>}
      </div>
    </>
  );
};

export default Cart;