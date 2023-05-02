import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://random-data-api.com/api/v2/",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;
