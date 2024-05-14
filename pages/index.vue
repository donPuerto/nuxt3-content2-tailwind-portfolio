<script lang="ts" setup>

</script>

<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about" class="custom-link" active-class="active-link">About page</NuxtLink>
  </div>
</template>



<style scoped>
  .custom-link {
    text-decoration: underline;
    /* Additional styling if needed */
  }
  .active-link {
    /* Your active link styling here */
    font-weight: bold;
    color: #007bff;
  }
</style>
