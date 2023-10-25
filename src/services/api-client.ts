import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e73d4f0d73f49aa9353c5ac04a4fa83",
  },
});
