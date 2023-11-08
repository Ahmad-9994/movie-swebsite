
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SingleMovie from './SingleMovie';
import Search from './Search';
import Movies from './Movies';


function App() {
  return (


               <BrowserRouter>
                 <Routes>
                   <Route path='/' element={<Home />}></Route>
                   <Route path='/movie/:id' element={<SingleMovie />}></Route>
                   <Route path='/search' element={<Search />}></Route>
                   <Route path='/movies' element={<Movies />}></Route>
                 </Routes>
               </BrowserRouter>   
               

  );
}

export default App;
