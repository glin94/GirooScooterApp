
const car = (name, model, year, owner, phone, image) => ({ name, model, year, owner, phone, image })
const log=(text,type,date=new Date())=>({text, type,date})
const cars = [
    car('GT', 'S', 2018, 'Linar', '+7 953 233 32', 'images/10.jpg'),
    car('MTp', 'SN', 2014, 'Linar', '+7 963 433 32', 'images/9.jpg'),
    car('SrX', 'SA', 2013, 'Linar', '+7 963 211 32', 'images/11.jpg')
]
new Vue({
    el: '#app',
    data:
    {   
        cars: cars,
        car: cars[0],
        logs:[],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility:false
    },
    methods:
    {
        selectCar(index) {
            this.car = cars[index];
            this.selectedCarIndex = index;
        },
        newOrder() {
               this.modalVisibility=false;
               this.logs.push(log(`Succes order: ${this.car.name} - ${this.car.model}`,`ok`))
        },
        cancelOrder() {
            this.modalVisibility=false;
            this.logs.push(log(`Succes order: ${this.car.name} - ${this.car.model}`,`cnl`))
            
        }
    },
    computed:
    {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },

        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 ||  car.model.indexOf(this.search) > -1 
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
}) 
