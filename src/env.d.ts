/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HYGRAPH_API_URL: string;
  readonly VITE_HYGRAPH_API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
