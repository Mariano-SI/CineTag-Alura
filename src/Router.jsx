import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio/Inicio.jsx"
import Header from "./Components/Header/Header.jsx"
import Footer from "./Components/Footer/Footer.jsx"


const Router = () => {
  return (
  <>
     <BrowserRouter>
      <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  </>
   
  )
}

export default Router