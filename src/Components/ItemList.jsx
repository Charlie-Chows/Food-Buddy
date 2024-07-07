import { additem } from "../Utils/cartSlice";
import { CDN_URL } from "./../Utils/constants";
import { useDispatch} from 'react-redux'

const ItemList = ( { items } ) => {

    const dispatch = useDispatch();

    const handleAddItems = ( item ) => {
        dispatch( additem(item) );
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className = "m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className = "w-9/12">
                            <div className = "py-2">
                                <span className=" font-semibold"> { item.card.info.name } </span>
                                <span> - ₹ { item.card.info.defaultPrice / 100 || item.card.info.price / 100} </span>
                            </div>
                            <p className = "text-xs"> { item.card.info.description } </p>
                        </div>
                        <div className = "w-3/12">
                            <div className = "absolute">
                                <button onClick={ () => handleAddItems(item) } className = "p-2 m-4 rounded-lg bg-black  text-red-500 shadow-lg font-semibold"> Add + </button>
                            </div>
                            <img src = {CDN_URL + item.card.info.imageId } className = "w-40 p-4"/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;