import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    children: React.ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
    const token = window.localStorage.getItem("token")

  return(
    <>
        { token ? children : <Navigate to='/' /> }
    </>
  )
}

export default PrivateRoute
