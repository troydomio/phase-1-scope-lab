// Write your solution in this file!

var customerName = 'bob';

//why won't this pass the test, but it works! 

// function upperCaseCustomerName(){
//     let upper = customerName.toUpperCase(); return upper;
// }



function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = "test";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "test again"
}
//console.log(overwriteBestCustomer())
    
