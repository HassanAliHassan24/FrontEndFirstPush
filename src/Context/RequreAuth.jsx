import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthContext from "./AuthProvider";


const RequireAuth = () => {
    const { auth } = useContext(AuthContext);
    const location = useLocation();

    const isAuthenticated = localStorage.getItem("auth");

    return (
        auth?.userName || isAuthenticated ? <Outlet />
            : <Navigate to='/LoginPage'
                replace state={{ from: location }}
            />
    )
}

export default RequireAuth;