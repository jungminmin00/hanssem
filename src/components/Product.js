import "./Product.css";
import data from "../product.json"
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addWish, removeFromWish } from '../redux/WishSlice';
export default function Product(){
    const dispatch = useDispatch();
    console.log(wishProductIds);
    const {id} = useParams();
    const {wishProductIds} = useSelector(state => state.wish);
    
    console.log(id);
    return(
        <div id="product">
            <figure>
                <div>
                    <img src={data[id].photo} alt={data[id].name} />
                </div>
                <figcaption>
                    <dl>
                        <dt>{data[id].title}</dt>
                        <dd>{data[id].price}</dd> 
                    </dl>
                    <p>
                        {
                            <button type="button"
                                onClick={() => {dispatch(addWish(data[id].id))}}
                            >
                                추가
                            </button>
                        }
                    </p>
                </figcaption>
            </figure>
        </div>
    );
}