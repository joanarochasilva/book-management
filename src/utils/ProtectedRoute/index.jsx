import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/Hooks/Auth";

const ProtectedRoute = ({children}) => {
    const { session } = useAuth()

    if (!session) {
        // user is not authenticated,
        return <Navigate to="/login" />;
    }
    return <>{children}</>
};

export default ProtectedRoute