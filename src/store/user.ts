import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      userName: "",
      userPassword: "",
    };
  },

  getters: {},
  actions: {},
});
