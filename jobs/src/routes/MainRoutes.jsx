import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";

export const MainRoutes = createBrowserRouter([

    {
        path: "/",
        element:
            <App>
                <Home/>
            </App>
    }
])