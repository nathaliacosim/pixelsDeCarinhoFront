import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/About.tsx";
import Transparency from "./pages/Transparency.tsx";
import Desenvolvimento from "./pages/Desenvolvimento.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/about-us",
        Component: AboutUs,
    },
    {
        path: "/transparency",
        Component: Transparency,
    },
    {
        path: "/contact",
        Component: Contact,
    },
    {
        path: "*",
        Component: Desenvolvimento
    }
]);

export default router;