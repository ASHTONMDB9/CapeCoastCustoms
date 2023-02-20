<template>
    <div v-if="car" id="container-fluid">
        <div v-for="car in car" v-bind:key="car.id" class="item">
            <div class="card mb-3 ms-4 me-4">
  <div class="row g-0">
    <div class="col-md-4">
      <img v-bind:src="car.image" class="img-fluid">
    </div>
    <div class="col-md-8">
        <button class="btn ms-3 mt-3" @click="addToCart(car)">Add to Cart</button>
      <div class="card-body">
          <h5 class="card-title mt-5">{{car[0].title}}</h5>
          <p class="card-category">{{car.category.toUpperCase()}}</p>
        <h6 class="card-text lead">{{car.description}}</h6>
        <hr>
            <h5 class="card-price">{{car.price}}</h5>
            <router-link to="/Showroom"><i class="fa-solid fa-arrow-left-long"></i></router-link>
      </div>
    </div>
  </div>
</div> 
        </div>
        </div>
</template>
<script>
export default {
        mounted() {
        window.scrollTo(0,0)
    }
}
</script>
<style>
    
</style>