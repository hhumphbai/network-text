<template>
  <div class="header">
    <img class="header__logo" src="../assets/BAI_LOGO.png">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #455A64;
  text-align: left;
}

.header__logo {
  width: 150px;
  pointer-events: none;
}

</style>
