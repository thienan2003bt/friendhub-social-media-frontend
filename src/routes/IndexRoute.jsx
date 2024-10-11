import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";

function IndexRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index={true} element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
}

export default IndexRoute;