import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import RootLayout from "./Layout/RootLayout";
import Application from "./pages/Application";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/application" element={<Application />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
