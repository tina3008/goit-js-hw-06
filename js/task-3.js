'use strict';
class StringBuilder{    
    #value;

    constructor(initialValue){
        this.#value = initialValue;

    }
    getValue(){
        return this.#value
    }

    padEnd(str){  
        
        return this.#value = this.#value.split()
        .concat(str.split())
        .join('') 
                
    }

    padStart(str){
      
        return this.#value = str.split()
        .concat(this.#value.split())
        .join('') 
        
    }
    
    padBoth(str){
        
        return this.#value = str.split()
       .concat(this.#value.split(),str.split())
       .join('')
      
    }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
 builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="