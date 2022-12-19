<template>
  <div>
    <h1>Dashboard Page</h1>

    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import api from "@/plugins/axios";

export default {
  methods: {
    async handleLogout() {
      try {
        await api.post("users/logout");

        localStorage.removeItem("token");

        this.$router.replace("login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
