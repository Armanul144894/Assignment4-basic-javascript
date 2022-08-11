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

    // Use toLowerCase()
    else if(friend1.name.toLowerCase()==friend2.friend.toLowerCase() && friend1.friend.toLowerCase()==friend2.name.toLowerCase()){
        return true;
    }

    else{
        return false;
    }
}

let friend1={name:'Arman', friend: 'ridoy'}
let friend2={name:'ridoy', friend: 'armAn'}

let myFriend = isBestFriend(friend1,friend2)
console.log(myFriend)