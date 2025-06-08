import axios from "axios";
import { API_BASE_URL } from "../constants/config";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchProducts() {
  const { data } = await api.get("/products");
  return data;
}

export async function fetchProductById(id) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}

export async function fetchOrders() {
  const { data } = await api.get("/orders");
  return data;
}

export async function fetchOrderById(id) {
  const { data } = await api.get(`/orders/${id}`);
  return data;
}

export async function fetchUsers() {
  const { data } = await api.get("/users");
  return data;
}

export async function fetchUserProfile() {
  const { data } = await api.get("/profile");
  return data;
}
