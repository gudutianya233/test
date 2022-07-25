import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      token: "token123456",
      userName: "未登录",
      user: "",
    };
  },

  getters: {},
  actions: {},
});
