import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Content from './components/Content';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import WishList from './components/WishList';


export default function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='productList' element={<ProductList />}/>
                    <Route path='wishList' element={<WishList />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}