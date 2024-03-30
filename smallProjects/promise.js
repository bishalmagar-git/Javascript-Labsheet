// const cart = ["shoes", "pants", "kurta"];

// createorder(cart, function(){
//     proceedToPayment(orderId);
// }
// );

const promise = createOrder(cart);

//data: undefined

promise.then(function(orderId){
    proceedToPayment(orderId);
});



