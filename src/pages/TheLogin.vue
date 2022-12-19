<template>
  <div>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="user.email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="text" v-model="user.password" />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/plugins/axios";

export default {
  data: () => ({
    user: {
      email: "john@mail.com",
      password: "password",
    },
  }),

  methods: {
    async handleLogin() {
      try {
        const response = await api.post("users/login", { user: this.user });

        localStorage.setItem("token", response.data.user.token);

        this.$router.replace("dashboard");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
