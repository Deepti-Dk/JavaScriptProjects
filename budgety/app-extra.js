//Module pattern
//Modules bcz pieces of codes related to one another to be kept together
//Data encapsulation: public and private data and allows to hide implementation details of a private modules for security


//IIFE-bcz of closures, an inner func has access to all from outer func even after outer func has returned
var budgetController = (function() {

    var x = 23; //private var

    var add = function(a) { //private add function
        return x + a;
    }
    return {
        publicTest: function(b) { //func returned and can be used in public scope; will always have access to var x and add func
            //console.log(add());
            return(add(b));
        }
    }
})();

var UIController = (function(){

})();

//above two modules are private and dont have access to each other, these are standalone modules ; seperation of concerns....each func independant

//app controller
var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

}) (budgetController, UIController);
