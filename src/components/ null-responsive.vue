<template>
  <div v-if="showScreen" class="wrap">
    <div class="npm-link">
      <a href="https://github.com/Akohjesse/nullResponsive">
        <h3>nullResponsive</h3>
      </a>
    </div>
    <div class="null_container">
      <div class="img_placeholder">
        <img :src="getUrl()" alt="" />
      </div>
      <h2 v-html="customConfig.inputText"></h2>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { inject } from "vue";
const showScreen = ref(false);
const props = defineProps<{
  config?: {
    inputText: string;
    imgPath?: string;
    breakpoint?: number;
    imglink?: string;
    bg_color?: string;
    text_color?: string;
  };
}>();

const configNull = inject("useNull") as any;
const customConfig = props.config ?? configNull;

const showSplashScreen = () => {
  if (customConfig.breakpoint) {
    if (window.innerWidth <= customConfig.breakpoint) {
      showScreen.value = true;
    } else {
      showScreen.value = false;
    }
  } else {
    if (window.innerWidth <= 1000) {
      showScreen.value = true;
    } else {
      showScreen.value = false;
    }
  }
};

const getUrl = () => {
  if (customConfig.imglink) {
    return customConfig.imglink;
  } else if (customConfig.imgPath) {
    return new URL(`/src/assets/${customConfig.imgPath}`, import.meta.url).href;
  }
};

onMounted(() => {
  showSplashScreen();
  window.addEventListener("resize", () => {
    showSplashScreen();
  });
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@700&family=Josefin+Sans:wght@700&display=swap");
* {
  margin: 0px;
  font-family: "Josefin sans";
  padding: 0;
  border-block: box-sizing;
}
.wrap {
position: fixed;
height: 100vh;
  z-index: 1000;
  background-color: v-bind("customConfig.bg_color");
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow:hidden ;
  .npm-link {
    position: absolute;
    bottom: 0;
    a {
      text-decoration: none;
      h3 {
        color: v-bind("customConfig.text_color");
      }
      font-size: 18px;
    }
  }
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
      font-size: 2.2em;
      padding: 0 2rem;
      text-align: center;
      color: v-bind("customConfig.text_color");
      @media screen and (max-width: 480px) {
        font-size: 1.5em;
      }
    }
  }
}
</style>
