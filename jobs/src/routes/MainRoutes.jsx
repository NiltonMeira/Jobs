import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { App } from "../App";

const MainRoutes = createBrowserRouter([

    {
        path: "/",
        element:
            <>
                <App>
                    <Home/>
                </App>

            </>
    }
])

export default MainRoutes