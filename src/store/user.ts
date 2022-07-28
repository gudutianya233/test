import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => {
    return {
      userName: "",
      userPassword: "",
      keys:0
    };
  },

  getters: {},
  actions: {},
});
