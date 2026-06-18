import { useNavigate } from "react-router-dom";
import {
  ClipboardList,
  FileText,
  LogOut
} from "lucide-react";

export default function DashboardCliente() {

  const navigate = useNavigate();

  function sair() {

    localStorage.clear();

    navigate("/");

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-10 relative overflow-hidden">

      {/* BLURS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-16">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              Área do Cliente
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Gerencie seus pedidos e acompanhe propostas recebidas
            </p>

          </div>

          {/* BOTÃO SAIR */}
          <button
            onClick={sair}
            className=" text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition px-5 py-3 rounded-2xl font-semibold"
          >
            <LogOut size={20} />
            Sair
          </button>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* CRIAR PEDIDO */}
          <div
            onClick={() => navigate("/pedido")}
            className="cursor-pointer bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[35px] p-10 hover:scale-105 transition-all duration-300 shadow-2xl"
          >

            <div className="bg-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-6">

              <ClipboardList size={40} />

            </div>

            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Criar Pedido
            </h2>

            <p className="text-gray-400 text-lg">
              Solicite um serviço de montagem e aguarde propostas dos montadores.
            </p>

          </div>

          {/* VER PROPOSTAS */}
          <div
            onClick={() => navigate("/propostas")}
            className="cursor-pointer bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[35px] p-10 hover:scale-105 transition-all duration-300 shadow-2xl"
          >

            <div className="bg-orange-500 w-20 h-20 rounded-3xl flex items-center justify-center mb-6">

              <FileText size={40} />

            </div>

            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Ver Propostas
            </h2>

            <p className="text-gray-400 text-lg">
              Analise os valores enviados pelos montadores e aceite ou recuse.
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}