/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CODESPACE_NAME: string
  // add other env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
