import { useNavigate } from "react-router-dom";

export default function DashboardMontador() {

  const navigate = useNavigate();

  function sair() {

    localStorage.clear();

    navigate("/");

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-16">

        <div>

          <h1 className="text-5xl font-bold text-orange-500">
            Área do Montador
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Gerencie pedidos e acompanhe seus serviços
          </p>

        </div>

        <button
          onClick={sair}
          className=" text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition px-5 py-3 rounded-2xl font-semibold"
        >
          
          Sair
        </button>

      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {/* PEDIDOS */}
        <div
          onClick={() => navigate("/listaPedidos")}
          className="cursor-pointer bg-[#111]/70 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
        >

          <div className="text-6xl mb-6">
            📋
          </div>

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Pedidos Disponíveis
          </h2>

          <p className="text-gray-400 text-lg">
            Visualize pedidos criados pelos clientes e envie propostas de orçamento.
          </p>

        </div>

        {/* SERVIÇOS */}
        <div
          onClick={() => navigate("/meusServicos")}
          className="cursor-pointer bg-[#111]/70 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:scale-105 transition duration-300 shadow-2xl"
        >

          <div className="text-6xl mb-6">
            🛠️
          </div>

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Meus Serviços
          </h2>

          <p className="text-gray-400 text-lg">
            Acompanhe serviços aceitos, execute e finalize seus trabalhos.
          </p>

        </div>

      </div>

    </div>

  );

}