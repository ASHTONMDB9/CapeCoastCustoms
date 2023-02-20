<template>
  <Navbar/>
    <RouterView/>
</template>

<script>

import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  },
};
</script>
<style>
  /*Fonts*/
@font-face {
    font-family: curly;
    src: url(./assets/Fonts/cadillac-font/CadillacPersonalUseItalic-K7pny.ttf);
}
@font-face {
    font-family: dead;
    src: url(./assets/Fonts/princess-and-the-frog-font/PrincessAndTheFrog-XdMd.ttf);
}
/*CSS RESET*/
* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
</style>
