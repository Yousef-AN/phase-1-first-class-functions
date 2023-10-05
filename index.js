function receivesAFunction(spy){
    return spy("function receivesAFunction");
}


function returnsANamedFunction(){
    return function d() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log(`This ${breakfast} is delicious!`);
    };
}