import { AxiosRequestConfig } from "axios"
import { HttpAdapter } from "./HttpAdapter"
import { customAxios } from "./axios"

export class AxiosAdapter implements HttpAdapter {
  async get(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await customAxios.get(url, config)
    return response
  }

  async delete(url: string, config?: AxiosRequestConfig): Promise<any> {
    const response = await customAxios.delete(url, config)
    return response
  }

  async post(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    const response = await customAxios.post(url, data, config)
    return response
  }

  async put(url: string, data: any, config?: AxiosRequestConfig): Promise<any> {
    const response = await customAxios.put(url, data, config)
    return response
  }
}
