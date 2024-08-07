import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";

const MainRoutes = createBrowserRouter([

    {
        path: "/",
        element:
            <App>
                <Home/>
            </App>
    }
])

export default MainRoutes