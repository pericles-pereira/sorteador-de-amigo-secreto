import { Outlet } from "react-router-dom";
import Cabecalho from "../Cabecalho";

const Layout = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
        </>
    );
};

export default Layout;