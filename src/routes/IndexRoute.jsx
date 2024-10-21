import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProfilePage from "../pages/ProfilePage";
import ProfilePosts from "../components/profile/ProfilePosts/ProfilePosts";
import CounterPage from "../pages/CounterPage";

function IndexRoute() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index={true} element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile/:userSlug" element={<ProfilePage />}>
                    <Route index={true} element={<ProfilePosts />} />
                    <Route path="posts" element={<ProfilePosts />} />
                    <Route path="about" element={<ProfilePosts />} />
                    <Route path="friends" element={<ProfilePosts />} />
                    <Route path="photos" element={<ProfilePosts />} />
                    <Route path="streams" element={<ProfilePosts />} />
                    <Route path="videos" element={<ProfilePosts />} />
                    <Route path="mores" element={<ProfilePosts />} />
                </Route>
            </Route>

            <Route path="/auth" element={<AuthPage />} />
            
            <Route path="/counter" element={<CounterPage />} />




            {/* Not found Page */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default IndexRoute;