import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import HomePage from "../pages/HomePage"
import CoursesPage from "../pages/CoursesPage"
import LoginPage from "../pages/LoginPage"
import CheckoutPage from "../pages/ChekoutPage"
import SchedulePage from "../pages/SchedulePage"
import NotFound from "../pages/NotFound"

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
            </Route>

            <Route index element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRouter 