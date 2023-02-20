<template>
  <section id="landing">
    
    <h1 class="d-flex justify-content-center pt-5" id="Welcome">Welcome to <span id="Brand"> CapeCoast </span><span id="Brand2"> Customs</span></h1>
    <p class="d-flex justify-content-center" id="slogan">We bring you the best in cars new and old, for the brave and the bold. Best believe we got it sold</p>
    
    
  </section>
</template>
<script>
export default {
  mounted(){
        window.scrollTo(0,0)
    }
}
</script>
<style scoped>
  #landing {
    background-image: url(../assets/Images/Landing.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-attachment: fixed;
    height: 100vh;
    padding-top: 100px;
}
#Brand {
    font-family: curly;
    margin-left: 5px;
}
#Brand2 {
    font-family: dead;
    margin-left: 10px
}
#slogan {
    font-family: dead;
}

</style>
