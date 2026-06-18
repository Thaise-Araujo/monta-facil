import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Pedido() {

  const navigate = useNavigate();

  const [nomeMovel, setNomeMovel] = useState("");

  const [categoria, setCategoria] = useState("");

  const [complexidade, setComplexidade] = useState("");

  const [tipoMontagem, setTipoMontagem] = useState("");

  const [descricao, setDescricao] = useState("");

  const [endereco, setEndereco] = useState("");

  const [dataServico, setDataServico] = useState("");

  const [horario, setHorario] = useState("");

  const [imagem, setImagem] = useState<File | null>(null);

  // SALVAR PEDIDO
  async function salvarPedido() {

    const formData = new FormData();

    formData.append("nomeMovel", nomeMovel);

    formData.append("categoria", categoria);

    formData.append("complexidade", complexidade);

    formData.append("tipoMontagem", tipoMontagem);

    formData.append("descricao", descricao);

    formData.append("endereco", endereco);

    formData.append("dataServico", dataServico);

    formData.append("horario", horario);

    if (imagem) {

      formData.append("imagem", imagem);

    }

    try {

      const response = await fetch(
        "http://localhost:8080/pedidos",
        {
          method: "POST",
          body: formData
        }
      );

      if (response.ok) {

        // LIMPAR CAMPOS
        setNomeMovel("");

        setCategoria("");

        setComplexidade("");

        setTipoMontagem("");

        setDescricao("");

        setEndereco("");

        setDataServico("");

        setHorario("");

        setImagem(null);

        alert("Pedido publicado 🚀");

      } else {

        alert("Erro ao publicar pedido");

      }

    } catch (error: any) {

  console.error(error);

  alert(error);

}
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] text-white p-8 relative overflow-hidden">

      {/* BLURS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">

          <div>

            <h1 className="text-5xl font-bold text-orange-500">
              Criar Pedido
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Preencha as informações do serviço
            </p>

          </div>

          {/* BOTÃO SAIR */}
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

        {/* CARD */}
        <div className="bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[35px] p-10 shadow-2xl">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* NOME */}
            <div>

              <label className="block mb-3 text-gray-300">
                Nome do móvel
              </label>

              <input
                type="text"
                placeholder="Ex: Guarda-roupa"
                value={nomeMovel}
                onChange={(e) =>
                  setNomeMovel(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              />

            </div>

            {/* CATEGORIA */}
            <div>

              <label className="block mb-3 text-gray-300">
                Categoria
              </label>

              <select
                value={categoria}
                onChange={(e) =>
                  setCategoria(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              >

                <option value="">
                  Selecione
                </option>

                <option value="Quarto">
                  Quarto
                </option>

                <option value="Sala">
                  Sala
                </option>

                <option value="Cozinha">
                  Cozinha
                </option>

                <option value="Banheiro">
                  Banheiro
                </option>

              </select>

            </div>

            {/* COMPLEXIDADE */}
            <div>

              <label className="block mb-3 text-gray-300">
                Complexidade
              </label>

              <select
                value={complexidade}
                onChange={(e) =>
                  setComplexidade(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              >

                <option value="">
                  Selecione
                </option>

                <option value="Baixa">
                  Baixa
                </option>

                <option value="Média">
                  Média
                </option>

                <option value="Alta">
                  Alta
                </option>

              </select>

            </div>

            {/* TIPO */}
            <div>

              <label className="block mb-3 text-gray-300">
                Tipo de montagem
              </label>

              <select
                value={tipoMontagem}
                onChange={(e) =>
                  setTipoMontagem(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              >

                <option value="">
                  Selecione
                </option>

                <option value="Montagem">
                  Montagem
                </option>

                <option value="Desmontagem">
                  Desmontagem
                </option>

                <option value="Ambos">
                  Ambos
                </option>

              </select>

            </div>

          </div>

          {/* DESCRIÇÃO */}
          <div className="mt-8">

            <label className="block mb-3 text-gray-300">
              Descrição
            </label>

            <textarea
              placeholder="Descreva detalhes do serviço..."
              value={descricao}
              onChange={(e) =>
                setDescricao(e.target.value)
              }
              rows={5}
              className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500 resize-none"
            />

          </div>

          {/* ENDEREÇO */}
          <div className="mt-8">

            <label className="block mb-3 text-gray-300">
              Endereço
            </label>

            <input
              type="text"
              placeholder="Digite o endereço"
              value={endereco}
              onChange={(e) =>
                setEndereco(e.target.value)
              }
              className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
            />

          </div>

          {/* DATA E HORÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

            <div>

              <label className="block mb-3 text-gray-300">
                Data do serviço
              </label>

              <input
                type="date"
                value={dataServico}
                onChange={(e) =>
                  setDataServico(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              />

            </div>

            <div>

              <label className="block mb-3 text-gray-300">
                Horário
              </label>

              <input
                type="time"
                value={horario}
                onChange={(e) =>
                  setHorario(e.target.value)
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-orange-500"
              />

            </div>

          </div>

          {/* IMAGEM */}
          <div className="mt-8">

            <label className="block mb-3 text-gray-300">
              Foto do móvel
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {

                if (e.target.files) {

                  setImagem(e.target.files[0]);

                }

              }}
              className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-5 text-gray-400"
            />

          </div>

          {/* BOTÃO */}
          <button
            onClick={salvarPedido}
            className="w-full mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition py-5 rounded-2xl text-white text-xl font-bold shadow-[0_10px_40px_rgba(249,115,22,0.35)]"
          >
            Publicar Pedido
          </button>

        </div>

      </div>

    </div>

  );
}