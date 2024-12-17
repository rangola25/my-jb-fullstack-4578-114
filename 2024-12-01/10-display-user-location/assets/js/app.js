const showUserLocation = () => {
    const location = navigator.geolocation.getCurrentPosition(myLocation => console.log(myLocation))
    console.log(`after getting current position`)
    console.log(location)
}

showUserLocation()