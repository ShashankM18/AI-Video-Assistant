import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const processVideo = (data) =>
  API.post("/process", data);

export const askQuestion = (question) =>
  API.post("/chat", { question });