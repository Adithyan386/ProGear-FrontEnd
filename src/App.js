import AdminDash from './Admin/AdminDash';
import Orders from './Admin/Orders';
import Produts from './Admin/Produts';
import TrackOrder from './Admin/TrackOrder';
import UserView from './Admin/UserView';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Sign from './Components/Sign';
import Earnings from './Admin/Earnings';
import Feedback from './Admin/Feedback';
import { Route, Routes } from 'react-router-dom';
import Homes from './Pages/Homes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Keyboard from './Pages/Keyboard';
import Addprouduct from './Admin/Addprouduct';
import ViewProduct from './Admin/ViewProduct';
import Shop from './Pages/Shop';
import Cart from './User/Cart';
import UserProfile from './User/UserProfile';
import UserOrder from './User/UserOrder';
import OrderPage from './Pages/OrderPage';
import Productdetails from './Pages/Productdetails';
import ForgotPassword from './Pages/ForgotPassword';
import PasswordChange from './Pages/PasswordChange';
function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Homes/>}></Route>
          <Route path='/home' element={<Homes/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign' element={<Sign/>}></Route>
          <Route path='/admin' element={<AdminDash/>}></Route>
          <Route path='/user' element={<UserView/>}></Route>
          <Route path='/order' element={<Orders/>}></Route>
          <Route path='/track' element={<TrackOrder/>}></Route>
          <Route path='/product' element={<Produts/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
          <Route path='/earnings' element={<Earnings/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/keyboard' element={<Keyboard category={'Keyboard'}/>}></Route>
          <Route path='/mouse'element={<Keyboard category={'Mouse'}/>}></Route>
          <Route path='/monitor'  element={<Keyboard category={'Monitor'}/>}></Route>
          <Route path='/hard' element={<Keyboard category={'Hard Disk'} />}></Route>
          <Route path='/addproduct' element={<Addprouduct/>}></Route>
          <Route path='/viewproduct' element={<ViewProduct/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/profile' element={<UserProfile/>}></Route>
          <Route path='/userorder' element={<UserOrder/>}></Route>
          <Route path='/orderpage/:id'element={<OrderPage/>}></Route>
          <Route path='/details1/:id'element={<Productdetails/>}></Route>
          <Route path='/forPass' element={<ForgotPassword/>}></Route>
          <Route path='/ResetPass/:token' element={<PasswordChange/>}></Route>
      </Routes>
      <Footer/>


      
     

    </>
  );
}

export default App;
