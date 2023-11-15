import { BrowserRouter, Route,Routes} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Order from './Pages/Order/Order'
import Cart from './Pages/Cart/Cart'
import Products from './Pages/Products/Products'
import SignUp from './Pages/SignUp/SignUp'
import Home from './Pages/Home/Home'
import ShopCategory from './Pages/Category/ShopCategory'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element ={<Home />}>
      <Route path='/men' element={<ShopCategory category = 'men'/>} />
      <Route path='/women' element={<ShopCategory category = 'women' /> } />
      <Route path='/kids' element={<ShopCategory category = 'kids' /> } />
      <Route path='/product' element={<Products/>}>
        <Route path=':productId' element={<Products/>} />
      </Route>
      <Route path='/order' element={<Order /> } />
      <Route path='/signUp' element={<SignUp /> } />
      <Route path='/cart' element={<Cart /> } />
      <Route path='/contact' element={<Contact /> } />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
