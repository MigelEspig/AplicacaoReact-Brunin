import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Cart from './Pages/Cart';
import Pedidos from './Pages/Pedidos';

function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Pedidos" element={<Pedidos />} />
            </Routes>
    )   
}

export default AppRoutes;