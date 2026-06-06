import axios from "axios"

/* Instância central */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default api