import axios from "axios";

const API = axios.create({
  baseURL: "http://ec2-34-194-74-124.compute-1.amazonaws.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default API;
