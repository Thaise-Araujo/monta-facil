import { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Cadastro() {

  const navigate = useNavigate();

  const [nome, setNome] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  const [tipo, setTipo] =
    useState("CLIENTE");

  // CADASTRAR
  async function handleCadastro(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      const response = await fetch(

        "http://localhost:8080/usuarios",

        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            nome,
            email,
            senha,
            tipo

          })

        }

      );

      if (response.ok) {

        alert(
          "Cadastro realizado 🚀"
        );

        // LIMPAR CAMPOS
        setNome("");

        setEmail("");

        setSenha("");

        setTipo("CLIENTE");

        // VOLTAR LOGIN
        navigate("/");

      } else {

        alert(
          "Erro ao cadastrar"
        );

      }

    } catch (error) {

      console.error(error);

      alert(
        "Erro ao conectar com o backend"
      );

    }

  }

  return (

    <div className="min-h-screen flex bg-gradient-to-br from-[#3d3d3d] via-[#2a2a2a] to-[#1b1b1b] relative overflow-hidden">

      {/* BLURS */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* ESQUERDA */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">

        <div className="bg-[#111]/60 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

          <img
            src={logo}
            alt="Logo"
            className="w-[350px] drop-shadow-[0_0_40px_rgba(249,115,22,0.35)]"
          />

        </div>

      </div>

      {/* DIREITA */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative z-10">

        <div className="w-full max-w-md bg-[#111]/70 border border-white/10 backdrop-blur-2xl rounded-[35px] p-10 shadow-2xl">

          {/* TÍTULO */}
          <div className="mb-8">

            <h1 className="text-5xl font-bold text-orange-500">
              Cadastro
            </h1>

            <p className="text-gray-400 mt-3">
              Crie sua conta na plataforma
            </p>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleCadastro}
            className="space-y-5"
          >

            {/* NOME */}
            <div>

              <label className="block text-gray-300 mb-2">
                Nome
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) =>
                  setNome(
                    e.target.value
                  )
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
              />

            </div>

            {/* SENHA */}
            <div>

              <label className="block text-gray-300 mb-2">
                Senha
              </label>

              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) =>
                  setSenha(
                    e.target.value
                  )
                }
                className="w-full bg-[#1f1f1f] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
              />

            </div>

            {/* TIPO */}
            <div>

              <label className="block text-gray-300 mb-3">
                Tipo de conta
              </label>

              <div className="grid grid-cols-2 gap-4">

                {/* CLIENTE */}
                <button
                  type="button"
                  onClick={() =>
                    setTipo("CLIENTE")
                  }
                  className={`py-4 rounded-2xl font-bold transition ${
                    tipo === "CLIENTE"
                      ? "bg-orange-500 text-white"
                      : "bg-[#1f1f1f] text-gray-300 border border-white/10"
                  }`}
                >
                  Cliente
                </button>

                {/* MONTADOR */}
                <button
                  type="button"
                  onClick={() =>
                    setTipo("MONTADOR")
                  }
                  className={`py-4 rounded-2xl font-bold transition ${
                    tipo === "MONTADOR"
                      ? "bg-orange-500 text-white"
                      : "bg-[#1f1f1f] text-gray-300 border border-white/10"
                  }`}
                >
                  Montador
                </button>

              </div>

            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition py-5 rounded-2xl text-white text-xl font-bold shadow-[0_10px_40px_rgba(249,115,22,0.35)]"
            >
              Cadastrar
            </button>

          </form>

          {/* LOGIN */}
          <p className="text-gray-400 text-center mt-6">

            Já possui conta?{" "}

            <button
              onClick={() =>
                navigate("/")
              }
              className="text-orange-500 hover:text-orange-400 font-semibold"
            >
              Fazer login
            </button>

          </p>

        </div>

      </div>

    </div>

  );

}