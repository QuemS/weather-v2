import {createApp} from 'https://unpkg.com/vue@3.2.31/dist/vue.esm-browser.js'







let URL = 'https://api.openweathermap.org/data/2.5/weather?id=709930&appid=4e82586cbfc6a34a8ed48d27f97e994a&lang=ru';




const appConfig = {
  data() {
    return {
      title:'Погода',
      dataFetch: [],
     
      
    };
  },
  
  methods: {
    
  },
  
  computed: {
   showTemp(){
   
      return  this.dataFetch.main.temp
      
   }
  },
  async mounted(){
    let data = await fetch(URL);
        data = await data.json();
        this.dataFetch = data;
        console.log(this.dataFetch);
  }
}

const app = createApp(appConfig);

app.mount('#app');




//https://api.openweathermap.org/data/2.5/weather?id=709930&appid=4e82586cbfc6a34a8ed48d27f97e994a&lang=ru


//http://api.weatherapi.com/v1/forecast.json?key=69f5dcd0f23c44a997743916220904&q=Saksahan&days=3&aqi=yes&alerts=yes

//https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5
