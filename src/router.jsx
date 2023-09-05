
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importing Components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe'; 
import NavBar from "./components/NavBar";
const Router = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
  
      <Route path='/' element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path='search' element={<Search />} />
      <Route path='recipes/:id' element={<Recipe />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Router;
