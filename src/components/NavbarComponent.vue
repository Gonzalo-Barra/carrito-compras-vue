<template>
  <div class="navbar d-flex justify-content-between text-white py-3">
    <div class="container">
      <router-link to="/">
        <div class="d-flex">
          <h4 class="mb-0">&#127829;</h4>
          <h4 class="mx-1 mb-0">Pizzería Mamma Mia!</h4>
        </div>
      </router-link>

      <router-link to="/carrito">
        <div>
          <h4 class="mb-0">&#128722; Pagar Aquí</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar-component",
};
</script>

<style scoped>
.navbar {
  background: #17a2b8;
}
</style>
