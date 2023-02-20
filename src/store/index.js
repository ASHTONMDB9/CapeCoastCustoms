import { createStore } from 'vuex'

export default createStore({
  state: {
    cars : [
      {
      Id: "1",
      Brand: "Nissan",
      Model: "Skyline R34",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/b2/1a/6d/b21a6d12ab5c8ca4bdfd965bed92eb18.jpg",
      Price: "€95,000"
    },
    {
      Id: "2",
      Brand: "Chevrolet",
      Model: "Camaro SS",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/e1/ab/5c/e1ab5c3af5a7b56d18173d875fa54218.jpg",
      Price: "€175,000"
    },
    {
      Id: "3",
      Brand: "Toyota",
      Model: "Supra Mk4",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/cf/85/db/cf85db5ee10eb336aee756dfe998471b.jpg",
      Price: "€70,000"
    },
    {
      Id: "4",
      Brand: "Land Rover",
      Model: "Evoque",
      Type: "SUV",
      Nationality: "America",
      Traction: "AWD",
      image: "https://i.pinimg.com/564x/e8/3e/be/e83ebe0db7b586c61bcfb9c92a56f475.jpg",
      Price: "€85,000"
    },
    {
      Id: "5",
      Brand: "Audi",
      Model: "R8",
      Type: "Coupe",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/f8/ec/0b/f8ec0b5ec2946539be989e7bd1e955bf.jpg",
      Price: "€180,000"
    },
    {
      Id: "6",
      Brand: "Bentley",
      Model: "Continetal GT",
      Type: "Coupe",
      Nationality: "British",
      Traction: "AWD",
      image: "https://i.pinimg.com/736x/f3/bb/5f/f3bb5fc9725c3781fbd56ff9be5e417b.jpg",
      Price: "€290,000"
    },
    {
      Id: "7",
      Brand: "BMW",
      Model: "M3 GTR E46",
      Type: "Tuner/Sport",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/5f/40/60/5f406069fe8eab9f532aec27f2eb28a8.jpg",
      Price: "€185,000"
    },
    {
      Id: "8",
      Brand: "Tesla",
      Model: "Roadster",
      Type: "Coupe",
      Nationality: "America",
      Traction: "AWD",
      image: "https://i.pinimg.com/564x/66/62/af/6662af5359c558c563fee6f8fdaf3c5f.jpg",
      Price: "€500,000"
    },
    {
      Id: "9",
      Brand: "Chevrolet",
      Model: "Corvette C7",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/1d/6a/4d/1d6a4d872f002c28702947306d88689a.jpg",
      Price: "€175,000"
    },
    {
      Id: "10",
      Brand: "Ferrari",
      Model: "458 Italia",
      Type: "Exotic",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/57/35/87/573587046a73a11b6e3df1b067b57d7c.jpg",
      Price: "€300,000"
    },
    {
      Id: "11",
      Brand: "Ford",
      Model: "Mustang GT",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/d4/76/68/d476682527c47f6cb0e42c3c2d034123.jpg",
      Price: "€200,000"
    },
    {
      Id: "12",
      Brand: "Honda",
      Model: "S2000",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/e6/b4/90/e6b4909baa48f261240a18df30de0195.jpg",
      Price: "€55,000"
    },
    {
      Id: "13",
      Brand: "Lamborghini",
      Model: "Huracán",
      Type: "Hypercar",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.postimg.cc/9QHVyQ0G/Lamborghini-Hurcan.jpg",
      Price: "€365,000"
    },
    {
      Id: "14",
      Brand: "Porsche",
      Model: "GT2 RS",
      Type: " Exotic",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.postimg.cc/TYVmVhQx/Porsche-GT2-RS.jpg",
      Price: "€195,000"
    },
    {
      Id: "15",
      Brand: "Mazda",
      Model: "RX7",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/d4/02/93/d40293c2079afe41ead4f7473fb78d7c.jpg",
      Price: "€35,000"
    },
    {
      Id: "16",
      Brand: "Mclaren",
      Model: "P1",
      Type: "Hypercar",
      Nationality: "British",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/ad/90/bd/ad90bd8ef756c05c7a0727b444b8d982.jpg",
      Price: "€250,000"
    },
    {
      Id: "17",
      Brand: "Mercedes-Benz",
      Model: "AMG G-Wagon",
      Type: "SUV",
      Nationality: "Germany",
      Traction: "AWD",
      image: "https://i.postimg.cc/X7k3c0Cm/Mercedes-Benz-AMG-G-Wagon.jpg",
      Price: "€375,000"
    },
    {
      Id: "18",
      Brand: "Mercedes-Benz",
      Model: "SLS AMG",
      Type: "Exotic",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/ac/c5/03/acc503f4a0417f5ac3906d518bdfb1a4.jpg",
      Price: "€220,000"
    },
    {
      Id: "19",
      Brand: "Mini Cooper",
      Model: "One S",
      Type: "Coupe",
      Nationality: "British",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/a8/30/f5/a830f5d014632679bdf4116882fd6201.jpg",
      Price: "€27,000"
    },
    {
      Id: "20",
      Brand: "Mitshubishi",
      Model: "Lancer Evoultion VIII",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "RWD",
      image: "https://i.postimg.cc/66Hf78Hm/Mitshubishi-Lancer-Evo-VIII.jpg",
      Price: "€45,000"
    },
    {
      Id: "21",
      Brand: "Dodge",
      Model: "Charger R/T",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/94/67/54/946754fd236fd9180a86990812085a5b.jpg",
      Description: " A Classic 70's Dodge Charger. Family!!",
      Price: "€145,000"
    },
    {
      Id: "22",
      Brand: "BMW",
      Model: "M3 GTR E46",
      Type: "Tuner/Sport",
      Nationality: "Germany",
      Traction: "AWD",
      image: "https://i.postimg.cc/156qFKTx/BMW-M3-GTR-Jonatas-Franzen.jpg",
      Price: "€545,000"
    },
    {
      Id: "23",
      Brand: "Nissan",
      Model: "350Z",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/5d/29/5d/5d295da7feab5e5be469e87e4401d7e8.jpg",
      Price: "€165,000"
    },
    {
      Id: "25",
      Brand: "Subaru",
      Model: "Impreza WRX STI",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "AWD",
      image: "https://i.postimg.cc/7P57H4nZ/Stanced-Subaru-Impreza-wrx-sti.jpg",
      Price: "€95,000"
    },
    {
      Id: "26",
      Brand: "Nissan",
      Model: "Skyline R35",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "AWD",
      image: "https://i.pinimg.com/564x/63/60/54/6360547e0149068dff97f801e3c267f2.jpg",
      Price: "€125,000"
    },
    {
      Id: "27",
      Brand: "Porsche",
      Model: "911 turbo",
      Type: "Tuner/Sport",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/bb/f0/82/bbf082e4a1ef7acf78b96c1814b32537.jpg",
      Price: "€229,000"
    },
    {
      Id: "28",
      Brand: "Hummer",
      Model: "H2",
      Type: "SUV",
      Nationality: "America",
      Traction: "AWD",
      image: "https://i.pinimg.com/564x/f8/80/d6/f880d60b9953f267ff4923b6ab15e872.jpg",
      Price: "€144,000"
    },
    {
      Id: "29",
      Brand: "Maserati",
      Model: "Gran Turismo",
      Type: "Coupe",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/88/be/27/88be27da3453ff1af82025b39b297ada.jpg",
      Price: "€184,000"
    },
    {
      Id: "30",
      Brand: "Nissan",
      Model: "Skyline R32",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/26/cc/c0/26ccc0e592f0f29a9163cc435430fca4.jpg",
      Price: "€76,000"
    },
    {
      Id: "31",
      Brand: "Ferrari",
      Model: "F40",
      Type: "Exotic",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/6a/b5/2b/6ab52bfc0d3bea7f1f530f7c0a4e78d3.jpg",
      Price: "€325,000"
    },
    {
      Id: "32",
      Brand: "Lamborghini",
      Model: "Gallardo",
      Type: "Exotic",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/f2/5c/a7/f25ca7a2f698f22e4e8f668de5463cbe.jpg",
      Price: "€359,000"
    },
    {
      Id: "33",
      Brand: "Mini Cooper",
      Model: "1000",
      Type: "Coupe",
      Nationality: "British",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/76/3d/d9/763dd90fddd69f2ca0e9d4424979ac6a.jpg",
      Price: "€23,000"
    },
    {
      Id: "34",
      Brand: "Ferrari",
      Model: "Testarossa",
      Type: "Exotic",
      Nationality: "Italy",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/6b/3e/67/6b3e6715ead4ce07c09649bae8ef0bc8.jpg",
      Price: "€349,000"
    },
    {
      Id: "35",
      Brand: "Ford",
      Model: "GT 500",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/7d/ae/96/7dae96847c2449174e74f0172d8f609d.jpg",
      Price: "€85,000"
    },
    {
      Id: "36",
      Brand: "Dodge",
      Model: "SRT Challenger",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/a4/04/bd/a404bd820e66e6559ec92d33b950e129.jpg",
      Price: "€133,000"
    },
    {
      Id: "37",
      Brand: "Chevrolet",
      Model: "1969 Camaro SS",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/37/75/89/3775893097495aa1c0ec1c54ec5c237f.jpg",
      Price: "€98,000"
    },
    {
      Id: "38",
      Brand: "Toyota",
      Model: "AE86",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/b8/09/28/b80928531528278bf1c0f704f09ea929.jpg",
      Price: "€69,000"
    },
    {
      Id: "39",
      Brand: "Subaru",
      Model: "BRZ",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/03/99/a2/0399a2960519731ddd192bb5f5a0c572.jpg",
      Price: "€86,000"
    },
    {
      Id: "40",
      Brand: "Lamborghini",
      Model: "Urus",
      Type: "SUV",
      Nationality: "Italy",
      Traction: "AWD",
      image: "https://i.pinimg.com/564x/8d/0a/67/8d0a67f37d3d922a77a85a620d47643c.jpg",
      Price: "€558,000"
    },
    {
      Id: "41",
      Brand: "Honda",
      Model: "V-tec Civic",
      Type: "Tuner/Sport",
      Nationality: "Japan",
      Traction: "FWD",
      image: "https://i.pinimg.com/564x/ff/cb/de/ffcbdee420aa48a1a03584e187374a98.jpg",
      Price: "€34,000"
    },
    {
      Id: "42",
      Brand: "Ford",
      Model: "GT 40",
      Type: "Muscle",
      Nationality: "America",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/dc/9d/6a/dc9d6ab22332a7b33a4c9e3618c62d1f.jpg",
      Price: "€245,000"
    },
    {
      Id: "43",
      Brand: "Aston Martin",
      Model: "One-77",
      Type: "Coupe",
      Nationality: "British",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/2d/1b/06/2d1b062d2096da65127f91778be6cc4f.jpg",
      Price: "€237,000"
    },
    {
      Id: "44",
      Brand: "Audi",
      Model: "RS7",
      Type: "Tuner/Sport",
      Nationality: "Germany",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/12/36/cd/1236cd2c78c1d368b749671ce57f6abd.jpg",
      Price: "€145,000"
    },
    {
      Id: "45",
      Brand: "Aston Martin",
      Model: "DB9",
      Type: "Coupe",
      Nationality: "British",
      Traction: "RWD",
      image: "https://i.pinimg.com/564x/c4/57/38/c4573821a8578c76f0bc8fcf86065569.jpg",
      Price: "€200,000"
    },
      ],
      car: null
  },
  getters: {
  },
  mutations: {
    setCar: (state, car) => {
      state.car = car
    },

  },
  actions: {
    singleCar(conttext, payload) {
      console.log(payload)
    }
  },
  modules: {
  }
})
