import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import ProfilePosts from "../components/common/profile/ProfilePosts";

function IndexRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index={true} element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />}>
                    <Route index={true} element={<ProfilePosts />} />
                    <Route path="/profile/posts" element={<ProfilePosts />} />
                    <Route path="/profile/about" element={<ProfilePosts />} />
                    <Route path="/profile/friends" element={<ProfilePosts />} />
                    <Route path="/profile/photos" element={<ProfilePosts />} />
                    <Route path="/profile/streams" element={<ProfilePosts />} />
                    <Route path="/profile/videos" element={<ProfilePosts />} />
                    <Route path="/profile/mores" element={<ProfilePosts />} />
                </Route>
            </Route>

            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
}

export default IndexRoute;