import axios from "axios";
import { memo } from "react";

const apiService = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  
  
  function getUsers() {
    return apiService.get("/users");
  }
  
  export const API = {
    getUsers,
  };
  