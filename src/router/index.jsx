import { Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Learning from "../pages/Learning";
import Units from "../pages/Units";
import TestingPage from "../pages/TestingPage";
import SecondLayout from "../layouts/SecondLayout";

const AppRouter = () => {
    return(
        <Routes>
            {/* login */}
            <Route element={<SecondLayout />}>
                <Route path="/" element={<Login />} />
            </Route>
            
            {/* main pages */}
            <Route element={<MainLayout />}>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Learning" element={<Learning />} />
            </Route>

            {/* second pages */}
            <Route element={<SecondLayout />}>
                <Route path="/Learning/:lesson" element={<Units />} />
                <Route path="/Learning/:lesson/unit" element={<TestingPage />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;