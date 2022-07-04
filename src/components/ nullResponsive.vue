<template>
    <div class="wrap">
        <div class="null_container">
            <h2>
                Black is the new white
                <br>
                ~ Too Tired for a responsive build
            </h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.wrap{
    position: fixed;
    height: 100vh;
    z-index: 990;
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .null_container{
        height: 100%;
        width: 100%;
           @include flex(center, center, 0);
           @include flexcol(2rem);
        h2{
            font-size: 3em;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: white;
        }
    }
}
</style>