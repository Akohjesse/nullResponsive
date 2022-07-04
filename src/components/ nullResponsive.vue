<template>
  <div v-if="showScreen" class="wrap">
    <div class="null_container">
      <div class="img_placeholder">
        <img :src="getUrl(config.imgPath)" alt="" />
      </div>
      <h2 v-html="config.inputText"></h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
const showScreen = ref(false);
const props = defineProps<{
  config: {
    inputText: string;
    imgPath: string;
    breakpoint: number;
    bg_color: string;
    text_color: string;
  };
}>();

const showSplashScreen = (breakpoint: number) => {
  if (window.innerWidth <= breakpoint) {
    showScreen.value = true;
  } else {
    showScreen.value = false;
  }
};

const getUrl = (image: string) => {
  return new URL(`../assets/${image}`, import.meta.url).href;
};

onMounted(() => {
  showSplashScreen(props.config.breakpoint);
  window.addEventListener("resize", () => {
    showSplashScreen(props.config.breakpoint);
  });
});
</script>

<style lang="scss">
.wrap {
  position: fixed;
  height: 100vh;
  z-index: 1000;
  background-color: v-bind("props.config.bg_color");
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
      color: v-bind("props.config.text_color");
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
