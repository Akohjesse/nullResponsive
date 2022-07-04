<template>
    <div class="wrap">
        <div class="null_container">
            <h2>
                Black is the new white
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
    @include flex(center, center, 0);
    @include flexcol(2rem);
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>