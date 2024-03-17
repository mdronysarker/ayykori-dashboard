import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import RootLayout from "./Layout/RootLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
