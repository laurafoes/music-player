import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import MusicPlayer from "../pages/MusicPlayer"
import PrivateRoute from "./privateRoute"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/player' element={<PrivateRoute> <MusicPlayer /> </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
