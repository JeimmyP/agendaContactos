<template>
  <div id="app" class="container is-max-desktop">
    <h1 class="title mt-5">
      Agenda de contactos
      <font-awesome-icon icon="address-book" class="icon is-medium"/>
    </h1>
    <router-view />
  </div>
</template>
  
<script>
export default {
  name: "App",
};
</script>
  
<style>
/* import style bulma */
@import "~bulma/css/bulma.css";
</style>
