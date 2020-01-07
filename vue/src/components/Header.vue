<template>
  <div class="header">
    <img class="header__logo" src="../assets/BAI_LOGO.png">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<style>
.header {
  background-color: #455A64;
  text-align: left;
}

.header__logo {
  width: 150px;
  pointer-events: none;
}

</style>
