// URL base da API. Configurável via variável de ambiente VITE_API_URL
// (arquivo .env, ou variável de build no CI/host de deploy).
// Em dev, sem nada configurado, cai no backend local padrão.
export const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080";
