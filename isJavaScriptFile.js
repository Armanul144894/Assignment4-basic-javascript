//Problem:2  
/* 
   * function name: isJavaScriptFile  
*/
function isJavaScriptFile(string){
    //Validation
    if(typeof string !== 'string'){
        return 'Please enter a number';
    }

    //Using string name.endswith()
    else if(string.endsWith('.js')) {
        return true;
    }
    else{
        return false;
    }
      
}


string = isJavaScriptFile('node.ja')
console.log(string)
string = isJavaScriptFile(10)
console.log(string)
string = isJavaScriptFile('node.js')
console.log(string)
string = isJavaScriptFile('node.pdf')
console.log(string)