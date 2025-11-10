<template>
  <div>
    <h1>User Dashboard</h1>
    <nav>
      <router-link to="/user/profile">Profile</router-link> |
      <router-link to="/user/settings">Settings</router-link> |
      <router-link :to="`/user/123`">User Details (ID 123)</router-link>
    </nav>

    <!-- Nested child routes render here -->
    <router-view />
  </div>
</template>
