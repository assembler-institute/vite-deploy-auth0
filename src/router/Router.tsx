import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}
