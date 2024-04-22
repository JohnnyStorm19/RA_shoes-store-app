import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  CatalogueAllItemsResponse,
  CategoriesResponse,
  LoadMoreResponse,
  OrderFormData,
  SingleItemResponse,
  TopSalesResponse,
} from "./types";
import { globals } from "../config";

export interface IRequestConfig {
  method: "get" | "post" | "put" | "delete";
  url: string;
  data?: OrderFormData
}

async function makeRequest(config: AxiosRequestConfig): Promise<AxiosResponse> {
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);
      throw new Error(error.response.data);
    } else if (error instanceof AxiosError && error.request) {
      console.error("No response received:", error.request);
      throw new Error(error.request.data);
    } else {
      const message =
        error instanceof AxiosError ? error.message : "Unexpected error!";
      console.error("Error:", message);
    }
    throw new Error("Error making request");
  }
}

const getRequestConfig = ({ method, url, data }: IRequestConfig) => {
  return {
    method: method,
    baseURL: `${globals.baseUrl}/api`,
    url: url,
    headers: {
      accept: "application/json",
    },
    data
  };
};

export const getTopSales = async (): Promise<TopSalesResponse> => {
  const requestConfig = getRequestConfig({
    method: "get",
    url: "/top-sales",
  });
  return (await makeRequest(requestConfig)).data;
};
export const getCategories = async (): Promise<CategoriesResponse> => {
  const requestConfig = getRequestConfig({
    method: "get",
    url: "/categories",
  });
  return (await makeRequest(requestConfig)).data;
};
export const getAllItems = async (): Promise<CatalogueAllItemsResponse> => {
  const requestConfig = getRequestConfig({
    method: "get",
    url: "/items",
  });
  return (await makeRequest(requestConfig)).data;
};
export const getItemsByCategory = async (
  categoryId: number
): Promise<CategoriesResponse> => {
  const params = new URLSearchParams({categoryId: categoryId.toString()});
  const requestConfig = getRequestConfig({
    method: "get",
    url: `/items?${params}`,
  });
  return (await makeRequest(requestConfig)).data;
};
export const searchItemsByTitle = async (
  query: string
): Promise<CategoriesResponse> => {
  const params = new URLSearchParams({q: query})
  const requestConfig = getRequestConfig({
    method: "get",
    url: `/items?${params}`,
  });
  return (await makeRequest(requestConfig)).data;
};
export const getSingleItem = async (
  id: number
): Promise<SingleItemResponse> => {
  const requestConfig = getRequestConfig({
    method: "get",
    url: `/items/${id}`,
  });
  return (await makeRequest(requestConfig)).data;
};
export const loadMore = async (offset: number): Promise<LoadMoreResponse> => {
  const params = new URLSearchParams({offset: offset.toString()})
  const requestConfig = getRequestConfig({
    method: "get",
    url: `/items?${params}`,
  });
  return (await makeRequest(requestConfig)).data;
};
export const loadMoreByCategory = async (options: {
  categoryId: number;
  offset: number;
}): Promise<LoadMoreResponse> => {
  const {categoryId, offset} = options;
  const params = new URLSearchParams({categoryId: categoryId.toString(), offset: offset.toString()});
  const requestConfig = getRequestConfig({
    method: "get",
    url: `/items?${params}`,
  });
  return (await makeRequest(requestConfig)).data;
};
export const sendOrderData = async (formData: OrderFormData): Promise<AxiosResponse> => {
  const requestConfig = getRequestConfig({
    method: "post",
    url: `/order`,
    data: formData,
  });
  return await makeRequest(requestConfig);
};
