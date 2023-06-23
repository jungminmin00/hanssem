import './ProductList.css';
import pData from '../api/product.json';
// import $ from 'jquery';
export default function ProductList(){
    return(
        <div id="productList">
            <div>
                <ul>
                    {pData.map((item) => (
                        <li key={item.id}>
                            <div>
                                <figure>
                                    <img src={item.photo} alt={item.title} />   
                                    <figcaption>
                                        <dl>
                                            <dt>{item.title}</dt>
                                            <dd>{item.price}원</dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                                <div className='pBtn'>
                                    <p><button type="button">추가</button></p>
                                    <p><button type="button">삭제</button></p>
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