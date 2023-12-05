import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const DefaultPage = () => {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default DefaultPage;