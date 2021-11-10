import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Bikes from './components/Bikes/Bikes';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import OrderProduct from './components/OrderProduct/OrderProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import Payment from './components/Payment/Payment';
import CustomerReview from './components/CustomerReview/CustomerReview';
import AddBike from './components/AddBike/AddBike';
import AllOrders from './components/AllOrders/AllOrders';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import Managebike from './components/Managebike/Managebike';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutus">
            <About> </About>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/bikes">
            <Bikes> </Bikes>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/customerreview">
            <CustomerReview> </CustomerReview>
          </Route>

          <Route path="/addbike">
            <AddBike> </AddBike>
          </Route>
          <Route path="/allorders">
            <AllOrders> </AllOrders>
          </Route>
          <Route path="/addadmin">
            <MakeAdmin> </MakeAdmin>
          </Route>
          <Route path="/managebike">
            <Managebike> </Managebike>
          </Route>


          <PrivateRoute path="/orderproducts/:id">
            <OrderProduct></OrderProduct>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders> </MyOrders>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
