import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Pedido from "./pages/Pedido";
import ListaPedidos from "./pages/ListaPedidos";
import Propostas from "./pages/Propostas";
import MeusServicos from "./pages/MeusServicos";
import DashboardCliente from "./pages/DashboardCliente";
import DashboardMontador from "./pages/DashboardMontador";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/dashboardCliente"
          element={<DashboardCliente />}
        />

        <Route
          path="/dashboardMontador"
          element={<DashboardMontador />}
        />

        <Route
          path="/pedido"
          element={<Pedido />}
        />

        <Route
          path="/listaPedidos"
          element={<ListaPedidos />}
        />

        <Route
          path="/propostas"
          element={<Propostas />}
        />

        <Route
          path="/meusServicos"
          element={<MeusServicos />}
        />

      </Routes>

    </BrowserRouter>

  );

}