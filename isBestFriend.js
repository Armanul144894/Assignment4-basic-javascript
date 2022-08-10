function isBestFriend(friend1,friend2){
    if(typeof friend1.name !== 'string' || typeof friend1.friend !== 'string' || typeof friend2.name !== 'string' || typeof friend2.friend !== 'string'){
        return 'Please enter a string'
    }

    else if(friend1.name==friend2.friend && friend1.friend==friend2.name){
        return true
    }
    
    else{
        return false
    }
}

let friend1={name:'arman', friend: 'ridoy'}
let friend2={name:'ridoy', friend: 'arman'}

let myFriend = isBestFriend(friend1,friend2)
console.log(myFriend)