import { increment, clear, decrement } from "../store/cartSlice";
import { cartTotalPriceSelector } from "../store/selectors";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const totalPrice = useSelector(cartTotalPriceSelector);
    console.log(cart);
    return(
        <>
        <div>
            {cart.length> 0 ? (<button onClick={() =>{dispatch(clear());}}>Check Out</button>
            ):(
                <div>Your Cart is empty.</div>
            )}
            {cart.map((cartItem) => (
                <div key={cartItem.id}>
                    <image src={cartItem.cover} alt= {cartItem.name} />
                    <div>
                        <span>{cartItem.name}</span>
                        <span>
                            Amount: {cartItem.quantity * cartItem.price} SEK
                        </span>
                        <div>
                            <button disabled={cartItem.quantity === 1} onClick ={()=>{
                                dispatch(decrement(cartItem.id));
                            }}
                            >-</button>
                        </div>
                        <div>{cartItem.quantity}</div>
                        <div>
                            <button disabled={cartItem.quantity === 0} onClick ={()=>{
                                dispatch(increment(cartItem.id));
                            }}
                            >+</button>
                            <button onClick={() =>{
                                dispatch(clear());
                            }}>clear cart</button>
                        </div>
                    </div>
                </div>
            ))}
            {totalPrice>0 &&<span>{totalPrice} SEK</span>}
            
         </div>
         
        </>
        );
        
};

export default Cart;