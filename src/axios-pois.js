import axios from "axios";

const instance = axios.create({
  baseURL: "https://uninav-30080.firebaseio.com/",
});

export default instance;