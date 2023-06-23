import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Content from './pages/Content';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';


export default function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='productList' element={<ProductList />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}