import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Product from './components/Products/Products';
import Addtocard from './components/Addtocard';



function App() {
  return (
    <>
    <Routes>
        <Route path ='/' element={<HomePage/>} />
        <Route path ='/register' element={<Register/>} />
        <Route path ='/Login' element={<Login/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/Contact' element={<Contact/>} />
        <Route path ='/Policy' element={<Policy/>} />
        <Route path ='/*' element={<Pagenotfound/>} />
        <Route path ='/product' element={<Product/>} />
        <Route path ='/Addtocard' element={<Addtocard/>} />
        
      
    </Routes>
    </>
  );
}

export default App;
