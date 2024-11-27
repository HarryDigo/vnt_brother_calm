import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Home } from "./pages/Home/Home";
import { Stack } from "@mui/material";
import { SingIn } from "./pages/SingIn";
import { SingUp } from "./pages/SingUp";
import { Perfil } from "./pages/Perfil";
import { PostDetail } from "./pages/PostDetail";
import { User } from "./pages/User";

const DashboardRoutes = () => (
  <DashboardLayout>
    <Stack>
      <Outlet />
    </Stack>
  </DashboardLayout>
);

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Rotas fora do DashboardLayout */}
          <Route path="/" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />

          {/* Rotas dentro do DashboardLayout */}
          <Route element={<DashboardRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/user/:id" element={<User />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
