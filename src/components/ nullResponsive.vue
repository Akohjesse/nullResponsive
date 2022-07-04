<template>
  <div v-if="showScreen" class="wrap">
    <div class="null_container">
      <div class="img_placeholder">
        <img alt="" />
      </div>
      <h2 v-html="inputText"></h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const showScreen = ref(false);
const props = defineProps<{
  inputText: string;
  imgPath: {
    type: string;
    required: true;
  };
  breakpoint: number;
}>();

const showSplashScreen = (breakpoint: number) => {
  if (window.innerWidth <= breakpoint) {
    showScreen.value = true;
  } else {
    showScreen.value = false;
  }
};

onMounted(() => {
  showSplashScreen(props.breakpoint);
  window.addEventListener("resize", () => {
    showSplashScreen(props.breakpoint);
  });
});
</script>

<style lang="scss">
.wrap {
  position: fixed;
  height: 100vh;
  z-index: 1000;
  background-color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .null_container {
    height: 100%;
    width: 100%;
    @include flex(center, center, 0);
    @include flexcol(2rem);
    .img_placeholder {
      width: 15rem;
      img {
        width: 100%;
      }
    }
    h2 {
      font-size: 2.9em;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: white;
      @include media("<=tablet") {
        font-size: 2.6em;
      }
      @include media("<=phone-tab") {
        font-size: 2.2em;
      }
      @include media("<=phone") {
        font-size: 1.5em;
      }
    }
  }
}
</style>
