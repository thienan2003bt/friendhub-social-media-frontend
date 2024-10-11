import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

function MainLayout() {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
}

export default MainLayout;