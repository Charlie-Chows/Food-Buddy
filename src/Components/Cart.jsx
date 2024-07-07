import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector( (store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className = " text-center m-4 p-4 ">
            <h1 className = " font-bold text-2xl">cart</h1>
            <button onClick={handleClearCart} className = "m-2 p-2 bg-black text-white rounded-lg"> Clear cart </button>
            { cartItems.length === 0 && <h1 className = "p-4 m-4 text-3xl font-semibold"> Please fill your cart by adding Your favorite Items 😋😜😝</h1>}
            <div className = "w-6/12 mx-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;