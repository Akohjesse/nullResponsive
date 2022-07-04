<script setup lang="ts">
import Nullresponsive from "./components/ nullResponsive.vue";

const nullconfig = {
  inputText: "input text",
  imgPath: "logo.svg",
  breakpoint: 1000,
  bg_color: "purple",
  text_color: "white",
};
</script>

<template>
  <div>
    <Nullresponsive :config="nullconfig" />
  </div>
</template>

<style></style>
