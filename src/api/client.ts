import axios from 'axios'

// Auth token is an httpOnly cookie set by the backend (see PROJECT_PLAN.md, Phase 5),
// so requests just need to carry credentials — no manual Authorization header.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
})
