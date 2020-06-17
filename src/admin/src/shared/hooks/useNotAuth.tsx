import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { PATHS } from "app-config";

export default function useNotAuth() {
    const history = useHistory();
    const location = useLocation();
    const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
    useEffect(() => {
        if(isAuthenticated) {
            history.push(PATHS.HOMEPAGE)
        }
    }, [history, location, isAuthenticated])
}