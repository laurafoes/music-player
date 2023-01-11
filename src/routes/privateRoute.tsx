import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    children: React.ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token")

  return(
    <>
        { children }
        {/* { token !== '' ? children : <Navigate to='/' /> } */}
    </>
  )
}

export default PrivateRoute
