import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';

function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
            </Routes>
    )   
}

export default AppRoutes;