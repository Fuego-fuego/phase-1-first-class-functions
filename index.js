
// Function callback
function receivesAFunction(callBackFunction){

        return callBackFunction();
}


// Returning a named f(x)

function returnsANamedFunction(){

    return function namedFunction(){
        
        console.log('Hey!!!!!!!!!!!!! Am returned! #name function');
    }
}


// Returning an anonymous f(x)

function returnsAnAnonymousFunction(){

    return function (){

        console.log(`am an anonymous function`)
    }
}
