<template>
  <BannerComponent @buttonClicked="fillTable" />
  <div class="table d-flex justify-content-center">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Meno</th>
          <th>Priezvisko</th>
          <th>Email</th>
          <th>Dátum Narodenia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in store.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.first_name }}</td>
          <td>{{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.date_of_birth }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import { useStore } from '../stores/store';
  import BannerComponent from '../components/BannerComponent.vue';
  const store = useStore();
  
  const fillTable = () => {
   store.getUsers();
  }
</script>

<style scoped>
 
</style>
