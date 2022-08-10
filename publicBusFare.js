//Problem 4: publicBusFare

// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

// উদাহরণ১ঃ

//  যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// উদাহরণ২ঃ

//  যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

function publicBusFare(parsons){
    const busCapacity = 50;
    const microCapacity = 11;
    const parTicketRate = 250;

    let remainder1 = parsons % busCapacity;
    let busPeople = parsons - remainder1
    let busLagbe = busPeople / busCapacity
    
    let remainder2 = remainder1 % microCapacity
    let microPeople = remainder1 - remainder2
    let microLagbe = microPeople / microCapacity

    if(typeof parsons !== 'number'){
        return 'Please enter a number'
    }

    else if(remainder1==0){
        let publicBusPrice = 0 * parTicketRate
        return publicBusPrice
    }

    else if(remainder2==0){
        let publicBusPrice = 0 * parTicketRate
        return publicBusPrice
    }
    else{
        let publicBusPrice = remainder2 * parTicketRate
        return publicBusPrice
    }
    

}
let totalPrice = publicBusFare('50')
console.log('totalPrice',totalPrice)
 
totalPrice = publicBusFare(117)
console.log('totalPrice',totalPrice)
totalPrice = publicBusFare(112)
console.log('totalPrice',totalPrice)
totalPrice = publicBusFare(235)
console.log('totalPrice',totalPrice)