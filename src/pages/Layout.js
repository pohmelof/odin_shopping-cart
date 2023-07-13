import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
    return (
        <>
            <Header counter={props.counter}/>
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;