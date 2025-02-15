import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Posts from './component/Posts';
import Addposts from './component/Addposts';
import Layout from './component/Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>}  />
          <Route path='/about' element={<About/>}  />
          <Route path='/post' element={<Posts/>}  />
          <Route path='/addpost' element={<Addposts />}  />
          <Route path='*' element={<h1>404 not Found</h1>}  />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
