import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

interface PrivateRouteProps {
    children: React.ReactNode
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  useEffect(() => {
    if(token === '') {
      navigate('/')
    }
  }, [navigate, token])
  
  return(
    <>
        { children }
    </>
  )
}

export default PrivateRoute
