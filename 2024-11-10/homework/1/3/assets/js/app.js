let geolocation = [
    {
    latitude:[],
    longitude:[]
},

  {
    latitude:[],
    longitude:[]
},

 {
    latitude:[],
    longitude:[]
}
]

geolocation[0].latitude = +prompt('please enter a latitude')
geolocation[0].longitude = +prompt('please enter a longitude')
geolocation[1].latitude = +prompt('please enter a latitude')
geolocation[1].longitude = +prompt('please enter a longitude')
geolocation[2].latitude = +prompt('please enter a latitude')
geolocation[2].longitude = +prompt('please enter a longitude')

for (const property in geolocation) {
    console.log(JSON.stringify(geolocation[property]));
    };

