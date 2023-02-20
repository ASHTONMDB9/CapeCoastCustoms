<template>
    <section id="listings">
      
      <h1 class="d-flex justify-content-center fw-bold" id="Showroom">SHOWROOM</h1>
      <div class="filter">
        <div class="container-fluid">
            <div id="function" class="d-flex justify-content-center border-0 me-5 ms-5">
              
              <select class="form-select ms-3 me-3" style="width: 200px;" aria-label="Default select example">
                <option selected>Price</option>
                <option value="1">€20,000-34,000</option>
                <option value="2">€35,000-51,000</option>
                <option value="3">€52,000-74,000</option>
                <option value="4">€75,000-99,000</option>
                <option value="5">€100,000-119,000</option>
                <option value="6">€120,000-299,000</option>
                <option value="7">€300,000-500,000</option>
              </select>
              
              <select class="form-select ms-3 me-3" id="track" onchange="filter2()" style="width: 110px;" aria-label="Default select example">
                <option selected value="all">Traction</option>
                <option value="AWD">AWD</option>
                <option value="RWD">RWD</option>
                <option value="FWD">FWD</option>
              </select>
    
              <select class="form-select ms-3 me-3" id="nation" onchange="filter3()" style="width: 150px;" aria-label="Default select example">
                <option selected value="all">Nationality</option>
                <option value="America">American</option>
                <option value="British">British</option>
                <option value="Germany">German</option>
                <option value="Italy">Italian</option>
                <option value="Japan">Japanese</option>
              </select>
              
              <select class="form-select ms-3 me-3" id="class" onchange="filter1()" style="width: 100px;" aria-label="Default select example">
                <option selected value="all">Type</option>
                <option value="Coupe">Coupe</option>
                <option value="Exotic">Exotic</option>
                <option value="Hypercar">Hypercar</option>
                <option value="Muscle">Muscle</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Tuner/Sport">Tuner/Sport</option>
              </select>
              
              <select class="form-select ms-3 me-3" id="filcars" onchange="filter()" style="width: 200px;" aria-label="Default select example">
                <option selected value="all">Brand</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="Audi">Audi</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Dodge">Dodge</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Ford">Ford/Shelby</option>
                <option value="Honda">Honda</option>
                <option value="Hummer">Hummer</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Maserati">Maserati</option>
                <option value="Mazda">Mazda</option>
                <option value="Mclaren">Mclaren</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Mini Cooper">Mini Cooper</option>
                <option value="Mitshubishi">Mitshubishi</option>
                <option value="Nissan">Nissan</option>
                <option value="Porsche">Porsche</option>
                <option value="Subaru">Subaru</option>
                <option value="Tesla">Tesla</option>
                <option value="Toyota">Toyota</option>
              </select>
                
                
              </div>
          </div>
          
        </div>
      
        <div v-if="Cars" class="container-fluid">
        <div v-for="car in Cars" v-bind:key="car.Id">
          <!-- <router-link :to="{ name: 'CarView', params: { id: car.Id }}"> -->
            <div class="card ms-3 me-3 mt-4 mb-4" style="width: 23rem;">
              <img v-bind:src="car.image" class="card-img" style="height: 28rem; width: 23rem; object-fit: cover;">
              <div class="card-img-overlay">
                <h3 class="card-title">{{car.Brand}}</h3>
                <h3 class="card-text"><i class="fa-solid fa-car"></i>{{car.Model}}</h3>
                <h3 class="card-text"><i class="fa-solid fa-sliders"></i>{{car.Type}}</h3>
                <h3 class="card-text"><i class="fa-solid fa-map"></i>{{car.Nationality}}</h3>
                <h3 class="card-text"><i class="fa-solid fa-gear"></i>{{car.Traction}}</h3>
              </div>
              <div>
              </div>
            </div>
            <button onclick="getCar()">Visit</button>
          <!-- </router-link> -->
        </div>
      </div>
    </section>
</template>
<script>
// import { mapActions } from 'vuex'
export default {
    mounted(){
        window.scrollTo(0,0)
        this.getCar()
    },
    data() {
    return {
   
    }
  },
  computed: {
    Cars() {
      return this.$store.state.cars
    }
  },
  methods: {
    // ...mapActions(['singleCar'])
     getCar() {
      // this.$store.dispatch('singleCar', 'hello')
      console.log('test')
    }
  }
}
</script>
<style scoped>
    #Showroom {
    text-decoration: underline red;
    color: white;
    padding-top: 200px;
    font-family: dead;
}
#listings {
  background-image: linear-gradient(to bottom, #000000, #280d13, #480d1a, #69071b, #8a0017, #8a0017, #8a0017, #8a0017, #69071b, #480d1a, #280d13, #000000);
}
  .row {
  --bs-gutter-x: 0 !important;
}
.container-fluid {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 100px;
  }
  .card:hover {
    background-color: red;
    transform: scale(1.2);
    transition: all 0.5s linear;
  }
  .card-img-overlay {
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }
  .card .card-img-overlay:hover {
    opacity: 1;
    transition: all 0.5s linear;
    text-shadow: 0 0 2px white, 0 0 2px white, 0 0 2px white, 3px 3px 3px black;
    font-family: phantom;
    color: black;
    text-align: start;
    font-size: 30px;
    font-family: game;
  }
.card:hover .card-img {
  filter: opacity(0.7);
  color: red;
}
</style>