import { useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import { API_URL } from "../config/api";


export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

   const response = await fetch(
  `${API_URL}/usuarios/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            senha
          })
        }
      );
if (response.ok) {

  const usuario =
    await response.json();

 

  if (
    usuario.tipo ===
    "CLIENTE"
  ) {

    navigate(
      "/dashboardCliente"
    );

  } else if (
    usuario.tipo ===
    "MONTADOR"
  ) {

    navigate(
      "/dashboardMontador"
    );

  }

} else {

  alert(
    "Email ou senha inválidos"
  );

}

    } catch (error) {

      console.error(error);

      alert("Erro ao conectar com o backend");

    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#4a4a4a] via-[#2f2f2f] to-[#1c1c1c] flex items-center justify-center p-6 overflow-hidden relative">

      {/* BLURS FUNDO */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-black/20 rounded-full blur-3xl"></div>

      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl"></div>

      {/* CARD */}
      <div className="w-full max-w-7xl h-[700px] rounded-[40px] overflow-hidden bg-[#181818]/90 border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.5)] flex">

        {/* LADO ESQUERDO */}
        <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gradient-to-br from-[#2d2d2d] via-[#1f1f1f] to-[#141414] overflow-hidden">

          {/* EFEITOS */}
          <div className="absolute w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"></div>

          {/* LOGO */}
          <div className="relative z-10 bg-[#111]/60 border border-white/10 backdrop-blur-2xl rounded-[40px] p-12 shadow-2xl">

            <img
              src={logo}
              alt="Logo"
              className="w-[420px] drop-shadow-[0_0_40px_rgba(249,115,22,0.25)]"
            />

          </div>

        </div>

        {/* LADO DIREITO */}
        <div className="w-full md:w-1/2 bg-[#111111]/95 flex items-center justify-center p-10 relative">

          {/* BLUR */}
          <div className="absolute w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"></div>

          {/* FORM */}
          <div className="relative z-10 w-full max-w-md">

            <h1 className="text-5xl font-bold text-white leading-tight">

              Bem-vindo!

            

            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Faça login para continuar
            </p>

            <form
              onSubmit={handleLogin}
              className="mt-12 space-y-7"
            >

              {/* EMAIL */}
              <div>

                <label className="text-gray-300 text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full mt-3 bg-[#1d1d1d] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-orange-500 transition shadow-lg"
                />

              </div>

              {/* SENHA */}
              <div>

                <label className="text-gray-300 text-sm font-medium">
                  Senha
                </label>

                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) =>
                    setSenha(e.target.value)
                  }
                  className="w-full mt-3 bg-[#1d1d1d] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-orange-500 transition shadow-lg"
                />

              </div>

              {/* BOTÃO */}
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-[1.01] hover:opacity-95 transition-all duration-300 py-5 rounded-2xl text-white text-xl font-bold shadow-[0_10px_40px_rgba(249,115,22,0.35)]"
              >
                Entrar
              </button>

            </form>

            {/* CADASTRO */}
            <p className="text-gray-400 text-center mt-10 text-lg">

              Não possui conta?{" "}

              <button
                onClick={() =>
                  navigate("/cadastro")
                }
                className="text-orange-500 hover:text-orange-400 font-semibold transition"
              >
                Cadastre-se
              </button>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}