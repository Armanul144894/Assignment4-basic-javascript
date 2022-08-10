function oilPrice(diesel,petrol,octen){
    if(typeof diesel !== 'number' || typeof petrol !== 'number' ||typeof octen !== 'number' ){
        return 'Please enter a number'
    }
    const dieselRate= 114
    const petrolRate= 130
    const octenRate= 135
    let dieselPrice = diesel * dieselRate
    let petrolPrice = petrol * petrolRate
    let octenPrice = octen * octenRate
    let totalPrice = dieselPrice + petrolPrice + octenPrice
    return totalPrice
}
let totalPrice = oilPrice(30,20,10)
console.log(totalPrice)
totalPrice = oilPrice(1,0,2)
console.log(totalPrice)
totalPrice = oilPrice(0,2,3)
console.log(totalPrice)