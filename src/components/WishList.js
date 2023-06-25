import "./WishList.css";
import data from '../product.json';
import { useDispatch, useSelector } from "react-redux";
import { removeFromWish, clearAllItems } from "../redux/WishSlice";

export default function WishList(){
    const {wishProductIds} = useSelector(state => state.wish);
    const wishProductData = data.filter(product => wishProductIds.includes(product.id));
    const dispatch = useDispatch();

    return(
        <div id="wishList">
        <h1>WISHLIST</h1>
            <ul>
                {
                    wishProductData.map((item) =>(
                        <li key={item.id}>
                            <div>
                                <figure>
                                    <img src={item.photo} alt={item.title} />   
                                    <figcaption>
                                        <dl>
                                            <dt>{item.title}</dt>
                                            <dd>{item.price}</dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                                <div className='pBtn'>
                                    <p>
                                        <button type="button"
                                            onClick={() => {dispatch(removeFromWish(item.id))}}
                                        >
                                            삭제
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
            
                <div id="emptyBtn">
                    {
                        !wishProductData.length <1 &&        
                        (<button type='button'
                            onClick={() => {dispatch(clearAllItems())}}
                        >비우기</button>)
                    }
                    {
                        wishProductData.length <1 &&
                        (<p>장바구니가 비어있습니다.</p>)
                    }
                </div>
        </div>
    );
}