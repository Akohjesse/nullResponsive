<script setup lang="ts">
// import Nullresponsive from "./components/ null-responsive.vue";
const nullconfig = {
  inputText: "input text",
  breakpoint: 1000,
  bg_color: "purple",
  text_color: "white",
};
</script>

<template>
  <div>
    <nullResponsive :config="nullconfig" />
  </div>
</template>

<style></style>
