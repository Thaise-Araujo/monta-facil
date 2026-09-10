/// <reference types="vite/client" />

declare module "sockjs-client";

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
}