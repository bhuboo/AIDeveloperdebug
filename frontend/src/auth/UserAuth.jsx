import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserAuth = ({ children }) => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log(token,"token +-------------------------------+ sbsbvsjhvbsjkb")
            navigate('/login');
        } else if (!user) {
            console.log(user,"user +-------------------------------+ sbsbvsjhvbsjkb")
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                navigate('/login'); 
            }
        }
        console.log(token,user,"none +-------------------------------+ sbsbvsjhvbsjkb")
        setLoading(false);
    }, [user, setUser, navigate]);

    if (loading) {
        return <div className="text-center mt-20 text-lg">Loading...</div>;
    }

    return (
        <>
            {children}
        </>
    );
};

export default UserAuth;
