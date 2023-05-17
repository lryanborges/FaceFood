import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import NotFound from "../pages/NotFound";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import VisualizarPrato from "../pages/VisualizarPrato";
import CadastrarPrato from "../pages/CadastrarPrato";
import Ingredientes from "../pages/Ingredientes";
import EditarPrato from "../pages/EditarPrato";
import Planejamento from "../pages/Planejamento";
import Pratos from "../pages/Pratos";
import Pesquisas from "../pages/Pesquisas";
import { useContext } from "react";
import { AuthProvider, Context } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {loading, authenticated} = useContext(Context);
  const navigate = useNavigate();

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />
  }

  return children;
}

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<PrivateRoute><Perfil /></PrivateRoute>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ingredientes" element={<PrivateRoute><Ingredientes /></PrivateRoute>} />
          <Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path="/EditarPrato/:pratoId" element={<PrivateRoute><EditarPrato /></PrivateRoute>} />
          <Route path="/cadastrarPrato" element={<PrivateRoute><CadastrarPrato /></PrivateRoute>} />
          <Route path="/visualizarPrato/:pratoId" element={<PrivateRoute><VisualizarPrato /></PrivateRoute>} />
          <Route path="/planejamento" element={<PrivateRoute><Planejamento /></PrivateRoute>} />
          <Route path="/pratos" element={<PrivateRoute><Pratos /></PrivateRoute>} />
          <Route path="/pesquisas" element={<PrivateRoute><Pesquisas /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
