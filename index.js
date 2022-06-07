function receivesAFunction(cb){
    console.log(cb());
}

receivesAFunction(function (){return ''});


receivesAFunction(returnsAnAnonymousFunction('KOY'));

function returnsANamedFunction() {
    function name(){
        return '';
    }
    return name;
    
}
function returnsAnAnonymousFunction(){
    return function (){
        return 'hello';
    }
    
}
