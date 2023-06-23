import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Content from "./pages/Content";

export default function main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Content />}/>
                </Routes>
            </App>
        </BrowserRouter>
    );
}