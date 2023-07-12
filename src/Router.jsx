import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio/Inicio.jsx"
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Favorites from "./pages/favorites/Favorites.jsx"
import Container from "./Components/Container/Container.jsx"


const Router = () => {
  return (
  <>
     <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/favoritos" element={<Favorites/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </>
   
  )
}

export default Router