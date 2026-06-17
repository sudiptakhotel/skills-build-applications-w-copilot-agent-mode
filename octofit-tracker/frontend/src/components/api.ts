const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const API_PORT = 8000
const DEFAULT_HOST = 'http://localhost'

export const getApiBaseUrl = () => {
  if (codespaceName && codespaceName.trim()) {
    return `https://${codespaceName}-8000.app.github.dev`
  }

  return `${DEFAULT_HOST}:${API_PORT}`
}

export const buildApiUrl = (path: string) => {
  const baseUrl = getApiBaseUrl()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}

export const fetchJson = async <T>(path: string) => {
  const response = await fetch(buildApiUrl(path))
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`)
  }
  return (await response.json()) as T
}
