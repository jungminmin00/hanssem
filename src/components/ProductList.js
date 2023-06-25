import './ProductList.css';
import pData from '../product.json';
import { Link } from 'react-router-dom';
import { addWish, removeFromWish } from '../redux/WishSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductList(){
    const dispatch = useDispatch();
    // const state = useSelector(state => state);
    const {wishProductIds} = useSelector(state => state.wish);
    // console.log(wishProductIds);

    return(
        <div id="productList">
            <h1>
                PRODUCTS
            </h1>
            <div>
                <ul>
                    {pData.map((item) => (
                        <li key={item.id}>
                            <div>
                                <figure>
                                    <img src={item.photo} alt={item.title} />   
                                    <figcaption>
                                        <Link to={`/productList/${item}`}>
                                        <dl>
                                            <dt>{item.title}</dt>
                                            <dd>{item.price}원</dd>
                                        </dl>
                                        </Link>
                                    </figcaption>
                                </figure>
                                <div className='pBtn'>
                                    <p>
                                        {
                                            !wishProductIds.includes(item.id) &&
                                            (<button type="button"
                                                onClick={() => {dispatch(addWish(item.id))}}
                                            >
                                                추가
                                            </button>)
                                        }
                                    </p>
                                    <p>
                                        {
                                            wishProductIds.includes(item.id) &&
                                            (<button type="button"
                                                onClick={() => {dispatch(removeFromWish(item.id))}}
                                            >
                                                삭제
                                            </button>)
                                        }
                                    </p>
                                </div>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}