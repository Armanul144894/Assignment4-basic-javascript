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

let totalPrice = publicBusFare(144)
console.log('totalPrice',totalPrice)
 
totalPrice = publicBusFare(122)
console.log('totalPrice',totalPrice)
totalPrice = publicBusFare(46)
console.log('totalPrice',totalPrice)
totalPrice = publicBusFare(235)
console.log('totalPrice',totalPrice)