import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const isAuthenticated = useSelector((state) => state.access.isAuthenticated);

    return (<div>
        { isAuthenticated === true
            ? props?.children
            : <Navigate to="/auth" />
        }
        </div>
    );
}

export default PrivateRoute;