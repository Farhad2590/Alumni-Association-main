import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { isAdmin, isAdminLoading } = useAdmin()
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading || isAdminLoading) {
        return <h1>Loading</h1>
    }
    if (user && isAdmin) {
        return children;
    }
    return navigate("/")
};

export default AdminRoute;