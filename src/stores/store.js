import { defineStore } from "pinia";
import apiClient from "@/axios";
export const useStore = defineStore({
    id: "store",
    state: () => {
        return {
            users: [],
        };
    },
    actions: {
        getUsers() {
            apiClient.get("users?size=10").then((response) => {
                this.users = response.data;
                console.log(this.users);
            });
        },
    },
});
