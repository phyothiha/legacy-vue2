<template>
  <div id="app">
    <h1>Conduit App</h1>

    <hr />

    <h1>Login As:</h1>
    <div>Username: username</div>
    <div>Email: email</div>

    <hr />

    <ul>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/articles">Article</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>
