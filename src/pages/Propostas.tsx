import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Propostas() {

  const navigate = useNavigate();

  const [propostas, setPropostas] =
    useState<any[]>([]);

  useEffect(() => {

    buscarPropostas();

  }, []);

  async function buscarPropostas() {

    try {

      const response =
        await fetch(
          "http://localhost:8080/propostas"
        );

      const data =
        await response.json();

      setPropostas(data);

    } catch (error) {

      console.error(error);

    }

  }
async function aceitarProposta(
  proposta: any
) {

  try {

    const response =
      await fetch(
        `http://localhost:8080/propostas/${proposta.id}/aceitar`,
        {
          method: "PUT"
        }
      );

    if (response.ok) {

      alert(
        "Proposta aceita ✅"
      );

      buscarPropostas();

    } else {

      alert(
        "Erro ao aceitar proposta"
      );

    }

  } catch (error) {

    console.error(error);

    alert(
      "Erro ao conectar com o backend"
    );

  }

}

  async function recusarProposta(
    id: number
  ) {

    try {

      await fetch(
        `http://localhost:8080/propostas/${id}/recusar`,
        {
          method: "PUT"
        }
      );

      buscarPropostas();

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-10">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">

        <div>

          <h1 className="text-5xl font-bold text-orange-500">
            Propostas Recebidas
          </h1>

          <p className="text-gray-400 mt-2">
            Escolha uma proposta para aceitar ou recusar
          </p>

        </div>

        <div className="flex gap-4">

        

          <button
            onClick={() => {

              localStorage.clear();

              navigate("/dashboardCliente");

            }}
            className=" text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white transition px-5 py-3 rounded-2xl font-semibold"
          >
            Sair
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {propostas
          .filter(
            (p) =>
              p.status === "PENDENTE"
          )
          .map((proposta) => (

            <div
              key={proposta.id}
              className="bg-[#111]/70 border border-white/10 rounded-[35px] p-8 shadow-2xl"
            >

              <h2 className="text-3xl font-bold text-orange-500 mb-4">
                Proposta
              </h2>

              <div className="space-y-3 text-gray-300">

                <p>
                  <strong>Montador:</strong>{" "}
                  {proposta.montador}
                </p>

                <p>
                  <strong>Valor:</strong>{" "}
                  R$ {proposta.valor}
                </p>

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() =>
                    aceitarProposta(
                      proposta
                    )
                  }
                  className="flex-1 bg-green-500 hover:bg-green-600 py-4 rounded-2xl font-bold"
                >
                  Aceitar
                </button>

                <button
                  onClick={() =>
                    recusarProposta(
                      proposta.id
                    )
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 py-4 rounded-2xl font-bold"
                >
                  Recusar
                </button>

              </div>

            </div>

          ))}

      </div>

    </div>

  );

}