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
}

export default function ListaPedidos() {

  const navigate = useNavigate();

  const [pedidos, setPedidos] =
    useState<Pedido[]>([]);

  const [pedidoSelecionado, setPedidoSelecionado] =
    useState<Pedido | null>(null);

  const [valor, setValor] =
    useState("");

  useEffect(() => {

    buscarPedidos();

  }, []);

  async function buscarPedidos() {

    try {

      const response =
        await fetch(
          "http://localhost:8080/pedidos"
        );

      const data =
        await response.json();

      setPedidos(data);

    } catch (error) {

      console.error(error);

    }

  }

  async function enviarProposta() {

    if (!valor) {

      alert("Digite um valor");

      return;

    }

    if (!pedidoSelecionado) {

      return;

    }

    try {

      const response =
        await fetch(
          "http://localhost:8080/propostas",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({

              pedidoId:
                pedidoSelecionado.id,

              montador:
                "Montador",

              valor:
                Number(valor)

            })

          }
        );

      if (response.ok) {
  await fetch(
    `http://localhost:8080/pedidos/${pedidoSelecionado.id}/em-analise`,
    {
      method: "PUT"
    }
  );
        alert(
          "Proposta enviada 🚀"
        );

        setPedidos(
          pedidos.filter(
            (p) =>
              p.id !==
              pedidoSelecionado.id
          )
        );

        setPedidoSelecionado(
          null
        );

        setValor("");

      } else {

        alert(
          "Erro ao enviar proposta"
        );

      }
   

    } catch (error) {

      console.error(error);

      alert(
        "Erro ao conectar com backend"
      );

    }

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-10 relative overflow-hidden">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              Pedidos Disponíveis
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Veja os pedidos disponíveis para envio de proposta
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/dashboardMontador")
            }
            className=" text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition px-5 py-3 rounded-2xl font-semibold"
          >
            Sair
          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {pedidos.map((pedido) => (

            <div
              key={pedido.id}
              className="bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[35px] overflow-hidden shadow-2xl"
            >

              {pedido.imagem && (

                <img
                  src={`http://localhost:8080/uploads/${pedido.imagem}`}
                  alt=""
                  className="w-full h-60 object-cover"
                />

              )}

              <div className="p-8">

                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                  {pedido.nomeMovel}
                </h2>

                <div className="space-y-2 text-gray-300">

                  <p>
                    <strong>Categoria:</strong>{" "}
                    {pedido.categoria}
                  </p>

                  <p>
                    <strong>Complexidade:</strong>{" "}
                    {pedido.complexidade}
                  </p>

                  <p>
                    <strong>Tipo:</strong>{" "}
                    {pedido.tipoMontagem}
                  </p>

                  <p>
                    <strong>Descrição:</strong>{" "}
                    {pedido.descricao}
                  </p>

                  <p>
                    <strong>Endereço:</strong>{" "}
                    {pedido.endereco}
                  </p>

                  <p>
                    <strong>Data:</strong>{" "}
                    {pedido.dataServico}
                  </p>

                  <p>
                    <strong>Horário:</strong>{" "}
                    {pedido.horario}
                  </p>

                </div>

                <button
                  onClick={() =>
                    setPedidoSelecionado(
                      pedido
                    )
                  }
                  className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition py-4 rounded-2xl text-white font-bold text-lg shadow-xl"
                >
                  Enviar Proposta
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* MODAL */}
      {pedidoSelecionado && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-[#111827] p-10 rounded-[35px] w-full max-w-md border border-white/10">

            <h2 className="text-3xl font-bold text-orange-500 mb-6">
              Enviar Proposta
            </h2>

            <p className="text-gray-400 mb-6">
              Informe o valor do serviço
            </p>

            <input
              type="number"
              placeholder="Ex: 150"
              value={valor}
              onChange={(e) =>
                setValor(
                  e.target.value
                )
              }
              className="w-full bg-[#1f2937] rounded-2xl px-5 py-5 outline-none text-white"
            />

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => {

                  setPedidoSelecionado(
                    null
                  );

                  setValor("");

                }}
                className="flex-1 bg-gray-700 hover:bg-gray-600 transition py-4 rounded-2xl font-bold"
              >
                Cancelar
              </button>

              <button
                onClick={
                  enviarProposta
                }
                className="flex-1 bg-orange-500 hover:bg-orange-600 transition py-4 rounded-2xl font-bold"
              >
                Confirmar
              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}