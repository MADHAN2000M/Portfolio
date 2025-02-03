import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import ProductList from './components/productList'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"
import SignUp from './components/SignUp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import NewProduct from './components/NewProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {
  

  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/signup' element={  <SignUp/> } />
        <Route path='/products' element={ <ProductList /> } />
        <Route path='/newproducts' element={ <NewProduct /> } />
        <Route path='/update/:id' element={ <UpdateProduct /> } />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
