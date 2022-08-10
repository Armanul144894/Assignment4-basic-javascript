function isJavaScriptFile(string){
    if(typeof string !== 'string'){
        return 'Please enter a number'
    }
    else if(string.endsWith('.js')) {
        return true
    }
    else{
        return false
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