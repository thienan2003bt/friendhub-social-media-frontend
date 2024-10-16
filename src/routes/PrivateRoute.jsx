import { connect } from 'react-redux';
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => isAuthenticated === true
                ? <Component {...props} />
                : <Navigate to="/login" />
            }
        ></Route>
    );
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);