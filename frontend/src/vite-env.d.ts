/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_API_URL: string
  readonly VITE_API_URL_LOCAL: string
}

type ImportMeta = {
  readonly env: ImportMetaEnv
}
