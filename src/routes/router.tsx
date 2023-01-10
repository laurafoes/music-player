import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import MusicPlayer from "../pages/MusicPlayer"

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/player' element={<MusicPlayer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
