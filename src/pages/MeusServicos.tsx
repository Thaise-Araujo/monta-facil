import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

interface Pedido {

  id: number;

  nomeMovel: string;

  categoria: string;

  complexidade: string;

  tipoMontagem: string;

  descricao: string;

  endereco: string;

  dataServico: string;

  horario: string;

  imagem: string;

  status: string;

}

export default function MeusServicos() {

  const navigate = useNavigate();

  const [pedidos, setPedidos] =
    useState<Pedido[]>([]);

  // CARREGAR SERVIÇOS
 async function carregarPedidos() {

  try {

    const response =
      await fetch(
          "http://localhost:8080/pedidos/aceitos"
      );

    const data =
      await response.json();

    setPedidos(data);

  } catch (error) {

    console.error(error);

    alert(
      "Erro ao carregar serviços"
    );

  }

}

  // EXECUTAR SERVIÇO
  async function executarPedido(
    id: number
  ) {

    try {

      const response = await fetch(

        `http://localhost:8080/pedidos/${id}/executar`,

        {
          method: "PUT"
        }

      );

      if (response.ok) {

        alert("Serviço executado 🚀");

        carregarPedidos();

      }

    } catch (error) {

      console.error(error);

      alert("Erro ao executar");

    }
  }

  // EXCLUIR SERVIÇO
  async function excluirPedido(
    id: number
  ) {

    try {

      const response = await fetch(

        `http://localhost:8080/pedidos/${id}`,

        {
          method: "DELETE"
        }

      );

      if (response.ok) {

        alert("Serviço excluído");

        carregarPedidos();

      }

    } catch (error) {

      console.error(error);

      alert("Erro ao excluir");

    }
  }

  useEffect(() => {

    carregarPedidos();

  }, []);

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-8 relative overflow-hidden">

      {/* BLURS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              Meus Serviços
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Serviços aceitos pelo montador
            </p>

          </div>

          {/* VOLTAR */}
          <button
            onClick={() =>
              navigate("/dashboardMontador")
            }
            className=" text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition px-5 py-3 rounded-2xl font-semibold"
          >
            Voltar
          </button>

        </div>

        {/* LISTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {pedidos.map((pedido) => (

            <div
              key={pedido.id}
              className="bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[30px] overflow-hidden shadow-2xl"
            >

              {/* IMAGEM */}
              {pedido.imagem && (

                <img
                  src={`http://localhost:8080/uploads/${pedido.imagem}`}
                  alt="Móvel"
                  className="w-full h-[250px] object-cover"
                />

              )}

              {/* CONTEÚDO */}
              <div className="p-6">

                {/* TOPO */}
                <div className="flex items-center justify-between mb-4">

                  <h2 className="text-2xl font-bold text-orange-500">
                    {pedido.nomeMovel}
                  </h2>

                  <span className="bg-green-500 px-4 py-2 rounded-xl text-sm font-bold">
                    ACEITO
                  </span>

                </div>

                {/* INFORMAÇÕES */}
                <div className="space-y-3 text-gray-300">

                  <p>
                    <span className="font-bold text-white">
                      Categoria:
                    </span>{" "}
                    {pedido.categoria}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Complexidade:
                    </span>{" "}
                    {pedido.complexidade}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Tipo:
                    </span>{" "}
                    {pedido.tipoMontagem}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Endereço:
                    </span>{" "}
                    {pedido.endereco}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Data:
                    </span>{" "}
                    {pedido.dataServico}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Horário:
                    </span>{" "}
                    {pedido.horario}
                  </p>

                  <p>
                    <span className="font-bold text-white">
                      Descrição:
                    </span>{" "}
                    {pedido.descricao}
                  </p>

                </div>

                {/* BOTÕES */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  {/* EXECUTADO */}
                  <button
                    onClick={() =>
                      executarPedido(
                        pedido.id
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 transition py-4 rounded-2xl text-white font-bold shadow-xl"
                  >
                    Executado
                  </button>

                  {/* EXCLUIR */}
                  <button
                    onClick={() =>
                      excluirPedido(
                        pedido.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl text-white font-bold shadow-xl"
                  >
                    Excluir
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}