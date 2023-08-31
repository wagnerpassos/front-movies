import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/new" element={<NewMovie />} />
            <Route path="/preview/:id" element={<MoviePreview />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};
