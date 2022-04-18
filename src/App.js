
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkOut" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
