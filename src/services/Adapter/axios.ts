import axios from "axios"

export const customAxios = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
})
