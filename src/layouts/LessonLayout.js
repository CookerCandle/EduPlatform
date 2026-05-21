import React from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { MdNavigateBefore } from "react-icons/md";

import ThemeToggle from "../components/ThemeTogle";


export default function LessonLayout() {
    const navigate = useNavigate();
    return(
        <>
            <header className="alert lesson-header p-4 ">
                <div className="d-flex justify-content-between ">
                    <div>
                        <h1 id="logo">
                            <MdNavigateBefore size={30} onClick={() => navigate(-1)} className="to-back"/>
                            <span>L</span>platform
                        </h1>
                    </div>
                    <ThemeToggle />
                </div>
            </header>
            <div className="mt-5">
                <main className="container">
                    <Outlet />
                </main>
            </div>
        </>
    );
}