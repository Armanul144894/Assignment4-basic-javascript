//Problem:1  
/* Convert Radiant to Degree
    * function name: radianToDegree
*/
function radianToDegree(radian){
    //Validation
    if(typeof radian !== 'number'){
        return 'Please enter a number';
    }
    
    // * Degree = Radian * (180°/π)
    let degree = radian * (180 / Math.PI);
    degree = degree.toFixed(2);
    degree = parseFloat(degree);
    return degree;
}


//Problem:2  
/* 
   * function name: isJavaScriptFile  
*/
function isJavaScriptFile(string){
    //Validation
    if(typeof string !== 'string'){
        return 'Please enter a string';
    }

    //Using string name.endswith()
    else if(string.endsWith('.js')) {
        return true;
    }
    else{
        return false;
    }
      
}


 
// Problem 3: oilPrice
/* 
    Use three parameter
*/
function oilPrice(diesel,petrol,octen){
    //Validation
    if(typeof diesel !== 'number' || typeof petrol !== 'number' ||typeof octen !== 'number' ){
        return 'Please enter a number';
    }
    //variable declaration and rate initialization
    const dieselRate= 114;
    const petrolRate= 130;
    const octenRate= 135;

    // Oil price calculation
    let dieselPrice = diesel * dieselRate;
    let petrolPrice = petrol * petrolRate;
    let octenPrice = octen * octenRate;

    //Total price calculation
    let totalPrice = dieselPrice + petrolPrice + octenPrice;
    return totalPrice;
}



//Problem 4: publicBusFare

function publicBusFare(peoples){
    const busCapacity = 50;
    const microCapacity = 11;
    const parTicketRate = 250;

    //Calculate how many bus needed
    let remainder1 = peoples % busCapacity;
    let busPeople = peoples - remainder1;
    let busLagbe = busPeople / busCapacity;
    
    //calculate how many microbus needed
    let remainder2 = remainder1 % microCapacity;
    let microPeople = remainder1 - remainder2;
    let microLagbe = microPeople / microCapacity;

    //Find rest people who travel with public bus
    let restPeople = remainder2;

    //Calculate public bus ticker price
    let publicBusTicketPrice = restPeople * parTicketRate;

    //Validation
    if(typeof peoples !== 'number'){
        return 'Please enter a number';
    }

    else if(remainder1==0){
        return publicBusTicketPrice;
    }

    else if(remainder2==0){
        return publicBusTicketPrice;
    }

    else{ 
        return publicBusTicketPrice;
    }
    
}


//Problem 5: 
/* 
    *function name: isBestFriend
    *use two object parameter 
*/
function isBestFriend(friend1,friend2){

    // Validation
    if(typeof friend1.name !== 'string' || typeof friend1.friend !== 'string' || typeof friend2.name !== 'string' || typeof friend2.friend !== 'string'){
        return 'Please enter a string';
    }

    // Use toLowerCase() because javascript is case sensitive
    else if(friend1.name.toLowerCase()==friend2.friend.toLowerCase() && friend1.friend.toLowerCase()==friend2.name.toLowerCase()){
        return true;
    }

    else{
        return false;
    }
}