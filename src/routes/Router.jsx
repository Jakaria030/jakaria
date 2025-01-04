import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Navigate to="/home"></Navigate>,
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ],
    },
]);

export default router;