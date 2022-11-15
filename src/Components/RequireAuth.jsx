import { Navigate } from 'react-router-dom'
import { useAuth } from '../services/auth'



const RequireAuth = (
    children,
    redirectTo = "/auth",
) => {
    const { user } = useAuth()
  return (
    user
    ? children
    : <Navigate to={redirectTo} />
  )
}

export default RequireAuth