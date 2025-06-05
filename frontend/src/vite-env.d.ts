/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_API_URL: string
  readonly VITE_API_URL_LOCAL: string
  readonly VITE_GITHUB_REDIRECT: string
  readonly VITE_LINKEDIN_REDIRECT: string
}

type ImportMeta = {
  readonly env: ImportMetaEnv
}
