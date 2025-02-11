import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import Header from "../components/Header"

BrowserRouter
export default function RouteApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/> } />
      </Routes>
    </BrowserRouter>
  )
}
