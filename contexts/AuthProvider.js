import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState([]);

    const login = value => {

        setLoggedIn(true);
        setUserDetails({
            id: value.id,
            email: value.email,
            username: value.username,
            firstname: value.firstname,
            lastname: value.lastname,
            roleId: value.roleId,
            profile: value.profile,
            banned: value.banned
        });
    }

    const logout = value => {

        setLoggedIn(false);
        setUserDetails([]);
    }

    const contextValue = {

        status: {
            loggedIn,
            login,
            logout,
            setLoggedIn
        },
        user: {
            userDetails,
            setUserDetails
        }
    };

    return (
        <AuthContext.Provider value={ contextValue }>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;