import React from "react";
import AuthContext from '../../contexts/authContext'
import Login from '../../pages/login'

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {auth =>
                        <div>
                            {auth.isAuthenticated === true ? <Component {...this.props} /> : <Login/>}
                        </div>
                    }
                </AuthContext.Consumer>
            )
        }
    }
}

export default requireAuthentication;