import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Posts from './component/Posts';
import Addposts from './component/Addposts';
import Layout from './component/Layout';
import { use, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('login'));
  const [uname, setUname] = useState('');
  const [upass, setUpass] = useState('');
  const [error, setError] = useState(null);
  const handeluname = (e) =>{
    setUname(e.target.value);
  }

  const handelupass = (e) =>{
    setUpass(e.target.value);
  }
  
  const handlesubmit = (e) =>{
    e.preventDefault();
    if(uname == "admin" && upass == "123"){
      sessionStorage.setItem('login',true)
      setIsLoggedIn(sessionStorage.getItem('login'));
      setError(null);
    }
    else{
      setError('Invalid Username or Password')
    }
  }

  const logout = ()=>{
    sessionStorage.setItem('login',false)
    setIsLoggedIn(false);
    setUname('');
    setUpass('')
    setError(null);
  }

  return (
    <>
    {
      isLoggedIn ? (
        <>
        <h1>Welcome </h1>
        <input type='button' value="Logout" onClick={logout} />
        </>
      ) : (
        <>
        <form onSubmit={handlesubmit} >
          Username: <input type='text' value={uname} onChange={handeluname}  />
          Password: <input type='password' value={upass} onChange={handelupass}  />
          <input type='submit' value="Login" />
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
        </>
      )
    }
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/post' element={<Posts/>}  />
          <Route path='/addpost' element={<Addposts />}  />
          <Route path='*' element={<h1>404 not Found</h1>}  />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
