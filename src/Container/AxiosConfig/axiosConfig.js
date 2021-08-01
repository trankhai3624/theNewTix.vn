import axios from "axios";

const instance = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api/",
  params: {
    maNhom: "GP09",
  },
});

export default instance;
