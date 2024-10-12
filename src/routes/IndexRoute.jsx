import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import ProfilePosts from "../components/common/profile/ProfilePosts/ProfilePosts";

function IndexRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index={true} element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile/:userSlug" element={<ProfilePage />}>
                    <Route index={true} element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/posts" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/about" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/friends" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/photos" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/streams" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/videos" element={<ProfilePosts />} />
                    <Route path="/profile/:userSlug/mores" element={<ProfilePosts />} />
                </Route>
            </Route>

            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );
}

export default IndexRoute;